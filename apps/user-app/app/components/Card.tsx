import Button from "./Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui";

interface dataType {
  data: any;
  AddIcon: any;
  Category: any;
}

export default function ({ data, AddIcon, Category }: dataType) {
  return (
    <>
      {data.map((value: any) => (
        <Card className="object-cover">
          <CardHeader>
            <CardTitle>
              <img
                className="max-h-[200px] min-h-[200px] max-w-[200px] min-w-[200px] object-cover rounded-full"
                src={value.image}
                alt="Image"
              />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div className=" text-2xl font-mono">
              {value.firstName} {value.lastName}
            </div>
            <div className="flex gap-2">
              <div>{Category}</div>
              <div>HARDCODED</div>
            </div>

            <div className="flex gap-2">
              <div>{AddIcon}</div>
              <div>{value.address}</div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center gap-5 ">
            {/* <div className="flex gap-5"> */}
            <div>Only {value.fees}rs</div>
            {/* </div> */}
            <Button id={value.id} btnName="BOOK NOW" />
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
