import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/_components/header/header";

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
			<html dir='rtl' lang='he' suppressHydrationWarning>
				<Header />
				<body className="p-10 h-screen">{children}</body>
			</html>
		</>
	);
}
