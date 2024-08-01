"use client";

import { Button, InputOTP, InputOTPGroup, InputOTPSlot } from "@repo/ui";
import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@repo/ui";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { SubmitHandler, useForm } from "react-hook-form";
import { otpBody, OtpBody } from "../lib/otpValidation";
import { zodResolver } from "@hookform/resolvers/zod";

export default function () {
  const [otp, setOtp] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();

  const router = useRouter();

  useEffect(() => {
    const check = async () => {
      const response = await searchParams.get("phoneNumber");
      setPhoneNumber(response);
      if (phoneNumber === null) {
        return router.push("/signup");
      }
      const iWill = await axios.post("/api/verify-phone/send-otp", {
        phoneNumber,
      });
      // if (iWill.data.msg === "User not exists!") {
      //   router.push("/signup");
      //   return toast.error("User not exists!");
      // }
    };
    check();
  }, [searchParams, phoneNumber]);

  // const phoneNumber = "464656564";
  // const verifyOTP = async () => {};

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<OtpBody>({ resolver: zodResolver(otpBody) });

  const submitData: SubmitHandler<OtpBody> = async (data: any) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `/api/verify-phone/verify-otp?otp=${otp}&phoneNumber=${phoneNumber}`
      );
      console.log("response: ", response.data);

      if (response.data.msg === "User not exists!") {
        toast.error("User not exists!");
        return router.push("/signup");
      }
      if (response.data.msg === "Your number is already verified!") {
        toast.error("Your number is already verified!");
        return router.push("/signin");
      }
      // if (response.statusText === "OK") {
      if (response.data.sent) {
        setLoading(false);
        toast.success("OTP verify successful");
      } else {
        setLoading(false);
        return toast.error("Wrong OTP");
      }
    } catch (error) {
      setLoading(false);
      return toast.error("Internal server error");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Card className="flex justify-center flex-col items-center p-10">
          <CardHeader>
            <CardTitle className="font-mono text-3xl">Verify OTP</CardTitle>
          </CardHeader>
          <Suspense>
            <form onSubmit={handleSubmit(submitData)}>
              <CardContent>
                <InputOTP
                  {...register("otp")}
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
                {errors.otp && (
                  <div className="text-red-500 text-xs">
                    {errors.otp.message}
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-center items-center w-full">
                <Button
                  // onClick={verifyOTP}
                  className="flex gap-3 bg-blue-700 text-white w-full"
                >
                  {loading ? (
                    <PulseLoader
                      color="#ffffff"
                      className="absolute"
                      size={10}
                    />
                  ) : (
                    <div> Verify </div>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Suspense>
        </Card>
      </div>
    </>
  );
}
