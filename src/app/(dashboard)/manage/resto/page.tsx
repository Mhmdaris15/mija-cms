"use client";

import { Checkbox, Input } from "@nextui-org/react";
import React, { useState } from "react";

type Props = {};

const RestoPage = (props: Props) => {
	return (
		<div className="flex flex-col justify-stretch mt-5 px-10 bg-gray-600 w-full h-full">
			<section className="flex justify-between items-center gap-x-4 mt-5 p-5 rounded-xl bg-gray-50">
				<h3 className="flex-initial w-32 text-2xl font-bold">Resto</h3>
			</section>
			<div className="flex w-full h-full gap-x-10">
				<span className="basis-3/5 inline-block h-full mt-5 p-5 rounded-xl bg-gray-50">
					<h2>Gold Dragon</h2>
				</span>
				<span className="flex-1 inline-block h-full mt-5 p-5 rounded-xl bg-gray-50">
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
				</span>
			</div>
		</div>
	);
};

export default RestoPage;
