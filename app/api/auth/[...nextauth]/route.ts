import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import PinterestProvider from "next-auth/providers/pinterest";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
  // Secret for Next-auth, without this JWT encryption/decryption won't work
  secret: process.env.NEXTAUTH_SECRET,

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    PinterestProvider({
      clientId: process.env.PINTEREST_ID as string,
      clientSecret: process.env.PINTEREST_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
});

export { handler as GET, handler as POST };
