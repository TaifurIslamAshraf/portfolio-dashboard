import config from "@/lib/config";
import type { Config } from "drizzle-kit";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schemas.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: config.dbUrl,
  },
}) satisfies Config;
