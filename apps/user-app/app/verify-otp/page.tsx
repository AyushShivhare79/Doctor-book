"use client";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@repo/ui/input-otp";
import { Button } from "@repo/ui/button";
import { useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/card";
import { toast } from "react-toastify";

export default function () {
  const [otp, setOtp] = useState<string>();
  const searchParams = useSearchParams();

  const phoneNumber = searchParams.get("phoneNumber");

  const verifyOTP = async () => {
    const response = await axios.post(
      `/api/verify-phone/verify-otp?otp=${otp}&phoneNumber=${phoneNumber}`
    );
    // if (response.statusText === "OK") {
    if (response.data) {
      toast.success("User verified successful");
    } else {
      toast.success("Wrong OTP");
    }
  };

  return (
    <>
      {JSON.stringify(otp)}

      <div className="flex flex-col justify-center items-center h-screen">
        <Card className="flex justify-center flex-col items-center p-10">
          <CardHeader>
            <CardTitle className="text-3xl">Verify OTP</CardTitle>
          </CardHeader>
          <CardContent>
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => setOtp(value)}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </CardContent>
          <CardFooter>
            <Button className="bg-black text-white" onClick={verifyOTP}>
              Verify
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
