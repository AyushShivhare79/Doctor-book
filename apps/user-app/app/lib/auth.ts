import Credentials from "next-auth/providers/credentials";
import { PrismaClient } from "@repo/db";

const prisma = new PrismaClient();

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

        console.log("userInfo: ", userInfo);

        console.log("wait");
        // await new Promise((resolve) => setTimeout(resolve, 4000));
        console.log("after");
        if (!userInfo) {
          return null;
        }
        console.log(credentials);
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
};
