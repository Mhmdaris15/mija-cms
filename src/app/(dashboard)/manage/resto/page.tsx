"use client";

import {
	Button,
	Checkbox,
	Image as NexUIImage,
	Input,
	Pagination,
} from "@nextui-org/react";
import React, { useState } from "react";
import RestoPicture1 from "@public/Resto-Picture-1.jpg";
import Image from "next/image";

type Props = {};

const RestoPage = (props: Props) => {
	const [indexImage, setIndexImage] = useState(0);
	const images = [
		"https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
		"https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg",
		"https://nextui-docs-v2.vercel.app/images/album-cover.png",
	];

	const pages = Math.ceil(images.length / 1);

	return (
		<div className="flex flex-col justify-stretch px-10 bg-gray-600 w-full h-[100%]">
			<section className="flex justify-between items-center gap-x-4 mt-5 p-5 rounded-xl bg-gray-50">
				<h3 className="flex-initial w-32 text-2xl font-bold">Resto</h3>
			</section>
			<div className="flex w-full h-w-fit gap-x-10">
				<span className="basis-3/5 inline-block h-fit mt-5 p-5 rounded-xl bg-gray-50">
					<span className="flex justify-between">
						<h3 className="flex-initial w-full text-2xl p-2 pb-5 font-bold">
							Gold Dragon
						</h3>
						<Button color="danger">
							<span className="my-auto font-bold">Edit</span>
						</Button>
					</span>

					<div className="flex flex-col gap-y-5">
						<div className="flex flex-col gap-y-2">
							<label htmlFor="address" className="pl-2 text-lg font-bold">
								Address
							</label>
							<Input
								type="text"
								id="address"
								name="address"
								variant="bordered"
								placeholder="Enter your Address"
								className="w-full mx-auto"
								isClearable
							/>
						</div>
						<div className="flex flex-col gap-y-2">
							<label htmlFor="email" className="pl-2 text-lg font-bold">
								Resto Email
							</label>
							<Input
								type="email"
								id="email"
								name="email"
								variant="bordered"
								placeholder="Enter your Resto email"
								className="w-full mx-auto"
								isClearable
							/>
						</div>
						<div className="flex flex-row gap-x-3">
							<div className="flex-1 flex flex-col gap-y-2">
								<label htmlFor="open-hour" className="pl-2 text-lg font-bold">
									Open Hour
								</label>
								<Input
									type="text"
									id="open-hour"
									name="open-hour"
									variant="bordered"
									placeholder="Enter Resto Open Hour"
									className="w-full mx-auto"
									isClearable
								/>
							</div>
							<div className="flex-1 flex flex-col gap-y-2">
								<label htmlFor="close-hour" className="pl-2 text-lg font-bold">
									Close Hour
								</label>
								<Input
									type="text"
									id="close-hour"
									name="close-hour"
									variant="bordered"
									placeholder="Enter Resto Close Hour"
									className="w-full mx-auto"
									isClearable
								/>
							</div>
						</div>
						<div className="flex flex-col gap-y-2">
							<label htmlFor="booking-fee" className="pl-2 text-lg font-bold">
								Booking Fee
							</label>
							<Input
								type="number"
								id="booking-fee"
								name="booking-fee"
								variant="bordered"
								placeholder="Enter Booking Fee"
								className="w-full mx-auto"
								isClearable
							/>
						</div>
					</div>
				</span>

				<span className="flex-1 shrink flex flex-col mt-5 p-5 rounded-xl bg-gray-50">
					<span className="flex justify-between">
						<h3 className="flex-initial w-full text-2xl p-2 pb-5 font-bold">
							Resto Pic
						</h3>
						<Button color="danger">
							<span className="my-auto font-bold">Change Pic</span>
						</Button>
					</span>
					<div className="w-full">
						<NexUIImage
							isBlurred
							as={Image}
							src={images[indexImage]}
							alt="Mija Color Logo"
							width={500}
							height={500}
							className="object-cover"
						/>
					</div>
					<div className="flex w-full justify-center mt-4 z-10">
						<Pagination
							isCompact
							showControls
							showShadow
							color="danger"
							page={indexImage + 1}
							total={pages}
							onChange={(page) => setIndexImage(page - 1)}
						/>
					</div>
				</span>
			</div>
		</div>
	);
};

export default RestoPage;
