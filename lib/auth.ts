import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { RetrieveUser } from "@/actions/user";
import { db } from "@/db"
import bcrypt from 'bcryptjs';

export const authOptions = {
  adapter: DrizzleAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string,
          password: string,
        };

        const foundUser = await RetrieveUser(email);

        if (!foundUser) {
          return null;
        }

        const valid = await bcrypt.compare(String(password), foundUser.password!)

        if (!valid) {
          return null;
        }

        if (foundUser) {
          return foundUser as any

        }
        return null;
      }

    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV !== "production",
  callbacks: {
    // async jwt(token, user, account, profile, isNewUser) {
    //   // Add access_token to the token right after signin
    //   if (account?.accessToken) {
    //     token.accessToken = account.accessToken
    //   }
    //   console.log("jwt", token, user)
    //   return token
    // },
    // async session(session, token) {
    //   // Add property to session, like an access_token from a provider.
    //   // session.accessToken = token.accessToken
    //   console.log("session", session, token)
    //   return session
    // }
  }
};
