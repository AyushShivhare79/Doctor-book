"use server";

import { PrismaClient } from "@repo/db";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function getAdminData() {
  const prisma = new PrismaClient();
  const response = await prisma.admin.findMany();

  return response;
}

export async function storeData(id: Number) {
  const prisma = new PrismaClient();

  const session = await getServerSession(authOptions);

  const response = await prisma.booking.create({
    data: {
      doctorId: Number(id),
      userId: Number(session.user.id),
      date: new Date(),
    },
  });
  return true;
}
