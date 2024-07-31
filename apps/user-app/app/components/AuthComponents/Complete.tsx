import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui";
import Input from "@repo/ui/customInput";
import SwitchPageAccoun from "../SwitchPageAccoun";
import { PulseLoader } from "react-spinners";
import Image from "next/image";
import logo from "../Doctor.png";

interface propsTypes {
  data: any;
  register: any;
  handleSubmit: any;
  submitData: any;
  loading: boolean;
  errors: any;

  linkName: string;
  link: string;
  text: string;
  btnName: string
}

export default function ({
  data,
  register,
  handleSubmit,
  submitData,
  loading,
  errors,
  linkName,
  link,
  text,
  btnName
}: propsTypes) {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Card className="flex flex-col w-full sm:w-96">
          <CardHeader>
            <CardTitle className="flex justify-center">
              <Image
                src={logo}
                alt="LOGO"
                className="max-w-[200px] min-w-[200px] max-h-[40px] min-h-[40px] object-cover"
              />
            </CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit(submitData)} className="form">
            <CardContent className="flex flex-col gap-5">
              {data.map((value: any, index: any) => (
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
                  <div> {btnName} </div>
                )}
              </Button>
              <SwitchPageAccoun linkName={linkName} link={link} text={text} />
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}
