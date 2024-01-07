"use client";

import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";
import { useSidebarStore } from "@/hooks/useSidebarStore";
import { useAnimate, motion } from "framer-motion";
import React from "react";

export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	const isOpen = useSidebarStore((state) => state.isOpen);

	return (
		<section className="flex flex-row">
			{/* Hide sidebar if sidebar isn't open */}
			{isOpen && <Sidebar />}
			<motion.div
				className="w-full overflow-auto transition-transform flex flex-col">
				<Banner />
				{children}
			</motion.div>
		</section>
	);
}
