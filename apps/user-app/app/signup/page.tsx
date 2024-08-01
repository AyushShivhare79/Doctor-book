"use client";

import axios from "axios";
import { signupBody, SignupBody } from "../lib/signupValidation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import Complete from "../components/AuthComponents/Complete";

export default function Signup() {
  const { data: session, status } = useSession();

  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  //Loading during session loading

  if (status === "authenticated") {
    router.push("/");
  }

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

      if (createAccount.data.msg === "User already exists!") {
        setLoading(false);
        return toast.error("User already exists!");
      }
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
      setLoading(false);
      toast.error("Internal server error");
      return console.log(errors);
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
      <Complete
        data={fieldArr} 
        register={register}
        handleSubmit={handleSubmit}
        loading={loading}
        submitData={submitData}
        errors={errors}
        linkName={"Signin"}
        text={"Already have an account?"}
        link={"/signin"}
        btnName={"Create Account"}
      />
      {/* <div className="flex flex-col justify-center items-center h-screen">
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
                    disabled={loading}
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
                disabled={loading}
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
      </div> */}
    </>
  );
}
