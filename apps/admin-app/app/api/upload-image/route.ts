import { NextRequest, NextResponse } from "next/server";
import { UploadImage } from "../../lib/upload-image";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();

  const image = formData.get("Image") as unknown as File;

  const data: any = await UploadImage(image, "admin-images");

  // prisma.

  return NextResponse.json({ URL: data.url }, { status: 200 });
};
