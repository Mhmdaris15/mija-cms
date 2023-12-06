import { User } from "@nextui-org/react";
import clsx from "clsx";
import React from "react";

type Props = {
	imageSrc: string;
	phoneNumber: string;
	last_active?: string;
	isActive?: boolean;
};

const ChatBanner: React.FC<Props> = (props) => {
	return (
		<main className={"flex flex-col w-full gap-y-2 cursor-pointer"}>
			<User
				name={props.phoneNumber}
				description={props.last_active}
				className="w-full flex justify-start gap-x-4"
				classNames={{
					base: "relative",
					name: clsx("font-bold text-sm", {
						"text-gray-100": props.isActive,
						"text-gray-700": !props.isActive,
					}),
					description: clsx("text-xs absolute right-0", {
						"font-bold text-gray-200": props.isActive,
						"font-bold text-gray-700": !props.isActive,
					}),
				}}
				avatarProps={{
					src: props.imageSrc,
				}}
			/>
			<p className="text-xs">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur,
				nam.
			</p>
		</main>
	);
};

export default ChatBanner;
