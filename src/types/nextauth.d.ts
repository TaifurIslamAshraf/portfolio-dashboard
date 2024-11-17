import "next-auth";
import { IUser } from "./user";

declare module "next-auth" {
  interface Session {
    user: IUser;
    accessToken: string;
    refreshToken: string;
    expireIn: number;
  }
}

import "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    user: IUser;
    accessToken: string;
    refreshToken: string;
    expireIn: number;
  }
}
