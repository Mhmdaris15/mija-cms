"use client";

import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";
import { useSidebarStore } from "@/hooks/useSidebarStore";
import React from "react";

export default function Home() {
	const isOpen = useSidebarStore((state) => state.isOpen);

	return (
		<>
			<main className="w-full flex">
				{isOpen && <Sidebar />}

				<div className="w-full">
					<Banner />
				</div>
			</main>
		</>
	);
}
