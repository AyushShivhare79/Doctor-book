"use client";

import { Button, InputOTP, InputOTPGroup, InputOTPSlot } from "@repo/ui";
import { useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@repo/ui";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";

export default function () {
  const [otp, setOtp] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const verifyOTP = async () => {
    // if (!phoneNumber) {
    //   return toast.error("Phone number not found");
    // }
    try {
      const phoneNumber = searchParams.get("phoneNumber");
      setLoading(true);
      const response = await axios.post(
        `/api/verify-phone/verify-otp?otp=${otp}&phoneNumber=${phoneNumber}`
      );
      // if (response.statusText === "OK") {
      console.log(response.data);
      if (response.data.sent) {
        setLoading(false);
        toast.success("OTP verify successful");
      } else {
        setLoading(false);
        return toast("Wrong OTP");
      }
    } catch (error) {
      setLoading(false);
      return toast.error("Internal server error");
    }
  };

  return (
    <>
      {/* Use validation for OTP as well */}

      {JSON.stringify(otp)}

      <div className="flex flex-col justify-center items-center h-screen">
        <Card className="flex justify-center flex-col items-center p-10">
          <CardHeader>
            <CardTitle className="font-mono text-3xl">Verify OTP</CardTitle>
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
          <CardFooter className="flex justify-center items-center w-full">
            <Button
              onClick={verifyOTP}
              className="flex gap-3 bg-blue-700 text-white w-full"
            >
              {loading ? (
                <PulseLoader color="#ffffff" className="absolute" size={10} />
              ) : (
                <div> Verify </div>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
