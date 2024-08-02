// import { useSearchParams } from "next/navigation";
import prisma from "@repo/db/client";
import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";
const accountSID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceID: any = process.env.TWILIO_VERIFICATION_SERVICE_SID;

const client = twilio(accountSID, authToken);

async function VerifyOTP(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const otp = searchParams.get("otp") as string;
    const phoneNumber = searchParams.get("phoneNumber") as string;

    const response = await prisma.user.findFirst({
      where: {
        phoneNumber,
      },
    });

    if (!response) {
      return NextResponse.json({ msg: "User not exists!" });
    }

    if (response?.verified) {
      return NextResponse.json({ msg: "Your number is already verified!" });
    }

    const twilioResponse = await client.verify.v2
      .services(serviceID)
      .verificationChecks.create({
        code: otp,
        to: `+91${phoneNumber}`,
      });

    if (twilioResponse.status === "approved") {
      await prisma.user.update({
        where: {
          phoneNumber: phoneNumber,
        },
        data: {
          verified: true,
        },
      });
      return NextResponse.json({ sent: true }, { status: 200 });
    } else {
      return NextResponse.json({ sent: false }, { status: 500 });
    }
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({ msg: "Something went wrong" }, { status: 500 });
  }
}

export { VerifyOTP as GET, VerifyOTP as POST };
