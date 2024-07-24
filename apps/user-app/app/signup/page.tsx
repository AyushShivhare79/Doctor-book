"use client";

import { Button } from "@repo/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/card";

import Input from "@repo/ui/customInput";
import axios from "axios";
import { signupBody, SignupBody } from "../api/signup/route";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";

export default function Signup() {
  const [otp, setOTP] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupBody>({
    resolver: zodResolver(signupBody),
  });

  const verifyOTP = async () => {
    console.log("OTP verify successful");
  };

  const submitData: SubmitHandler<SignupBody> = async (data) => {
    // if (sendOTP.data.status === "pending") {
    //   const verifyOTP = await axios.post(
    //     `/api/verify-phone/verify-otp?otp=${otp}&phoneNumber=${data.phoneNumber}`,
    //   );
    //   if (verifyOTP.data.status === "approved") {
    //     const response = await axios.post("/api/signup", data);
    //     console.log(response.data);
    //   }
    // }

    const createAccount = await axios.post("/api/signup", data);
    console.log("Account: ", createAccount);

    const response = await axios.post("/api/verify-phone/send-otp", data);

    if (response.data) {
      router.push(`/verify-otp?phoneNumber=${data.phoneNumber}`);
      return toast.success("OTP send successful");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Card className="flex flex-col w-96">
          <CardHeader>
            <CardTitle className="flex justify-center text-3xl">
              Doctor Book
            </CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit(submitData)} className="form">
            <CardContent className="flex flex-col gap-5">
              <Input
                placeholder="First Name"
                register={register}
                name={"firstName"}
              />
              {errors.firstName && <div>{errors.firstName.message}</div>}
              <Input
                placeholder="Last Name"
                register={register}
                name={"lastName"}
              />
              {errors.lastName && <div>{errors.lastName.message}</div>}
              {/* <form className="flex gap-2" onSubmit={handleSubmit(sendOTP)} action=""> */}
              <Input
                placeholder="Phone Number"
                register={register}
                name={"phoneNumber"}
              />

              {/* <button
                className="rounded bg-blue-500 text-white w-16 "
                type="submit"
              >
                SendOTP
              </button> */}
              {/* </form> */}
              {errors.phoneNumber && <div>{errors.phoneNumber.message}</div>}
              <Input
                placeholder="Password"
                register={register}
                name={"password"}
              />
              {errors.password && <div>{errors.password.message}</div>}

              <Input
                placeholder="Confirm Password"
                register={register}
                name={"confirmPassword"}
              />
              {errors.confirmPassword && (
                <div>{errors.confirmPassword.message}</div>
              )}
              {/* <div className=" flex gap-2">
                <input
                  type="text"
                  className="border border-black"
                  placeholder="OTP"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setOTP(e.target.value)
                  }
                />
                <button
                  className="rounded bg-blue-500 text-white w-16 "
                  onClick={verifyOTP}
                >
                  Verify
                </button>
              </div>*/}
            </CardContent>

            <CardFooter className="flex justify-center items-center">
              <Button type="submit" className="bg-black text-white block">
                Create Account
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
