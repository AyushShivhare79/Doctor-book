"use server";

import prisma from "@repo/db/client";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { NextRequest } from "next/server";

export async function getAdminData(query: String) {
  const response = await prisma.admin.findMany();

  // if (query.length < 2) {
  //   return response;
  // }

  const foundTracks = response.filter((track) => {
    return (
      track.firstName.toLowerCase().includes(query.toLowerCase()) ||
      track.lastName.toLowerCase().includes(query.toLowerCase())
    );
  });

  return foundTracks;
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
