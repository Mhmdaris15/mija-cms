"use client";

import { Button, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

type Props = {};

const LoginForm = (props: Props) => {
	const [isVisible, setIsVisible] = React.useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);
	const formik = useFormik({
		initialValues: { email: "", password: "" },
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<form action="" method="post" className="w-[80%] flex flex-col gap-y-7">
			<div className="mx-auto text-center flex flex-col gap-y-4">
				<h2 className="text-4xl font-extrabold">Login</h2>
				<p className="text-lg font-bold">
					Login to your account to access the dashboard
				</p>
			</div>
			<div className="flex flex-col gap-y-2">
				<label htmlFor="email" className="pl-2 text-lg font-bold">
					Email
				</label>
				<Input
					type="email"
					id="email"
					name="email"
					variant="bordered"
					placeholder="Enter your email"
					className="w-full mx-auto"
				/>
			</div>
			<div className="flex flex-col gap-y-2">
				<label htmlFor="password" className="pl-2 text-lg font-bold">
					Password
				</label>
				<Input
					name="password"
					id="password"
					variant="bordered"
					placeholder="Enter your password"
					endContent={
						<button
							className="focus:outline-none"
							type="button"
							onClick={toggleVisibility}>
							{isVisible ? (
								<AiOutlineEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
							) : (
								<AiOutlineEye className="text-2xl text-default-400 pointer-events-none" />
							)}
						</button>
					}
					type={isVisible ? "text" : "password"}
					className="w-full mx-auto"
				/>
			</div>
			<div className="flex flex-col gap-y-2">
				<Button className="w-full bg-red-700 text-white">Login</Button>
				<p className="text-center text-sm font-bold">
					Don&apos;t have an account?{" "}
					<Link href="/register" className="text-yellow-400 underline">
						Register
					</Link>
				</p>
			</div>
		</form>
	);
};

export default LoginForm;
