import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
        credentials: {
          email: { label: "Email", required: true },
          password: { label: "Password", type: "password", required: true },
        },
        async authorize() {
          return null;

          /// authorize login
        },
      }),
  ],
})