import connectMongoDB from '@/db/connection/db-connection';
import User from '@/db/models/users';
import bcrypt from 'bcryptjs';
import { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      async authorize(credentials: any): Promise<any> {
        const { email, password } = credentials;
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log('Error: ', error);
        }
      },
    }),
  ],
  callbacks: {
    // async jwt({ token, user }: { token: any; user?: any }): Promise<any> {
    //   return Promise.resolve({ ...token, ...user });
    // },
    // async session({ session, token }: { session: any; token: any }): Promise<any> {
    //   // Send properties to the client, like an access_token from a provider.
    //   const newsession = { ...session };
    //   newsession.user = token;
    //   return Promise.resolve(newsession);
    // },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
