"use client";

import { signInBody, SignInBody } from "../lib/signInValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Complete from "../components/AuthComponents/Complete";
import axios from "axios";

export default function () {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInBody>({ resolver: zodResolver(signInBody) });

  const submitData: SubmitHandler<SignInBody> = async (data) => {
    setLoading(true);

    const response = await signIn("credentials", {
      phoneNumber: data.phoneNumber,
      password: data.password,
      redirect: false,
      // callbackUrl: "/",
    });

    if (response?.error === "User not verified!") {
      toast.error("User not verified!");
      const response = await axios.post("/api/verify-phone/send-otp", data);
      if (response.data) {
        router.push(`/verify-otp?phoneNumber=${data.phoneNumber}`);
        setLoading(false);
        return toast.success("OTP send successful");
      }
    }

    if (!response?.ok) {
      setLoading(false);
      return toast.error("Invalid credentials please signup!");
    }

    router.push("/");
    return toast.success("User signIn successful!");

    // console.log(response);
  };

  const fieldArr = [
    {
      name: "phoneNumber",
      placeholder: "Phone Number",
    },
    {
      name: "password",
      placeholder: "Password",
    },
  ];
  return (
    <>
      <Complete
        data={fieldArr}
        register={register}
        handleSubmit={handleSubmit}
        loading={loading}
        submitData={submitData}
        errors={errors}
        linkName={"Signup"}
        text={"Don't have an account?"}
        link={"/signup"}
        btnName={"Log in"}
      />
    </>
  );
}
