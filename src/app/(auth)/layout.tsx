import Image from "next/image";
import React from "react";
import MijaBackground from "@public/mija-background.png";
import MijaGrayLogo from "@public/mija-white-black-logo.png";
import MijaColorLogo from "@public/mija-logo-color.png";

export default function LoginLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <section>
		<div className="flex flex-col lg:flex-row h-screen w-screen box-border no-scrollbar">
			<section className="lg:w-[60%] hidden lg:block relative h-full overflow-hidden">
				<Image
					src={MijaBackground}
					alt="Mija Background"
					className="w-full absolute"
				/>
				<div className="absolute inset-x-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center gap-10">
					<Image src={MijaGrayLogo} alt="Mija Gray Logo" />
					<h1 className="text-4xl font-light text-white">Content Management System</h1>
				</div>
			</section>
			<section className="lg:w-[40%] h-full bg-white text-gray-950 flex flex-col justify-normal items-center gap-12 overflow-auto py-10">
				<Image src={MijaColorLogo} alt="Mija Color Logo" width={300} />
				{children}
			</section>
		</div>
	</section>;
}
