import Credentials from "next-auth/providers/credentials";
import prisma from "@repo/db/client";
import { pages } from "next/dist/build/templates/app-page";
import { signIn, signOut } from "next-auth/react";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

//zod validation or in custom page check where is it good?

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        phoneNumber: {
          label: "Phone Number",
          type: "text",
          placeholder: "Enter Number",
        },
        password: {
          label: "Password",
          type: "text",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials) {
        const phoneNumber = credentials?.phoneNumber;
        const password = credentials?.password;
        const userInfo = await prisma.user.findFirst({
          where: {
            phoneNumber,
            password,
          },
        });

        // console.log("Before");

        // await new Promise((resolve) => setTimeout(resolve, 4000));

        // console.log("After");

        if (!userInfo) {
          return null;
        }

        if (!userInfo.verified) {
          return null;
        }

        return {
          id: userInfo.id.toString(),
          firstName: userInfo.firstName,
          lastName: userInfo.lastName,
          phoneNumber: userInfo.phoneNumber,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // async redirect({ url, baseUrl }) {
    //   return baseUrl
    // },
    async session({ session, token }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
  // pages: {
  //   signIn: "/signin",
  //   signOut: "/signin",
  // },
};
