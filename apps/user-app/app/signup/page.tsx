"use client";

import { Button } from "@repo/ui/button";
import { PulseLoader } from "react-spinners";
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
import { useState } from "react";

export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupBody>({
    resolver: zodResolver(signupBody),
  });

  const submitData: SubmitHandler<SignupBody> = async (data) => {
    setLoading(true);
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
        setLoading(false);
        return toast.success("OTP send successful");
      }
    } catch (errors) {
      console.log(errors);
    }
  };

  const fieldArr = [
    {
      placeholder: "First Name",
      name: "firstName",
    },
    {
      placeholder: "Last Name",
      name: "lastName",
    },
    {
      placeholder: "Phone Number",
      name: "phoneNumber",
    },
    {
      placeholder: "Password",
      name: "password",
    },
    {
      placeholder: "Confirm Password",
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
                    register={register}
                    name={value.name}
                  />
                  {
                    // @ts-ignore
                    errors?.[value.name] && (
                      <div className="text-red-500 text-xs">
                        {
                          // @ts-ignore
                          errors?.[value.name].message
                        }
                      </div>
                    )
                  }
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-center items-center">
              <Button
                type="submit"
                className="flex gap-3 bg-blue-700 text-white w-full"
              >
                {loading ? (
                  <PulseLoader color="#ffffff" className="absolute" size={10} />
                ) : (
                  <div> Create Account </div>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
