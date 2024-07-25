import Image from "next/image";
import { Card } from "@repo/ui/card";
import { Code } from "@repo/ui/code";
import styles from "./page.module.css";
import { Button } from "@repo/ui/button";
import Signup from "./signup/page";
import ImageUpload from "./imageUpload";

export default function Page(): JSX.Element {
  return (
    <>
      <div>{/* <Signup /> */}</div>
      <ImageUpload/>
    </>
  );
}
