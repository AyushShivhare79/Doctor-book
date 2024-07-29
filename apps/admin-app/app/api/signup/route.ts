import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";
import { signupBody } from "../../lib/validation";

//zod
//UserExists
//CreateUser

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
