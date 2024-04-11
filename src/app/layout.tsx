import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Orange",
	description: "tbd",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head />

			<body className={inter.className} style={{ width: "100dvw", height: "100dvh" }}>
				{children}
			</body>
		</html>
	);
}
