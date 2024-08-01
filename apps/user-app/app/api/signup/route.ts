import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";
import { signupBody } from "../../lib/signupValidation";

//Zod
//UserExists
//CreateUser

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
