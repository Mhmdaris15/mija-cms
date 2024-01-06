"use client";

import { register } from "@/api/api";
import { RegisterType } from "@/api/types";
import { Button, Input, Popover, PopoverContent, PopoverTrigger, Select, SelectItem } from "@nextui-org/react";
import { useFormik, validateYupSchema } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import AppleLogo from "@public/Apple-Logo.png"
import GoogleLogo from "@public/Google__G__logo.svg.png"
import Image from "next/image";
import * as Yup from 'yup';
import { Calendar } from "./ui/calendar";

type Props = {};

const RegisterShcema = Yup.object().shape({
	first_name: Yup.string().required("First Name is required"),
	last_name: Yup.string().required("Last Name is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	phone_number: Yup.number().required("Number Phone is required"),
	birthday: Yup.date().required("Birthday is required"),
});

const RegisterForm = (props: Props) => {
	const [isVisible, setIsVisible] = React.useState(false);

	const router = useRouter();

	const toggleVisibility = () => setIsVisible(!isVisible);
	const formik = useFormik({
		initialValues: {
			first_name: "",
			last_name: "",
			email: "",
			phone_number: 0,
			birthday: new Date(),
			gender: "male",
		},
		validationSchema: RegisterShcema,
		onSubmit: (values: RegisterType) => {
			register(values)
				.then((res) => {
					// localStorage.setItem("accessToken", res?.data?.accessToken);
					// localStorage.setItem("refreshToken", res?.data?.refreshToken);
					console.log(res);
					// router.push("/dashboard");
				})
				.catch((err) => console.log(err));
		},
	});
	return (
		<form
			onSubmit={formik.handleSubmit}
			method="post"
			className="max-w-sm md:max-w-lg flex flex-col gap-y-5"
		>
			<div className="mx-auto text-center flex flex-col gap-y-4">
				<h2 className="text-4xl font-extrabold">Register</h2>
				<p className="text-lg font-bold">
					Register an account to access the dashboard
				</p>
			</div>
			<div className="flex justify-between gap-x-2">
				<div className="flex flex-col gap-y-2">
					<label htmlFor="first_name" className="pl-2 text-lg font-bold">
						First Name
					</label>
					<Input
						type="text"
						id="first_name"
						name="first_name"
						variant="bordered"
						placeholder="Enter your First Name"
						className="w-full mx-auto"
						onChange={formik.handleChange}
						value={formik.values.first_name}
						isClearable
						onClear={() => formik.setFieldValue("first_name", "")}
					/>
				</div>
				<div className="flex flex-col gap-y-2">
					<label htmlFor="last_name" className="pl-2 text-lg font-bold">
						Last Name
					</label>
					<Input
						type="text"
						id="last_name"
						name="last_name"
						variant="bordered"
						placeholder="Enter your Last Name"
						className="w-full mx-auto"
						onChange={formik.handleChange}
						value={formik.values.last_name}
						isClearable
						onClear={() => formik.setFieldValue("last_name", "")}
					/>
				</div>
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
					onChange={formik.handleChange}
					value={formik.values.email}
					isClearable
					onClear={() => formik.setFieldValue("email", "")}
				/>
			</div>
			<div className="flex flex-col gap-y-2">
				<label htmlFor="phone_number" className="pl-2 text-lg font-bold">
					Phone Number
				</label>
				<Input
					name="phone_number"
					id="phone_number"
					variant="bordered"
					placeholder="Enter your Number Phone"
					type="text"
					className="w-full mx-auto"
					onChange={formik.handleChange}
					value={formik.values.phone_number.toString()}
					isClearable
					onClear={() => formik.setFieldValue("phone_number", "")}
				/>
			</div>
			<div className="flex flex-col gap-y-2">
				<label htmlFor="birthday" className="pl-2 text-lg font-bold">
					Birthday
				</label>
				<Input
					type="date"
					name="birthday"
					id="birthday"
					variant="bordered"
					placeholder="Enter your Birthday"
					className="w-full mx-auto"
					onChange={formik.handleChange}
					value={formik.values.birthday.toString()}
					isClearable
					onClear={() => formik.setFieldValue("birthday", "")}
				/>
			</div>
			<div className="flex flex-col gap-y-2">
				<label htmlFor="gender" className="pl-2 text-lg font-bold">
					Gender
				</label>
				<Select
					size="lg"
					name="gender"
					id="gender"
					variant="bordered"
					placeholder="Select Your Gender"
					fullWidth
					labelPlacement="outside-left"
				>
					<SelectItem key="male" value="male">
						Male
					</SelectItem>
					<SelectItem key="female" value="female">
						Female
					</SelectItem>
				</Select>
			</div>
			<div className="flex flex-col items-center gap-5">
				<p className="text-xs text-center font-bold">
					Or Register with
				</p>
				<span className="flex gap-2">
					<Button isIconOnly radius="full" variant="shadow" className="bg-transparent">
						<Image src={GoogleLogo} className="p-1" alt="Google Logo" width={50} />
					</Button>
					<Button isIconOnly radius="full" variant="shadow" className="bg-transparent">
						<Image src={AppleLogo} alt="Apple Logo" width={50} />
					</Button>
				</span>
			</div>
			<div className="flex flex-col gap-y-2">
				<Button
					className="w-full bg-red-700 text-white"
					// onClick={() => router.push("/")}
					type="submit"
				>
					Register
				</Button>
				<p className="text-center text-sm font-bold">
					Already have an account?{" "}
					<Link href="/login" className="text-yellow-400 underline">
						Login
					</Link>
				</p>
			</div>
		</form >
	);
};

export default RegisterForm;
