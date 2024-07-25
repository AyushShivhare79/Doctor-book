import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

//Zod
//UserExists
//CreateUser

export const signupBody = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "First Name should be more than 2" })
      .max(30, { message: "First Name should be less than 30" }),
    lastName: z
      .string()
      .min(2, { message: "Last Name should be more than 2" })
      .max(30, { message: "Last Name should be less than 30" }),
    phoneNumber: z
      .string()
      .min(10, { message: "Invalid Number" })
      .max(10, { message: "Invalid Number" }),
    password: z
      .string()
      .min(7, { message: "Password must be more than 7" })
      .max(20, { message: "Password must be less than 20" }),
    confirmPassword: z
      .string()
      .min(7, { message: "Password must be more than 7" })
      .max(20, { message: "Password must be less than 20" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password does not match",
  });

export type SignupBody = z.infer<typeof signupBody>;

async function Signup(req: NextRequest) {
  const userInfo = await req.json();

  const { success } = signupBody.safeParse(userInfo);
  if (!success) {
    return NextResponse.json({ msg: "Invalid credentials" });
  }

  const { firstName, lastName, phoneNumber, password } = userInfo;

  const userExist = await prisma.user.findFirst({
    where: {
      phoneNumber,
    },
  });

  if (userExist) {
    return NextResponse.json({ msg: "User already exists!" });
  }
  try {
    const response = await prisma.user.create({
      data: {
        firstName,
        lastName,
        phoneNumber,
        password,
      },
    });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export { Signup as GET, Signup as POST };
