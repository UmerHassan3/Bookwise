import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

import { usersTable } from "./database/schema"
import { db } from "./database/drizzle"
import { eq } from "drizzle-orm"
import { compare } from "bcryptjs"

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const email = credentials?.email as string
        const password = credentials?.password as string

        if (!email || !password) return null

        const user = await db
          .select()
          .from(usersTable)
          .where(eq(usersTable.email, email))

        if (!user || user.length === 0) return null

        const dbUser = user[0]

        const isPasswordValid = await compare(password, dbUser.password)

        if (!isPasswordValid) return null

        return {
          id: dbUser.id.toString(),
          email: dbUser.email,
          name: dbUser.fullName,
        }
      },
    }),
  ],

  pages: {
    signIn: "/sign-in",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.name = user.name
      }
      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.name = token.name as string
      }
      return session
    },
  },
})