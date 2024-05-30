import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // adapter: MongoDBAdapter(clientPromise) as Adapter,
};

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
