import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config = {
  dbUrl: process.env.DATABASE_UR!,
  appENV: process.env.APP_ENV!,
};

export default config;
