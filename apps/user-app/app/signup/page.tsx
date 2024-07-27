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
import { toast } from "react-toastify";

import { ErrorMessage } from "@hookform/error-message";

export default function Signup() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupBody>({
    resolver: zodResolver(signupBody),
  });

  const submitData: SubmitHandler<SignupBody> = async (data) => {
    try {
      const createAccount = await axios.post("/api/signup", data);
      console.log("Account: ", createAccount);
    } catch (errors) {
      console.log(errors);
    }

    try {
      const response = await axios.post("/api/verify-phone/send-otp", data);

      if (response.data) {
        router.push(`/verify-otp?phoneNumber=${data.phoneNumber}`);
        return toast.success("OTP send successful");
      }
    } catch (errors) {
      console.log(errors);
    }
  };

  const fieldArr = [
    {
      placeholder: "First Name",
      register: register,
      name: "firstName",
    },
    {
      placeholder: "Last Name",
      register: register,
      name: "lastName",
    },
    {
      placeholder: "Phone Number",
      register: register,
      name: "phoneNumber",
    },
    {
      placeholder: "Password",
      register: register,
      name: "password",
    },
    {
      placeholder: "Confirm Password",
      register: register,
      name: "confirmPassword",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Card className="flex flex-col w-full sm:w-96 border">
          <CardHeader>
            <CardTitle className="flex justify-center font-mono text-3xl">
              Doctor Book
            </CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit(submitData)} className="form">
            <CardContent className="flex flex-col gap-5">
              {fieldArr.map((value, index) => (
                <div>
                  <Input
                    placeholder={value.placeholder}
                    register={value.register}
                    name={value.name}
                  />

                  {
                    // @ts-ignore
                  errors?.[value.name] && (
                    <div className="text-red-500 text-sm">
                      {
                      // @ts-ignore
                      errors?.[value.name].message}
                    </div>
                  )}



                  {/* <div className="text-red-500 text-xs">
                    <ErrorMessage
                      errors={errors}
                      // @ts-ignore
                      name={value.name}
                    />
                  </div> */}
                </div>
              ))}

              {/* <Input
                placeholder="First Name"
                register={register}
                name={"firstName"}
              />
              {errors.firstName && (
                <div className="text-red-500 text-sm">
                  {errors.firstName.message}
                </div>
              )}
              <Input
                placeholder="Last Name"
                register={register}
                name={"lastName"}
              />
              {errors.lastName && (
                <div className="text-red-500 text-sm">
                  {errors.lastName.message}
                </div>
              )}
              <Input
                placeholder="Phone Number"
                register={register}
                name={"phoneNumber"}
              />

              {errors.phoneNumber && (
                <div className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </div>
              )}
              <Input
                placeholder="Password"
                register={register}
                name={"password"}
              />
              {errors.password && (
                <div className="text-red-500 text-sm">
                  {errors.password.message}
                </div>
              )}

              <Input
                placeholder="Confirm Password"
                register={register}
                name={"confirmPassword"}
              />
              {errors.confirmPassword && (
                <div className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </div>
              )} */}
            </CardContent>
            <CardFooter className="flex justify-center items-center">
              <Button type="submit" className="bg-black text-white w-full">
                Create Account
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
