import { Button, Input } from "@nextui-org/react";
import React from "react";

type Props = {};

const MenuListPage = (props: Props) => {
	return (
		<div className="flex flex-col justify-stretch mt-5 mx-10">
			<section className="flex justify-between items-center gap-x-4">
				<h3 className="flex-initial w-32 text-2xl font-bold">Menu List</h3>
				<div className="flex justify-stretch items-center gap-x-4 flex-1 bg-yellow-200 px-24">
					<Input type="email" className="" />
					<Button className="w-16 h-12" color="danger">
						Search
					</Button>
				</div>
				<Button className="flex-initial w-32 h-12" color="danger">
					Danger
				</Button>
			</section>
			<table></table>
		</div>
	);
};

export default MenuListPage;
