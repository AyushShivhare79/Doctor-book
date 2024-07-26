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
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import { ChangeEvent, useState } from "react";

export default function () {
  const [image, setFile] = useState<File | null>();
  const [preview, setPreview] = useState<any>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Yes inside");
    if (e.target.files) {
      setFile(e.target.files[0]);
      // @ts-ignore
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupBody>({
    resolver: zodResolver(signupBody),
  });
  const submitData: SubmitHandler<SignupBody> = async (data) => {
    const response = await axios.post("/api/signup", data);

    if (response.data.msg === "User already exists!") {
      toast.error("User already exists!");
    } else {
      toast.success("User signup successful");
      // router.push("/dashboard");
      try {
        if (!image) return;

        const formdata = new FormData();
        formdata.append("Image", image);

        const response = await axios.post("/api/upload-image", formdata);

        const url = response.data.URL;
        const imageSave = await axios.post("/api/update-admin-image", {
          phoneNumber: data.phoneNumber,
          url: url,
        });
      } catch (error: any) {
        console.log("Error: ", error.message);
      }
    }
  };

  return (
    <>
      <Card className="flex justify-center flex-col items-center h-screen">
        <CardHeader className="flex justify-center items-center">
          <CardTitle className="font-sans text-3xl">
            Doctor Book (ADMIN)
          </CardTitle>
        </CardHeader>

        <CardContent>
          <CardContent></CardContent>

          <form onSubmit={handleSubmit(submitData)}>
            <CardContent className="flex flex-col gap-5 p-10 ">
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
                <label htmlFor="dp">Image</label>
                <img
                  className="max-w-[200px] min-w-[200px] max-h-[200px] min-h-[200px] object-cover rounded-full"
                  alt="preview image"
                  src={preview}
                />
                <input
                  id="dp"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  placeholder="upload image"
                />
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
        </CardContent>
      </Card>
    </>
  );
}
