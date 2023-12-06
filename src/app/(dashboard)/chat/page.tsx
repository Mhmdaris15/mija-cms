"use client";

import React from "react";
import ChatBanner from "@/components/ChatBanner";
import {
	Button,
	Chip,
	Input,
	ScrollShadow,
	Textarea,
	User,
} from "@nextui-org/react";
import clsx from "clsx";
import { IoCallOutline, IoSend } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { formatDistanceToNow } from "date-fns";
import { IoAdd } from "react-icons/io5";

type Props = {};

interface ChatBannerProps {
	imageSrc: string;
	phoneNumber: string;
	last_active?: Date;
}

const getRandomDate = (start: Date, end: Date): Date => {
	return new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime())
	);
};

const ChatPage = (props: Props) => {
	const [chatData, setChatData] = React.useState<ChatBannerProps[]>([]);
	const [activeChat, setActiveChat] = React.useState<ChatBannerProps | null>(
		null
	);

	React.useEffect(() => {
		const chatData: ChatBannerProps[] = [
			{
				imageSrc: "https://i.pravatar.cc/150?u=a04258234e29026709d",
				phoneNumber: "+1 555-9876-5432",
				last_active: getRandomDate(new Date(2023, 0, 1), new Date()),
			},
			{
				imageSrc: "https://i.pravatar.cc/150?u=a04258672d8267144d",
				phoneNumber: "+44 20 1234 5678",
				last_active: getRandomDate(new Date(2023, 0, 1), new Date()),
			},
			{
				imageSrc: "https://i.pravatar.cc/150?u=a04258990e29026582d",
				phoneNumber: "+81 90 8765 4321",
				last_active: getRandomDate(new Date(2023, 0, 1), new Date()),
			},
			{
				imageSrc: "https://i.pravatar.cc/150?u=a04258149e29026112d",
				phoneNumber: "+61 3 9876 5432",
				last_active: getRandomDate(new Date(2023, 0, 1), new Date()),
			},
			{
				imageSrc: "https://i.pravatar.cc/150?u=a04258378e29026944d",
				phoneNumber: "+49 89 1234 5678",
				last_active: getRandomDate(new Date(2023, 0, 1), new Date()),
			},
			{
				imageSrc: "https://i.pravatar.cc/150?u=a04258123e29026705d",
				phoneNumber: "+33 6 12 34 56 78",
				last_active: getRandomDate(new Date(2023, 0, 1), new Date()),
			},
			{
				imageSrc: "https://i.pravatar.cc/150?u=a04258217e29026492d",
				phoneNumber: "+82 10 5678 4321",
				last_active: getRandomDate(new Date(2023, 0, 1), new Date()),
			},
			{
				imageSrc: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
				phoneNumber: "+1 555-1234-5678",
				last_active: getRandomDate(new Date(2023, 0, 1), new Date()),
			},
			{
				imageSrc: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
				phoneNumber: "+44 20 7946 0958", // Example UK number
				last_active: getRandomDate(new Date(2023, 0, 1), new Date()),
			},
			{
				imageSrc: "https://i.pravatar.cc/150?u=a04258114e29026702d",
				phoneNumber: "+81 3 1234 5678",
				last_active: getRandomDate(new Date(2023, 0, 1), new Date()),
			},
			{
				imageSrc: "https://i.pravatar.cc/150?u=a04258114e29026708c",
				phoneNumber: "+61 2 1234 5678",
				last_active: getRandomDate(new Date(2023, 0, 1), new Date()),
			},
			{
				imageSrc: "https://i.pravatar.cc/150?u=a04258114e29026302d",
				phoneNumber: "+49 30 1234 5678",
				last_active: getRandomDate(new Date(2023, 0, 1), new Date()),
			},
			{
				imageSrc: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
				phoneNumber: "+33 1 23 45 67 89",
				last_active: getRandomDate(new Date(2023, 0, 1), new Date()),
			},
			{
				imageSrc: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
				phoneNumber: "+82 2 1234 5678",
				last_active: getRandomDate(new Date(2023, 0, 1), new Date()),
			},
		];
		setChatData(chatData);
		setActiveChat(chatData[0]);
	}, []);

	return (
		<main className="flex h-[86vh] bg-gray-50">
			<ScrollShadow
				hideScrollBar
				className="flex-shrink-0 w-1/4 border-r-2 border-gray-400">
				<div className="flex items-center justify-start gap-x-5 px-5 py-3 bg-red-500 rounded-lg m-6">
					<p className="text-xl text-gray-50 font-bold">Live Chats</p>
					<Chip size="lg" className="text-red-500 py-2 bg-gray-50">
						<span className="font-bold">{chatData.length}</span>
					</Chip>
				</div>
				<div className="flex justify-between">
					<h3 className="font-bold"> By Recents </h3>
				</div>
				<ScrollShadow
					hideScrollBar
					className="flex flex-col gap-y-1 py-3 px-1 bg-gray-50 h-full overflow-y-auto">
					{chatData.map((chat, index) => (
						<span
							key={chat.phoneNumber}
							onClick={() => setActiveChat(chat)}
							className={clsx(
								"rounded-xl px-5 py-3 transition-all active:bg-red-500",
								{
									"bg-red-500 text-gray-50 hover:bg-red-600":
										activeChat?.phoneNumber === chat.phoneNumber,
									"bg-gray-50 text-black hover:bg-gray-400":
										activeChat?.phoneNumber !== chat.phoneNumber,
								}
							)}>
							<ChatBanner
								isActive={activeChat?.phoneNumber === chat.phoneNumber}
								imageSrc={chat.imageSrc}
								phoneNumber={chat.phoneNumber}
								last_active={formatDistanceToNow(
									chat.last_active || new Date()
								)}
							/>
						</span>
					))}
				</ScrollShadow>
			</ScrollShadow>
			<section className="flex-1 flex flex-col justify-between h-[100%]">
				<header className="w-full bg-gray-50 py-5 px-10 flex justify-between items-center">
					<User
						avatarProps={{
							className: "w-16 h-16",
							src: activeChat?.imageSrc,
						}}
						name={activeChat?.phoneNumber}
						classNames={{
							name: "text-black font-bold text-lg",
						}}
					/>
					<div className="flex items-center gap-x-3">
						<Button
							color="primary"
							variant="bordered"
							startContent={<IoCallOutline />}>
							Call
						</Button>
						<span className="cursor-pointer active:bg-gray-300 rounded-full p-2">
							<SlOptionsVertical />
						</span>
					</div>
				</header>
				{/* Add your chat content here */}
				<div className="flex-1 bg-[#888888]"></div>
				<div className="basis-24 flex px-10 justify-between items-center gap-x-5 border-t-1 border-gray-800">
					<Button
						startContent={<IoAdd />}
						className="w-12 h-12 text-white"
						color="warning"></Button>
					<Textarea
						type="text"
						className="translate-y-1"
						variant="bordered"
						placeholder="Type a message"
						classNames={{
							inputWrapper: "border-gray-300",
						}}
						minRows={1}
						maxRows={3}
					/>
					<Button
						startContent={<IoSend />}
						className="w-16 h-12 text-white"
						color="danger"></Button>
				</div>
			</section>
		</main>
	);
};

export default ChatPage;
