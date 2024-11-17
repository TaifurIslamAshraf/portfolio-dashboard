import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config = {
  serverApi: process.env.NEXT_PUBLIC_SERVER_API!,
  appENV: process.env.APP_ENV!,
};

export default config;
