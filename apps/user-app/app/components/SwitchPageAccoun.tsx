import Link from "next/link";

export default function ({ text, link, linkName }: { text: string; link: string, linkName: string }) {
  return (
    <>
      <div>
        {text}{" "}
        <Link className="text-blue-700 font-medium" href={link}>
          {linkName}
        </Link>
      </div>
    </>
  );
}
