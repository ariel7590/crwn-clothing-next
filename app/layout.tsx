import Header from "@/app/_components/header/header";
import type { Metadata } from "next";
import { PT_Sans_Narrow } from "next/font/google";
import "./globals.css";


const ptSansNarrow = PT_Sans_Narrow({
  subsets: ["latin"],
  display: "swap",
  weight: "400"
});

export const metadata: Metadata = {
  title: {
    template: "%s - CRWN Clothing",
    default: "Welcome - CRWN Clothing",
  },
  description: "crwn clothing - best clothing store in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="ltr" lang="en" suppressHydrationWarning>
      <head />
      <body className={`${ptSansNarrow.className} antialiased p-10 h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
