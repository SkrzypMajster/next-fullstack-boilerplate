import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

import { userAuthRepository } from "@/repositories/UserAuth.repository";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
        credentials: {
          email: { label: "Email", required: true },
          password: { label: "Password", type: "password", required: true },
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
          };
        },
      }),
      
  ],
})