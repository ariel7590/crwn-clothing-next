import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/header/header";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    template: "%s - CRWN Clothing",
    default: "Welcome - CRWN Clothing",
  },
  description: "ilaka eSports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html dir="ltr" lang="he" suppressHydrationWarning>
        <Header />
        <body className={`${openSans.className} antialiased p-10 h-screen`}>{children}</body>
      </html>
    </>
  );
}
