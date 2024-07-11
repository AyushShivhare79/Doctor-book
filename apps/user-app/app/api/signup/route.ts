import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";

//Zod
//UserExists
//CreateUser

async function Signup(req: NextRequest) {
  const userInfo = await req.json();

  const { firstName, lastName, phoneNumber, password } = userInfo;

  const userExist = await prisma.user.findFirst({
    where: {
      phoneNumber,
    },
  });

  if (userExist) {
    return NextResponse.json({ msg: "User already exists!" });
  }

  const response = await prisma.user.create({
    data: {
      firstName,
      lastName,
      phoneNumber: phoneNumber.toString(),
      password,
    },
  });
  return NextResponse.json(response);
}

export { Signup as GET, Signup as POST };
