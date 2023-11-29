"use client";

import React from "react";
import MijaLogo from "@public/mija-logo-color.png";
import Image from "next/image";
import {
	AiOutlineCalendar,
	AiOutlineMonitor,
	AiOutlineShop,
} from "react-icons/ai";

import clsx from "clsx";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { ImCalendar } from "react-icons/im";
import { IoStatsChart } from "react-icons/io5";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

type Props = {};

const Sidebar = (props: Props) => {
	const router = useRouter();
	const [active, setActive] = React.useState({
		dashboard: false,
		manage: false,
		reservation: false,
		chat: false,
		report: false,
		resto: false,
		menuList: false,
		table: false,
	});

	const onClickButton = (name: string) => {
		// Set others to false and set the current one to true
		setActive({
			dashboard: false,
			manage: false,
			reservation: false,
			chat: false,
			report: false,
			resto: false,
			menuList: false,
			table: false,
			[name]: true,
		});
		// If the name is sub of manage, set manage to true
		if (name === "resto" || name === "menuList" || name === "table") {
			setActive((prev) => ({ ...prev, manage: true }));
		}

		switch (name) {
			case "dashboard":
				// router.push("/dashboard");
				break;
			case "manage":
				// router.push("/manage");
				break;
			case "resto":
				router.push("/manage/resto");
				break;
			case "menuList":
				router.push("/manage/menu-list");
				break;
			case "table":
				router.push("/manage/table");
				break;
			case "reservation":
				router.push("/reservation");
				break;
			case "chat":
				router.push("/chat");
				break;
			case "report":
				router.push("/report");
				break;
			default:
				break;
		}
	};

	return (
		<div className="w-[20%] flex flex-col gap-y-5 py-10 pl-10 pr-5 border-r-2 border-black">
			<Image
				src={MijaLogo}
				className="cursor-pointer"
				alt="Mija Logo"
				onClick={() => router.push("/")}
			/>
			<section className="flex flex-col gap-2 mt-10 text-black">
				<Button
					onClick={() => onClickButton("dashboard")}
					size="lg"
					className={clsx(
						"flex h-20 justify-start bg-gray-50 rounded-lg px-4",
						{
							"bg-red-700 text-white": active.dashboard,
						}
					)}>
					<span className="pr-4 my-auto text-3xl font-bold">
						<AiOutlineMonitor />
					</span>{" "}
					<span className="my-auto font-bold">Dashboard</span>
				</Button>

				<Button
					onClick={() => onClickButton("manage")}
					size="lg"
					className={clsx(
						"flex h-20 justify-start bg-gray-50 rounded-lg px-4",
						{
							"bg-red-700 text-white": active.manage,
						}
					)}>
					<span className="pr-4 my-auto text-3xl font-bold">
						<AiOutlineShop />
					</span>{" "}
					<span className="my-auto font-bold">Manage</span>
				</Button>

				{/* Manage Sub Button */}
				<Button
					onClick={() => onClickButton("resto")}
					size="lg"
					className={clsx("flex h-16 justify-end bg-gray-50 rounded-lg px-4", {
						"text-red-700": active.resto,
					})}>
					<span className="my-auto font-bold">Resto</span>
				</Button>
				<Button
					onClick={() => onClickButton("menuList")}
					size="lg"
					className={clsx("flex h-16 justify-end bg-gray-50 rounded-lg px-4", {
						"text-red-700": active.menuList,
					})}>
					<span className="my-auto font-bold">Menu List</span>
				</Button>
				<Button
					onClick={() => onClickButton("table")}
					size="lg"
					className={clsx("flex h-16 justify-end bg-gray-50 rounded-lg px-4", {
						"text-red-700": active.table,
					})}>
					<span className="my-auto font-bold">Table</span>
				</Button>

				{/* Manage Sub Button */}

				<Button
					onClick={() => onClickButton("reservation")}
					size="lg"
					className={clsx(
						"flex h-20 justify-start bg-gray-50 rounded-lg px-4",
						{
							"bg-red-700 text-white": active.reservation,
						}
					)}>
					<span className="pr-4 my-auto text-3xl font-bold">
						<ImCalendar />
					</span>{" "}
					<span className="my-auto font-bold">Reservation</span>
				</Button>
				<Button
					onClick={() => onClickButton("chat")}
					size="lg"
					className={clsx(
						"flex h-20 justify-start bg-gray-50 rounded-lg px-4",
						{
							"bg-red-700 text-white": active.chat,
						}
					)}>
					<span className="pr-4 my-auto text-3xl font-bold">
						<BsChatLeftDotsFill />
					</span>{" "}
					<span className="my-auto font-bold">Chat</span>
				</Button>
				<Button
					onClick={() => onClickButton("report")}
					size="lg"
					className={clsx(
						"flex h-20 justify-start bg-gray-50 rounded-lg px-4",
						{
							"bg-red-700 text-white": active.report,
						}
					)}>
					<span className="pr-4 my-auto text-3xl font-bold">
						<IoStatsChart />
					</span>{" "}
					<span className="my-auto font-bold">Report</span>
				</Button>
			</section>
		</div>
	);
};

export default Sidebar;
