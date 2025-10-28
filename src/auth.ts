import NextAuth, { CredentialsSignin, DefaultSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
export { useSession } from 'next-auth/react';

import { UserRole } from '@/types/users';
import { userAuthRepository } from '@/repositories/UserAuth.repository';

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      id: string;
      role: UserRole;
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession['user'];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
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
          image: user.user.image,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // User object is available only after singin
        return {
          ...token,
          id: user.id,
          // TODO: Handle role type for User interface
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          role: (user as any).role,
        };
      }

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          role: token.role,
          id: token.id as string,
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
