import { User } from "@nextui-org/react";
import React from "react";

type Props = {
	imageSrc: string;
	phoneNumber: string;
};

const ChatBanner = (props: Props) => {
	return (
		<main className="flex flex-col w-full gap-y-5 cursor-pointer">
			<User
				name={props.phoneNumber}
				description="1 Menit yang lalu"
				className="w-full flex justify-start gap-x-4"
				classNames={{
					base: "relative",
					name: "text-black font-bold text-lg",
					description: "text-gray-700 text-xs absolute right-0",
				}}
				avatarProps={{
					src: props.imageSrc,
				}}
			/>
			<p className="text-xs ">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur,
				nam.
			</p>
		</main>
	);
};

export default ChatBanner;
