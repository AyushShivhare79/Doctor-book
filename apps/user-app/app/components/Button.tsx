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
      <AlertDialog>
        <AlertDialogTrigger className="flex justify-center items-center border bg-blue-600 text-white rounded-xl h-9 w-28">
          {/* <Button > */}
          {btnName}
          {/* </Button> */}
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
