import Image from "next/image";
import React from "react";
import MijaBackground from "@public/mija-background.png";
import MijaGrayLogo from "@public/mija-white-black-logo.png";
import MijaColorLogo from "@public/mija-logo-color.png";
import LoginForm from "@/components/LoginForm";

type Props = {};

const LoginPage = (props: Props) => {
	return (
		<div className="flex h-screen w-screen box-border overflow-hidden">
			<section className="w-[60%] relative h-full">
				<Image
					src={MijaBackground}
					alt="Mija Background"
					className="w-full absolute"
				/>
				<div className="absolute inset-x-0 w-full h-full bg-black bg-opacity-70 flex flex-col items-center justify-center gap-10">
					<Image src={MijaGrayLogo} alt="Mija Gray Logo" />
					<h1 className="text-4xl font-light">Content Management System</h1>
				</div>
			</section>
			<section className="w-[40%] h-full bg-white text-gray-950 flex flex-col justify-center items-center gap-12">
				<Image src={MijaColorLogo} alt="Mija Color Logo" />
				<LoginForm />
			</section>
		</div>
	);
};

export default LoginPage;
