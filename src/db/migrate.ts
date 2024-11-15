import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db, pool } from "./db";

const runMigration = async () => {
  console.log("⏳ Running migrations...");

  const start = Date.now();

  try {
    await migrate(db, { migrationsFolder: "drizzle" });
    const end = Date.now();
    console.log(`✅ Migrations completed in ${end - start}ms`);
  } catch (error) {
    console.error("❌ Migration failed!", error);
  }

  await pool.end();
};

runMigration();
