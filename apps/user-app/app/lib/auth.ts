import Credentials from "next-auth/providers/credentials";
import prisma from "@repo/db/client";
import { pages } from "next/dist/build/templates/app-page";
import { signIn, signOut } from "next-auth/react";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { signInBody } from "./signInValidation";
import { Console, error } from "console";
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

        const { success } = signInBody.safeParse({ phoneNumber, password });
        if (!success) {
          return null;
        }
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

        console.log("before");

        if (!userInfo.verified) {
          // return { error: "User not verified" };
          throw new Error("User not verified!")
        }

        console.log("After");
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
    // async signIn({
    //   user,
    //   account,
    //   profile,
    //   email,
    //   credentials,
    // }: {
    //   user: any;
    //   account: any;
    //   profile: any;
    //   email: any;
    //   credentials: any;
    // }) {
    //   if (user?.error === "User not verified") {
    //     throw new Error("User not verified");
    //   }
    //   return true;
    // },
    async session({ session, token }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
    signOut: "/signin",
  },
};
