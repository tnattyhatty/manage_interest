import { userService } from '@/server-actions/services/userService';
import { getServerSession, type NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt', //(1) the default is jwt when no adapter defined, we redefined here to make it obvious what strategy that we use
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      //(2)
      console.log('------------ JWT ------------');
      console.log({ token }, { account }, { profile });
      if (account && account.type === 'credentials') {
        token.userId = account.providerAccountId; // this is Id that coming from authorize() callback
      }
      return token;
    },
    async session({ session, token, user }) {
      //(3)
      console.log('------------ SESSION ------------');
      console.log({ session }, { token }, { user });
      let newSession: any = { ...session };
      newSession.user.id = token.userId;
      return newSession;
    },
  },
  pages: {
    signIn: '/', //(4) custom signin page path
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        return userService.authenticate(username, password); //(5)
      },
    }),
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions); //(6)
