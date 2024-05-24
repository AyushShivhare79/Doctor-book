import { PrismaClient } from "@repo/db";
import Card from "@repo/ui/card";

const prisma = new PrismaClient();

async function getData() {
  const response = await prisma.user.findMany();

  return response.map((t) => ({
    firstName: t.firstName,
    lastName: t.lastName,
  }));
}

export default async function () {
  const data = await getData();

  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-16 pt-5">
          {/* {JSON.stringify(response)} */}
          {data.map((d) => (
            <div>
              <Card firstName={d.firstName} lastName={d.lastName} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
