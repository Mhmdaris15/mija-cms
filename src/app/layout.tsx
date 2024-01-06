import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { Progress } from "@nextui-org/react";
import React from "react";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Dashboard | Mija CMS",
	description: "Mija CMS",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NextTopLoader />
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
