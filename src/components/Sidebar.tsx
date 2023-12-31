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
import { IoStatsChart, IoCloseCircleOutline } from "react-icons/io5";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useAnimate, motion } from "framer-motion"
import { useSidebarStore } from "@/hooks/useSidebarStore";


type Props = {
	className?: string;
};

const Sidebar = (props: Props) => {
	const router = useRouter();
	const [scope, animate] = useAnimate()

	const isOpen = useSidebarStore((state) => state.isOpen)

	React.useEffect(() => {
		animate(scope.current, {
			x: isOpen ? 0 : -550,
			duration: 0.5,
		});
	}, [isOpen])
	const [active, setActive] = React.useState({
		dashboard: false,
		manage: false,
		reservation: false,
		chat: false,
		report: false,
		resto: false,
		menuList: false,
		table: false,
		discount: false,
		detail: false,
		payment: false,
	});

	const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	React.useEffect(() => {
		// Set initial window width
		setWindowWidth(window.innerWidth);

		// Add event listener to update width on window resize
		window.addEventListener('resize', handleResize);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

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
			discount: false,
			detail: false,
			payment: false,
			[name]: true,
		});
		// If the name is sub of manage, set manage to true
		if (
			name === "resto" ||
			name === "menuList" ||
			name === "table" ||
			name === "discount"
		) {
			setActive((prev) => ({ ...prev, manage: true }));
		} else if (name === "detail" || name === "payment") {
			setActive((prev) => ({ ...prev, reservation: true }));
		}

		switch (name) {
			case "dashboard":
				// router.push("/dashboard");
				break;
			case "manage":
				setActive((prev) => ({ ...prev, manage: true, resto: true }));
				router.push("/manage/resto");
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
			case "discount":
				router.push("/manage/discount");
				break;
			case "reservation":
				router.push("/reservation");
				break;
			case "detail":
				router.push("/reservation/detail");
				break;
			case "payment":
				router.push("/reservation/payment");
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
		<motion.div
			ref={scope}
			initial={{ x: -300, opacity: 0.5 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="lg:w-[20%] absolute z-20 lg:relative w-full h-screen overflow-hidden flex flex-col gap-y-5 py-10 pl-10 pr-5 border-r-2 bg-orange-50 border-black">
			<span className="flex justify-between items-center">
				<Image
					src={MijaLogo}
					className="cursor-pointer"
					alt="Mija Logo"
					width={windowWidth > 1024 ? 400 : 200}
					onClick={() => router.push("/")}
				/>
				<Button
					isIconOnly
					onClick={() => useSidebarStore.getState().toggle()}
					variant="ghost"
					color="danger"
					className={clsx("text-2xl text-red-700",
						{
							"hidden": windowWidth > 1024
						})
					}>
					<IoCloseCircleOutline />
				</Button>
			</span>
			<section className="flex flex-col gap-2 mt-10 text-black">
				<Button
					onKeyUp={(e) => console.log(e.key)}
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
				{!active.reservation && active.manage && (
					<>
						<Button
							onClick={() => onClickButton("resto")}
							size="lg"
							className={clsx(
								"flex h-16 justify-end bg-gray-50 rounded-lg px-4",
								{
									"text-red-700": active.resto,
								}
							)}>
							<span className="my-auto font-bold">Resto</span>
						</Button>
						<Button
							onClick={() => onClickButton("menuList")}
							size="lg"
							className={clsx(
								"flex h-16 justify-end bg-gray-50 rounded-lg px-4",
								{
									"text-red-700": active.menuList,
								}
							)}>
							<span className="my-auto font-bold">Menu List</span>
						</Button>
						<Button
							onClick={() => onClickButton("table")}
							size="lg"
							className={clsx(
								"flex h-16 justify-end bg-gray-50 rounded-lg px-4",
								{
									"text-red-700": active.table,
								}
							)}>
							<span className="my-auto font-bold">Table</span>
						</Button>
						<Button
							onClick={() => onClickButton("discount")}
							size="lg"
							className={clsx(
								"flex h-16 justify-end bg-gray-50 rounded-lg px-4",
								{
									"text-red-700": active.discount,
								}
							)}>
							<span className="my-auto font-bold">Discount List</span>
						</Button>
					</>
				)}

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

				{/* Manage Sub Button */}
				{!active.manage && active.reservation && (
					<>
						<Button
							onClick={() => onClickButton("detail")}
							size="lg"
							className={clsx(
								"flex h-16 justify-end bg-gray-50 rounded-lg px-4",
								{
									"text-red-700": active.detail,
								}
							)}>
							<span className="my-auto font-bold">Detail</span>
						</Button>
						<Button
							onClick={() => onClickButton("payment")}
							size="lg"
							className={clsx(
								"flex h-16 justify-end bg-gray-50 rounded-lg px-4",
								{
									"text-red-700": active.payment,
								}
							)}>
							<span className="my-auto font-bold">Payment</span>
						</Button>
					</>
				)}
				{/* Manage Sub Button */}

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
		</motion.div>
	);
};

export default Sidebar;
