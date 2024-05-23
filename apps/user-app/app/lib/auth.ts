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
      async authorize(credentials): Promise<any> {
        const userInfo = await prisma.user.findFirst({
          where: {
            phoneNumber: credentials?.phoneNumber.toString(),
            password: credentials?.password.toString(),
          },
        });

        if (!userInfo) {
          return null;
        }

        return {
          id: userInfo.id,
          firstName: userInfo.firstName,
          phoneNumber: userInfo.phoneNumber,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
