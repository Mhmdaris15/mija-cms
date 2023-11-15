import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

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
