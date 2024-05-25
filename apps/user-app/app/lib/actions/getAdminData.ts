"use server";

import { PrismaClient } from "@repo/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

const Prisma = new PrismaClient();

export async function getAdminData() {
  const response = await Prisma.admin.findMany();

  return response;
}

export async function storeData(id: Number) {
  const session = await getServerSession(authOptions);

  const response = await Prisma.booking.create({
    data: {
      doctorId: Number(id),
      userId: Number(session.user.id),
    },
  });
}
