import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      // console.log(token);
      // Allow access if the user has the admin role
      return !!token && token?.user?.role === "admin";
    },
  },
  pages: {
    signIn: "/login",
    error: "/error",
    signOut: "/login",
  },
});

export const config = {
  matcher: ["/((?!api|login|register|forgotPassword).*)"],
};
