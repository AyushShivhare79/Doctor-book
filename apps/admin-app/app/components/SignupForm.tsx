"use client";

import { Button } from "@repo/ui";
import { PulseLoader } from "react-spinners";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@repo/ui";

import { SubmitHandler, useForm } from "react-hook-form";
import { signupBody, SignupBody } from "../lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@repo/ui/customInput";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import { ChangeEvent, useState } from "react";

export default function () {
  const [image, setFile] = useState<File | null>();
  const [preview, setPreview] = useState<any>();

  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      // @ts-ignore
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupBody>({
    resolver: zodResolver(signupBody),
  });
  const submitData: SubmitHandler<SignupBody> = async (data) => {
    setLoading(true);
    const response = await axios.post("/api/signup", data);

    if (response.data.msg === "User already exists!") {
      setLoading(false);
      toast.error("User already exists!");
    } else {
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
        setLoading(false);
        toast.success("User signup successful");
      } catch (error: any) {
        setLoading(false);
        console.log("Error: ", error.message);
        return toast.error("Internal server error");
      }
    }
  };

  const fieldArr = [
    {
      name: "firstName",
      placeholder: "First Name",
    },
    { name: "lastName", placeholder: "Last Name" },
    { name: "emailId", placeholder: "Email ID" },
    { name: "phoneNumber", placeholder: "Phone Number" },
    { name: "address", placeholder: "Address" },
    { name: "fees", placeholder: "Fees" },
    { name: "password", placeholder: "Password" },
    { name: "confirmPassword", placeholder: "Confirm Password" },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Card className="flex flex-col sm:w-[450px] sm:h-auto">
          {/* There is an issue with the title for doctor book */}
          <CardHeader>
            <CardTitle className="flex justify-center font-mono text-3xl">
              Doctor Book
            </CardTitle>
          </CardHeader>

          <form onSubmit={handleSubmit(submitData)}>
            <CardContent className="flex flex-col gap-5 p-10">
              <div className=" flex flex-col items-center gap-2">
                <img
                  className="max-w-[150px] min-w-[150px] max-h-[150px] min-h-[150px] object-cover rounded-full border border-black"
                  alt="preview image"
                  src={preview}
                />
                <label
                  className="flex justify-center items-center bg-black text-white w-20 rounded-xl hover:cursor-pointer"
                  htmlFor="dp"
                >
                  Upload
                </label>
              </div>
              <input
                id="dp"
                type="file"
                className="hidden"
                onChange={handleFileChange}
                placeholder="upload image"
              />
              {fieldArr.map((value, index) => (
                <div>
                  <Input
                    name={value.name}
                    placeholder={value.placeholder}
                    register={register}
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

            <CardFooter className="flex justify-center">
              <Button
                type="submit"
                className="flex gap-3 bg-blue-700 text-white w-full"
              >
                {loading ? (
                  <PulseLoader color="#ffffff" className="absolute" size={10} />
                ) : (
                  <div> Signup </div>
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
