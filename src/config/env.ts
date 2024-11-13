const config = {
  env: process.env.NEXT_PUBLIC_NODE_ENV,
  serverApi: process.env.NEXT_PUBLIC_SERVER_API as string,
  serverURl: process.env.NEXT_PUBLIC_SERVER_URL as string,
};

export default config;
