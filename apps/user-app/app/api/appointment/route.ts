import { PrismaClient } from "@repo/db";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

async function Appointment(req: NextRequest) {
  const userInfo = await req.json();
  const { userId } = userInfo;

  const response = await prisma.booking.findMany({
    where: {
      userId: Number(userId),
    },
  });

  return NextResponse.json(response);
}

export { Appointment as GET, Appointment as POST };
