import { db } from "@/db/db";
import { users } from "@/db/schemas";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

function passwordToSalt(password: string) {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(password, saltRounds);
  return hash;
}

async function getUserFromDb(username: string) {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.name, username))
    .limit(1)
    .execute();
  return user[0];
}

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials.username as string;
        const password = credentials.password as string;

        if (!username || !password) {
          return null;
        }

        const user = await getUserFromDb(username);
        if (user.password !== password) {
          return null;
        }
        if (!user) {
          throw new Error("User was not found and could not be created.");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async session({ session, user, token }: any) {
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
  session: {
    strategy: "jwt",
  },
});
