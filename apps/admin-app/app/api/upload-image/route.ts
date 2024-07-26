import { NextRequest, NextResponse } from "next/server";
import { UploadImage } from "../../lib/upload-image";
import prisma from "@repo/db/client";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();

  const image = formData.get("Image") as unknown as File;

  console.log("HERE YOU ARE: ", image);

  const data: any = await UploadImage(image, "admin-images");
  console.log("I am data: ", data);

  // prisma.

  return NextResponse.json({ URL: data.url }, { status: 200 });
};
