import prisma from "@repo/db/client";
import Credentials from "next-auth/providers/credentials";

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

        const userExist = await prisma.admin.findFirst({
          where: {
            phoneNumber,
            password,
          },
        });

        if (!userExist) {
          return null;
        }

        return {
          id: userExist.id.toString(),
          firstName: userExist.firstName,
          lastName: userExist.lastName,
          phoneNumber: userExist.phoneNumber,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
};
