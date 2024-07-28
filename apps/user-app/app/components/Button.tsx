"use client";

import { Button } from "@repo/ui";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@repo/ui";

import { storeData } from "../lib/actions/getAdminData";
import { toast } from "react-toastify";

export default function ({ id, btnName }: any) {
  return (
    <>
      {/* <Button
        onClick={async () => await storeData(id)}
        className="border bg-blue-600 text-white"
      >
        {btnName}
      </Button> */}

      <AlertDialog>
        <AlertDialogTrigger>
          <Button className="border bg-blue-600 text-white">{btnName}</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-black text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={async () => await storeData(id)}>
              Book
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
