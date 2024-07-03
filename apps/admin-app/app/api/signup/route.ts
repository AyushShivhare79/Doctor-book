import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";

async function Signup(req: NextRequest) {
  const userInfo = await req.json();
  const {
    phoneNumber,
    password,
    firstName,
    lastName,
    category,
    experience,
    address,
    fees,
  } = userInfo;

  const userExist = await prisma.admin.findFirst({
    where: {
      phoneNumber,
    },
  });

  if (userExist) {
    return NextResponse.json({ msg: "User already exists!" });
  }

  const response = await prisma.admin.create({
    data: {
      phoneNumber,
      password,
      firstName,
      lastName,
      category,
      experience: Number(experience),
      address,
      fees: Number(fees),
    },
  });
  return NextResponse.json(response);
}

export { Signup as GET, Signup as POST };
