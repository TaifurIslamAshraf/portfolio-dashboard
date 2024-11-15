import config from "@/lib/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

let sslMode = "";

if (config.appENV === "prod") {
  sslMode = "?sslmode=require";
}

export const pool = new Pool({
  connectionString: config.dbUrl + sslMode,
});

export const db = drizzle(pool, {
  logger: true,
});
