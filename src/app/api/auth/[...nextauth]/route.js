import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const authOptions = {
  providers: [
    Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("SignIn callback triggered");
      return true; // Allow sign-in for now
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect callback triggered");
      return baseUrl;
    },
    async jwt({ token, user }) {
      console.log("JWT callback triggered");
      return token;
    },
    async session({ session, token }) {
      console.log("Session callback triggered");
      return session;
    },
  },
  pages: {
    signIn: "/signin", // Custom sign-in page path
    error: "/signin", // Redirect to sign-in page on error
  },
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
