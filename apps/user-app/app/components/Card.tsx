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
      {data.map((d: any) => (
        <Card>
          <CardHeader>
            <CardTitle>
              <img
                className="max-h-[200px] min-h-[200px] max-w-[200px] min-w-[200px] object-cover rounded-full"
                src={d.image}
                alt="Image"
              />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <div className=" text-2xl font-mono">
              {d.firstName} {d.lastName}
            </div>
            <div className="flex gap-2">
              <div>{Category}</div>
              <div>HARDCODED</div>
            </div>

            <div className="flex gap-2">
              <div>{AddIcon}</div>
              <div>{d.address}</div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center gap-8 lg:gap-5">
            <div className="flex gap-5">
              <div>Only {d.fees}rs</div>
            </div>
            <Button id={d.id} btnName="BOOK NOW" />
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
