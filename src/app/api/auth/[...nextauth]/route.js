import axios from "axios";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authOptions = {
  providers: [
    Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_KEY}/api/user/google`,
        {
          username: user?.email,
          email: user?.email,
          googleId: user?.id,
        }
      );

      if (data?.token) {
        return true;
      }

      return false;
    },
    async redirect({ url, baseUrl }) {
      return url;
    },
    async jwt({ token, user }) {
      return token;
    },
    async session({ session, token }) {
      return session;
    },
  },
  pages: {
    signIn: "/signin", // Custom sign-in page path
    error: "/signin", // Redirect to sign-in page on error
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
