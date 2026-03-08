import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";
import type { Plugin } from "vite";

// Plugin to serve og-image.jpg with correct Content-Type for social media crawlers
function ogImagePlugin(): Plugin {
  return {
    name: "og-image-server",
    configureServer(server) {
      // Serve at both URLs to support cache-busting for X/Twitter
      const serveOgImage = (_req: any, res: any, next: any) => {
        const imgPath = path.resolve(
          import.meta.dirname,
          "client",
          "public",
          "og-image.jpg"
        );
        if (fs.existsSync(imgPath)) {
          const img = fs.readFileSync(imgPath);
          res.setHeader("Content-Type", "image/jpeg");
          res.setHeader("Cache-Control", "public, max-age=86400");
          res.setHeader("Content-Length", img.length);
          res.end(img);
        } else {
          next();
        }
      };
      server.middlewares.use("/api/trpc/og-image", serveOgImage);
      server.middlewares.use("/api/trpc/og-image-v2", serveOgImage);
    },
  };
}

const plugins = [
  react(),
  tailwindcss(),
  jsxLocPlugin(),
  vitePluginManusRuntime(),
  ogImagePlugin(),
];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false, // Will find next available port if 3000 is busy
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
