import express from 'express';
import { createServer } from 'http';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from './router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Add JSON body parser
  app.use(express.json());

  // OGP image endpoint - MUST be registered BEFORE tRPC middleware
  // Using /api/trpc prefix to bypass Cloudflare's static file caching
  // Also serve at v2 URL to force X/Twitter cache refresh
  app.get(['/api/trpc/og-image', '/api/trpc/og-image-v2'], (_req, res) => {
    const imgPath = path.resolve(__dirname, '..', 'client', 'public', 'og-image.jpg');
    const prodImgPath = path.resolve(__dirname, 'public', 'og-image.jpg');
    const filePath = fs.existsSync(imgPath) ? imgPath : prodImgPath;
    if (fs.existsSync(filePath)) {
      res.setHeader('Content-Type', 'image/jpeg');
      res.setHeader('Cache-Control', 'public, max-age=86400');
      res.sendFile(filePath);
    } else {
      res.status(404).send('Not found');
    }
  });

  // tRPC endpoint (registered AFTER og-image route)
  app.use(
    '/api/trpc',
    createExpressMiddleware({
      router: appRouter,
      createContext: () => ({}),
    })
  );

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === 'production'
      ? path.resolve(__dirname, 'public')
      : path.resolve(__dirname, '..', 'dist', 'public');

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get('*', (_req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
