import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema.js';

const connectionString = process.env.DATABASE_URL!;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

// Create mysql connection
const client = mysql.createPool(connectionString);

// Create drizzle instance
export const db = drizzle(client, { schema, mode: 'default' });
