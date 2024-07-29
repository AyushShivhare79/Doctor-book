import { NextRequest, NextResponse } from "next/server";
import twilio from "twilio";

const accountSID = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceID: any = process.env.TWILIO_VERIFICATION_SERVICE_SID;

const client = twilio(accountSID, authToken);

async function SendOTP(req: NextRequest) {
  const userInfo = await req.json();

  const { phoneNumber } = userInfo;
  try {
    const twilioResponse = await client.verify.v2
      .services(serviceID)
      .verifications.create({
        channel: "sms",
        to: `+91${phoneNumber}`,
      });
    if (twilioResponse.status === "pending") {
      return NextResponse.json({ sent: true }, { status: 200 });
    } else {
      return NextResponse.json({ sent: false }, { status: 500 });
    }
  } catch (error: any) {
    console.log(error);

    return NextResponse.json({ msg: "Something went wrong" }, { status: 500 });
  }
}
export { SendOTP as GET, SendOTP as POST };
