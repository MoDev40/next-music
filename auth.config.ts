import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export default {
  providers: [Google],
  callbacks: {
    async authorized({ auth }) {
      return !!auth?.user;
    },
    async jwt({ token, user }) {
      if (!user?.role) return token;
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
} satisfies NextAuthConfig;
