import { NextRequest, NextResponse } from "next/server";
import { UploadImage } from "../../lib/upload-image";

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();

  const image = formData.get("Image") as unknown as File;

  console.log("HERE YOU ARE: ", image);

  const data = await UploadImage(image, "admin-images");
  console.log("I am data: ", data);
  return NextResponse.json(
    { msg: image },
    {
      status: 200,
    },
  );
};
