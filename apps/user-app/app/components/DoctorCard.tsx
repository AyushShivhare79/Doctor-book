"use client";

import { useEffect, useState } from "react";
import { getAdminData } from "../lib/actions/getAdminData";
import Card from "./Card";
import { Skeleton } from "@repo/ui";

export default function ({ text }: { text: string }) {
  const [data, setData] = useState([{}]);
  const [loading, setLoading] = useState<boolean>(true);

  // const data = await getAdminData("");

  useEffect(() => {
    const doIt = async () => {
      const response = await getAdminData(text);
      setData(response);
      setLoading(false);
    };
    doIt();
  }, [text]);

  return (
    <>
      <div className="flex justify-center pt-5">
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-4 md:grid-cols-2">
          {loading ? (
            <div>Loading</div>
          ) : (
            <Card data={data} AddIcon={<Address />} Category={<Category />} />
          )}
          {/* <Card data={data} AddIcon={<Address />} Category={<Category />} /> */}
        </div>
      </div>
    </>
  );
}

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[300px] w-[250px] rounded-xl bg-gray-500" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-gray-400" />
        <Skeleton className="h-4 w-[200px] bg-gray-400" />
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

export function Address() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}

export function Category() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6h.008v.008H6V6Z"
      />
    </svg>
  );
}
