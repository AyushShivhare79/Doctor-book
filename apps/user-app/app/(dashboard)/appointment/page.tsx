import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/table";
import getAppointmentData from "../../lib/actions/getAppointmentData";
import axios from "axios";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

export default async function () {
  const session = await getServerSession(authOptions);

  const data = await axios.post("http://localhost:3001/api/appointment", {
    userId: session.user.id,
  });
  console.log("data hu vro: ", data.data);

  return (
    <>
      <div>
        {JSON.stringify(data.data)}

        <Table className="bg-black text-white">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow className=" text-md  font-semibold">
              <TableHead>Doctor Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Address</TableHead>
              {/* <TableHead>Fees</TableHead> */}
              {/* <TableHead>Status</TableHead> */}
            </TableRow>
          </TableHeader>

          {data.data.map((m: any) => (
            <TableBody>
              <TableRow>
                <TableCell>{m.id}</TableCell>
                <TableCell>{m.doctorId}</TableCell>
                <TableCell>{m.userId}</TableCell>
                {/* <TableCell>{fees}</TableCell> */}
                {/* <TableCell>{status}</TableCell> */}
              </TableRow>
            </TableBody>
          ))}
        </Table>

        {/* {data.data.map((m: any) => (
          <div>
            <AppointmentTable
              name={m.id}
              category={m.doctorId}
              address={m.userId}
            />
          </div>
        ))}
         */}
        {/* {data.map((m) => (<div>
          <AppointmentTable name={m.}/>
        </div>))} */}
      </div>
    </>
  );
}

interface AppointmentProps {
  name: string;
  category: string;
  address: string;
  // fees: string;
}

export function AppointmentTable({
  name,
  category,
  address,
  // fees,
}: AppointmentProps) {
  return (
    <>
      <div>
        <Table className="bg-black text-white">
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow className=" text-md  font-semibold">
              <TableHead>Doctor Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Address</TableHead>
              {/* <TableHead>Fees</TableHead> */}
              {/* <TableHead>Status</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{name}</TableCell>
              <TableCell>{category}</TableCell>
              <TableCell>{address}</TableCell>
              {/* <TableCell>{fees}</TableCell> */}
              {/* <TableCell>{status}</TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
