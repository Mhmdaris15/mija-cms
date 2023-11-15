import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import { Progress } from "@nextui-org/react";
import React from "react";

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
				<Providers>
					<Progress size="sm" aria-label="Loading..." value={30} />
					{children}
				</Providers>
			</body>
		</html>
	);
}
