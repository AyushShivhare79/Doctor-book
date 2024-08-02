import "./globals.css";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Inter } from "next/font/google";
import Provider from "./provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import icon from "./Logo(crop).png";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // icons: {
  //   icon: "/Logo(crop).png",
  // },
  title: "Doctor Book",
  description: "Created by Ayush Shivhare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <ToastContainer />
          {children}
        </Provider>
      </body>
    </html>
  );
}
