import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";

async function UpsertImage(req: NextRequest) {
  const { phoneNumber, url } = await req.json();

  console.log("HERE");
  console.log("PhoneNumber: ", phoneNumber);
  console.log("URL: ", url);
  const response = await prisma.admin.update({
    where: {
      phoneNumber: phoneNumber,
    },
    data: {
      image: url,
    },
  });

  return NextResponse.json(response);
}

export { UpsertImage as GET, UpsertImage as POST };
