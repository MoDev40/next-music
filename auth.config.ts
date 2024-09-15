import { NextAuthConfig } from "next-auth";
import prisma from "./lib/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
const authConfig = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60,
  },
  callbacks: {
    async authorized({ auth }) {
      return !!auth?.user;
    },
    async jwt({ token, user }) {
      if (!user?.role) return token;
      console.log(user.id);
      return {
        ...token,
        role: user.role,
        id: user.id,
      };
    },
    async session({ session, token }) {
      if (!token.role && !session.user) return session;
      return {
        ...session,
        user: {
          ...session.user,
          role: token?.role,
          id: token.id,
        } as unknown as any,
      };
    },
  },
  providers: [],
} satisfies NextAuthConfig;

export default authConfig;
