import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID || "",
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET || "",
    }),
  ],
  callbacks: {
    //@ts-ignore
    async jwt(token: any) {
      return token;
    },
    async signOut({ token, session, res }: any) {
      // Delete auth cookie on signout so it doesn't persist past log out
      token = {};
      session = {};
      res.setHeader("Set-Cookie", "");
    },
    //@ts-ignore
    async session(session: any, token: any) {
      session.accessToken = token;
      // Puedes personalizar la sesión de usuario aquí si lo deseas
      return session;
    },
  },
});
