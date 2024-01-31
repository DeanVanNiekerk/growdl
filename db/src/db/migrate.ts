import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';

config();

const connectionString = process.env.CONNECTION_STRING as string;
const sql = postgres(connectionString, { max: 1 });
const db = drizzle(sql);
await migrate(db, { migrationsFolder: 'drizzle' });
await sql.end();
