"use client";
import { useRouter } from "next/navigation";

interface Props {
  text: string;
  href: string;
  icon: any;
}
export default function ({ text, href, icon }: Props) {
  const router = useRouter();
  return (
    <>
      <div className="h-full">
        <div onClick={() => router.push(href)} className="flex gap-2 cursor-pointer">
          <div>{icon}</div> {text}

        </div>
      </div>
    </>
  );
}
