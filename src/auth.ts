import NextAuth, { CredentialsSignin } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
export { useSession } from 'next-auth/react';

import { userAuthRepository } from '@/repositories/UserAuth.repository';

export const {
  handlers,
  signIn,
  signOut,
  auth,
  unstable_update: updateSession,
} = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', required: true },
        password: { label: 'Password', type: 'password', required: true },
      },
      async authorize({ email, password }) {
        if (!email || !password) {
          return null;
        }

        const user = await userAuthRepository.findUserByCredentials(email as string, password as string);

        if (!user) {
          return null;
        }

        return {
          id: user.user.id,
          email: user.email,
          name: user.user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, trigger, user, session }) {
      if (user) {
        // User object is available only after singin
        return {
          ...token,
          id: user.id,
          role: user.role,
        };
      }

      if (trigger === 'update' && session?.user) {
        return {
          ...token,
          name: session.user.name,
        };
      }

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          name: token.name,
          role: token.role,
          id: token.id,
        },
      };
    },
  },
  logger: {
    error(error: Error) {
      // Suppresssing CredentialsSignin errors because there is no reason to show server error for wrong credentials
      if (error instanceof CredentialsSignin) {
        return;
      }
      // Otherwise, log other errors
      // eslint-disable-next-line no-console
      console.error(error);
    },
    warn(message: string) {
      // eslint-disable-next-line no-console
      console.warn(message);
    },
    debug(message: string) {
      // eslint-disable-next-line no-console
      console.debug(message);
    },
  },
});
