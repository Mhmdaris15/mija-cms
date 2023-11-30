import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";
import React from "react";

export default function Home() {
	return (
		<>
			<main className="w-full flex">
				<Sidebar />
				<div className="w-full">
					<Banner />
				</div>
			</main>
		</>
	);
}
