import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";

async function Appointment(req: NextRequest) {
  const userInfo = await req.json();
  const { userId } = userInfo;

  const response = await prisma.booking.findMany({
    where: {
      userId: Number(userId),
    },
    include: {
      user: true,
      doctor: true,
    },
  });

  return NextResponse.json(response);
}

export { Appointment as GET, Appointment as POST };
