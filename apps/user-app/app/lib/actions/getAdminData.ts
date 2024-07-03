"use server";

import prisma from "@repo/db/client";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";

export async function getAdminData() {
  const users = await prisma.admin.findMany({});

  const response = await prisma.admin.findMany();

  return response;
}

export async function storeData(id: Number) {
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
