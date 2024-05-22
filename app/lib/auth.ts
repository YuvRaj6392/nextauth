import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github"
import { pages } from "next/dist/build/templates/app-page";
import { signIn } from "next-auth/react";
export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        console.log(credentials);
        return {
          id: "user1",
          name: "yuvraj",
          email: "yuvraj@gmail.com",
        };
      },
    }),
    GoogleProvider({
      clientId:process.env.GOOGLE_ID || "",
      clientSecret:process.env.GOOGLE_SECRET || ""
    }),
    GithubProvider({
      clientId:process.env.GITHUB_CLIENT_ID || "",
      clientSecret:process.env.GITHUB_CLIENT_SECRET || ""
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: ({ user, token }: any) => {
      console.log(token);
      return token;
    },
    session: ({ session, token, user }: any) => {
      if (session.user) {
        session.user.id = token.sub;
      }
      console.log(session);
      return session;
    },
  },
  pages:{
    signIn:"/signin"
  }
};
