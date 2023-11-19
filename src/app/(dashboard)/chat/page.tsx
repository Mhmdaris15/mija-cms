import ChatBanner from "@/components/ChatBanner";
import { Button, Chip, User } from "@nextui-org/react";
import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";

type Props = {};

const ChatPage = (props: Props) => {
	return (
		<main className="flex h-full bg-gray-50">
			<section className="basis-1/4 flex flex-col border-r-2 border-gray-400">
				<span className="flex items-center justify-start gap-x-5 px-5 py-3 bg-red-500 rounded-lg m-6">
					<p className="text-xl text-gray-50 font-bold">Live Chats</p>
					<Chip size="lg" className="text-red-500 py-2 bg-gray-50">
						<span className="font-bold">200</span>
					</Chip>
				</span>
				<span className="flex flex-col gap-y-1 px-5 py-3 bg-gray-50 h-full snap-y">
					<ChatBanner
						imageSrc="https://i.pravatar.cc/150?u=a042581f4e29026024d"
						phoneNumber="+62 858-1421-8210"
					/>
					<ChatBanner
						imageSrc="https://i.pravatar.cc/150?u=a042581f4e29026704d"
						phoneNumber="+62 858-1421-8210"
					/>
					<ChatBanner
						imageSrc="https://i.pravatar.cc/150?u=a04258114e29026702d"
						phoneNumber="+62 858-1421-8210"
					/>
					<ChatBanner
						imageSrc="https://i.pravatar.cc/150?u=a04258114e29026708c"
						phoneNumber="+62 858-1421-8210"
					/>
					<ChatBanner
						imageSrc="https://i.pravatar.cc/150?u=a04258114e29026302d"
						phoneNumber="+62 858-1421-8210"
					/>
					<ChatBanner
						imageSrc="https://i.pravatar.cc/150?u=a042581f4e29026704d"
						phoneNumber="+62 858-1421-8210"
					/>
					<ChatBanner
						imageSrc="https://i.pravatar.cc/150?u=a04258a2462d826712d"
						phoneNumber="+62 858-1421-8210"
					/>
				</span>
			</section>
			<section className="flex-1">
				<header className="w-full bg-gray-50 py-5 px-10 flex justify-between items-center">
					<User
						avatarProps={{
							className: "w-16 h-16",
							src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
						}}
						name="+62 812-3456-7890"
						classNames={{
							name: "text-black font-bold text-lg",
						}}
					/>
					<div className="flex items-center basis-2/12 justify-between">
						<Button
							color="primary"
							variant="bordered"
							startContent={<IoCallOutline />}>
							Call
						</Button>
						<SlOptionsVertical />
					</div>
				</header>
			</section>
		</main>
	);
};

export default ChatPage;
