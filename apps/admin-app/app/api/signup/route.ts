import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
//zod
//UserExists
//CreateUser

export const signupBody = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "First Name should have atleast 2 characters" })
      .max(30, { message: "First Name should have atmost 30 characters" }),
    lastName: z
      .string()
      .min(2, { message: "Last Name should have atleast 2 characters" })
      .max(30, { message: "Last Name should have atmost 30 characters" }),
    emailId: z
      .string()
      .email()
      .min(5, { message: "Email should have atleast 5 characters" }),
    address: z
      .string()
      .min(2, { message: "Address should have atleast 2 characters" }),
    phoneNumber: z
      .string()
      .min(9, { message: "Phone number must have 10 digits" })
      .max(11, { message: "Phone number must have 10 digits" }),
    fees: z.string().min(1, { message: "Type more" }),
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

  const { firstName, lastName, emailId, address, phoneNumber, fees, password } =
    await userInfo;

  const userExist = await prisma.admin.findFirst({
    where: {
      phoneNumber,
    },
  });

  if (userExist) {
    return NextResponse.json({ msg: "User already exists!", value: false });
  }

  try {
    const response = await prisma.admin.create({
      data: {
        firstName,
        lastName,
        emailId,
        address,
        phoneNumber,
        fees: Number(fees),
        password,
      },
    });
    return NextResponse.json(response);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ msg: error.message });
  }
}

export { Signup as GET, Signup as POST };
