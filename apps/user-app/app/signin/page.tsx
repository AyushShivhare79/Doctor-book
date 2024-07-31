"use client";

import { signInBody, SignInBody } from "../lib/signInValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Complete from "../components/AuthComponents/Complete";

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

    // console.log("Before");
    // new Promise((resolve) => setTimeout(resolve, 5000));
    // console.log("After");

    const response = await signIn("credentials", {
      phoneNumber: data.phoneNumber,
      password: data.password,
      redirect: false,
      // callbackUrl: "/",
    });
    setLoading(false);

    if (!response?.ok) {
      return toast.error("Invalid credentials please signup!");
    }

    toast.success("User signIn successful!");
    router.push("/");

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
            <CardFooter className="flex flex-col gap-3 justify-center items-center">
              <Button
                disabled={loading}
                type="submit"
                className="flex gap-3 bg-blue-700 text-white w-full"
              >
                {loading ? (
                  <PulseLoader color="#ffffff" className="absolute" size={10} />
                ) : (
                  <div> SignIn </div>
                )}
              </Button>
              <SwitchPageAccoun />
            </CardFooter>
          </form>
        </Card>
      </div> */}
    </>
  );
}
