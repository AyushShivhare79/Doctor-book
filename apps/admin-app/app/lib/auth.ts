import { PrismaClient } from "@repo/db";
import Credentials from "next-auth/providers/credentials";

const prisma = new PrismaClient();
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
          fees: userExist.fees,
          address: userExist.address,
          category: userExist.category,
          experience: userExist.experience,
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
