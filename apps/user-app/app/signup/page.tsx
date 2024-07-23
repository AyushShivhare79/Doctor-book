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

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupBody>({
    resolver: zodResolver(signupBody),
  });

  const submitData: SubmitHandler<SignupBody> = async (data) => {
    const response = await axios.post("/api/signup", data);
    console.log(response.data);
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
              <Input
                placeholder="Phone Number"
                register={register}
                name={"phoneNumber"}
              />
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
            </CardContent>

            <CardFooter className="flex justify-center items-center">
              <Button type="submit" className="bg-black text-white">
                Signup
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
