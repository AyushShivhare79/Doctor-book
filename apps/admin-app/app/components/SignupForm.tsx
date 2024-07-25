"use client";

import { Button } from "@repo/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/card";
import ImageUpload from "../imageUpload";
import { SubmitHandler, useForm } from "react-hook-form";
import { signupBody, SignupBody } from "../api/signup/route";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@repo/ui/customInput";
import axios from "axios";

export default function () {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupBody>({
    resolver: zodResolver(signupBody),
  });
  const submitData: SubmitHandler<SignupBody> = async (data) => {
    const response = await axios.post("/api/signup", data);
    console.log("This is the response: ", response.data);
  };

  return (
    <>
      <Card className="flex justify-center flex-col items-center h-screen">
        <CardHeader className="flex justify-center items-center">
          <CardTitle className="text-3xl">Doctor Book (ADMIN)</CardTitle>
        </CardHeader>
        <form onSubmit={handleSubmit(submitData)}>
          <CardContent className="flex flex-col gap-5 p-10 ">
            {/* <CardContent className="flex justify-center items-center">
              <ImageUpload />
            </CardContent>
            */}

            <div className="flex gap-5">
              <div>
                <Input
                  name={"firstName"}
                  placeholder="First Name"
                  register={register}
                />
                {errors.firstName && (
                  <div className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </div>
                )}
              </div>

              {/* <div>
                <Input
                  name={"middleName"}
                  placeholder="Middle Name(Optional)"
                  register={register}
                />
                {errors.middleName && (
                  <div className="text-red-500 text-sm">
                    {errors.middleName.message}
                  </div>
                )}
              </div> */}

              <div>
                <Input
                  name={"lastName"}
                  placeholder="Last Name"
                  register={register}
                />
                {errors.lastName && (
                  <div className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </div>
                )}
              </div>
            </div>

            <div>
              <div>
                <Input
                  name={"emailId"}
                  placeholder="Email ID"
                  register={register}
                />
                {errors.emailId && (
                  <div className="text-red-500 text-sm">
                    {errors.emailId.message}
                  </div>
                )}
              </div>
            </div>

            <div>
              <Input
                name={"phoneNumber"}
                placeholder="Phone Number"
                register={register}
              />
              {errors.phoneNumber && (
                <div className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </div>
              )}
            </div>

            <div>
              <Input
                name={"address"}
                placeholder="Address"
                register={register}
              />
              {errors.address && (
                <div className="text-red-500 text-sm">
                  {errors.address.message}
                </div>
              )}
            </div>

            <div className="flex  gap-5">
              <div>
                <Input name={"fees"} placeholder="Fees" register={register} />
                {errors.fees && (
                  <div className="text-red-500 text-sm">
                    {errors.fees.message}
                  </div>
                )}
              </div>

              <div>
                <Input
                  name={"password"}
                  placeholder="Password"
                  register={register}
                />
                {errors.password && (
                  <div className="text-red-500 text-sm">
                    {errors.password.message}
                  </div>
                )}
              </div>

              <div>
                <Input
                  name={"confirmPassword"}
                  placeholder="Confirm Password"
                  register={register}
                />
                {errors.confirmPassword && (
                  <div className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
          {/* <CardFooter className="flex justify-center items-center">
              <Button type="submit" className="bg-black text-white block">
                Create Account
              </Button>
            </CardFooter> */}
          <CardFooter className="flex justify-center ">
            <Button type="submit" className="bg-black text-white">
              Signup
            </Button>
          </CardFooter>
        </form>
      </Card>
    </>
  );
}
