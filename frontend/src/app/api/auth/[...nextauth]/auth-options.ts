import { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { env } from '@/env.mjs';
// import isEqual from 'lodash/isEqual';
import { pagesOptions } from './pages-options';

export const authOptions: NextAuthOptions = {
  // debug: true,
  pages: {
    ...pagesOptions,
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token?.user['username'] || '',
          gender: token?.user['gender'] || '',
          phone: token?.user['phone'] || '',
          placebirth: token?.user['placebirth'] || '',
          birthdate: token?.user['birthdate'] || '',
          address: token?.user['address'] || '',
          idUser: token?.user['id'] || '',
          token: token?.user['dataToken'] || '',
          id: token.idToken as string,
          role: token?.user['role'] || 'user',
        },
      };
    },
    async jwt({ token, user }) {
      if (user) {
        // return user as JWT
        token.user = user;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      const parsedUrl = new URL(url, baseUrl);
      // if (parsedUrl.searchParams.has('callbackUrl')) {
      //   return `${baseUrl}${parsedUrl.searchParams.get('callbackUrl')}`;
      // }
      // if (parsedUrl.origin === baseUrl) {
      //   return url;
      // }
      return baseUrl;
    },
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {},
      async authorize(credentials: any) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid
        // const user = {
        //   email: 'admin@admin.com',
        //   password: 'admin',
        // };

        // if (
        //   isEqual(user, {
        //     email: credentials?.email,
        //     password: credentials?.password,
        //   })
        // ) {
        //   return user as any;
        // }
        console.log(credentials);
        if (typeof credentials == 'object') {
          return {
            email: credentials?.email,
            username: credentials?.username,
            name: credentials?.name,
            gender: credentials?.gender,
            id: credentials?.id,
            phone: credentials?.phone,
            placebirth: credentials?.placebirth,
            birthdate: credentials?.birthdate,
            address: credentials?.address,
            image: null,
            dataToken: credentials.token,
            role: credentials?.role,
          } as any;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID || '',
      clientSecret: env.GOOGLE_CLIENT_SECRET || '',
      allowDangerousEmailAccountLinking: true,
    }),
  ],
};
