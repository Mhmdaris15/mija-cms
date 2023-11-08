import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-row">
			<Sidebar />
			<div className="w-full">
				<Banner />
				{children}
			</div>
		</section>
	);
}
