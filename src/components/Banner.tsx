"use client";

import { useSidebarStore } from "@/hooks/useSidebarStore";
import {
	Avatar,
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FiChevronDown, FiSidebar } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";

type Props = {};

const Banner = (props: Props) => {
	const router = useRouter();
	const toggleSidebar = useSidebarStore((state) => state.toggle)
	const isOpen = useSidebarStore((state) => state.isOpen)

	return (
		<div
			className="w-full sticky z-10 top-0 h-32 py-8 px-8 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 text-black shadow-lg font-extrabold text-4xl flex items-center justify-between">
			<span className="flex gap-x-5">
				<Button isIconOnly color="primary" variant="ghost" aria-label="Like"
					onClick={toggleSidebar}
				>
					<FiSidebar />
				</Button>
				<span className="hidden lg:block">Panel Admin</span>
			</span>
			<div className="flex items-center">
				<div className="pr-10 cursor-pointer">
					<IoNotificationsOutline />
				</div>
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<div className="flex items-center gap-5 cursor-pointer">
							<Avatar
								isBordered
								as="button"
								className="transition-transform"
								color="secondary"
								name="Jason Hughes"
								size="sm"
								src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
							/>
							<div>
								<h3 className="text-lg">Sena Hargi</h3>
								<h4 className="text-red-700 font-bold text-sm">Admin</h4>
							</div>
							<FiChevronDown />
						</div>
					</DropdownTrigger>
					<DropdownMenu aria-label="Profile Actions" variant="flat">
						<DropdownItem key="profile" className="h-14 gap-2">
							<p className="font-semibold">Signed in as</p>
							<p className="font-semibold">zoey@example.com</p>
						</DropdownItem>
						<DropdownItem key="settings">My Settings</DropdownItem>
						<DropdownItem key="team_settings">Team Settings</DropdownItem>
						<DropdownItem key="analytics">Analytics</DropdownItem>
						<DropdownItem key="system">System</DropdownItem>
						<DropdownItem key="configurations">Configurations</DropdownItem>
						<DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
						<DropdownItem
							key="logout"
							color="danger"
							onClick={() => router.push("/login")}>
							Log Out
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>
		</div>
	);
};

export default Banner;
