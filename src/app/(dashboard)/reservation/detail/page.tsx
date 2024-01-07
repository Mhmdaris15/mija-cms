"use client";

import {
	Button,
	Input,
	Pagination,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiFileEditLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import MenuDialog from "@/components/MenuDialog";

type Props = {};

interface Detail {
	reservation_name: string;
	reservation_time: string;
	request: string;
	payment_status: string;
	menu: string;
}

const detailArray: Detail[] = [
	{
		reservation_name: "John Doe",
		reservation_time: "2023-04-10 18:30",
		request: "Window seat",
		payment_status: "Paid",
		menu: "Sushi Assortment",
	},
	{
		reservation_name: "Alice Smith",
		reservation_time: "2023-04-12 19:00",
		request: "Vegetarian options",
		payment_status: "Pending",
		menu: "Pad Thai",
	},
	{
		reservation_name: "Bob Johnson",
		reservation_time: "2023-04-15 20:00",
		request: "Birthday celebration",
		payment_status: "Paid",
		menu: "Bibimbap",
	},
	{
		reservation_name: "Emily Brown",
		reservation_time: "2023-04-18 18:45",
		request: "Allergies: No nuts",
		payment_status: "Paid",
		menu: "Sweet and Sour Chicken",
	},
	{
		reservation_name: "Daniel Lee",
		reservation_time: "2023-04-20 19:30",
		request: "Quiet corner",
		payment_status: "Pending",
		menu: "Rendang",
	},
	{
		reservation_name: "Sophia Wang",
		reservation_time: "2023-04-23 20:15",
		request: "Anniversary dinner",
		payment_status: "Paid",
		menu: "Nasi Lemak",
	},
	{
		reservation_name: "Michael Chen",
		reservation_time: "2023-04-25 18:00",
		request: "Business meeting",
		payment_status: "Pending",
		menu: "Bulgogi",
	},
	{
		reservation_name: "Olivia Taylor",
		reservation_time: "2023-04-28 19:45",
		request: "No onions",
		payment_status: "Paid",
		menu: "Chicken Adobo",
	},
	{
		reservation_name: "Ethan Kim",
		reservation_time: "2023-05-01 20:30",
		request: "Dessert recommendation",
		payment_status: "Pending",
		menu: "Matcha Ice Cream",
	},
	{
		reservation_name: "Ava Nguyen",
		reservation_time: "2023-05-03 18:15",
		request: "Vegetarian tasting menu",
		payment_status: "Paid",
		menu: "Vegetarian Sushi Platter",
	},
];

const DetailPage = (props: Props) => {
	const [filterValue, setFilterValue] = React.useState("");
	const [statusFilter, setStatusFilter] = React.useState("all");
	const [page, setPage] = React.useState(1);
	const [rowsPerPage, setRowsPerPage] = React.useState(4);

	const hasSearchFilter = Boolean(filterValue.length);

	const pages = Math.ceil(detailArray.length / rowsPerPage);

	const filteredItems = React.useMemo(() => {
		let filteredDetails = [...detailArray];

		if (hasSearchFilter) {
			filteredDetails = filteredDetails.filter(
				(discount) =>
					discount.reservation_name
						.toLowerCase()
						.includes(filterValue.toLowerCase()) ||
					discount.reservation_time
						.toLowerCase()
						.includes(filterValue.toLowerCase()) ||
					discount.request.toLowerCase().includes(filterValue.toLowerCase()) ||
					discount.payment_status
						.toLowerCase()
						.includes(filterValue.toLowerCase()) ||
					discount.menu.toLowerCase().includes(filterValue.toLowerCase())
			);
		}

		return filteredDetails;
	}, [filterValue, hasSearchFilter]);

	const items = React.useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		return filteredItems.slice(start, end);
	}, [page, filteredItems, rowsPerPage]);

	const onSearchChange = React.useCallback((value: string) => {
		if (value) {
			setFilterValue(value);
			setPage(1);
		} else {
			setFilterValue("");
		}
	}, []);

	const onClear = React.useCallback(() => {
		setFilterValue("");
		setPage(1);
	}, []);
	return (
		<div className="flex flex-col justify-stretch px-10 bg-gray-600 w-full h-full">
			<section className="flex justify-between items-center gap-x-4 mt-5 p-5 rounded-xl bg-gray-50">
				<h3 className="flex-initial w-40 text-2xl font-bold">Discount List</h3>
				<div className="flex justify-stretch items-center gap-x-4 flex-1 px-24">
					<Input
						type="text"
						className=""
						variant="bordered"
						value={filterValue}
						onClear={() => onClear()}
						onValueChange={onSearchChange}
					/>
					<Button className="w-16 h-12 text-white" color="warning">
						<div className="">
							<BsSearch />
						</div>
					</Button>
				</div>
				<MenuDialog />
			</section>
			<Table
				color={"primary"}
				selectionMode="single"
				defaultSelectedKeys={["2"]}
				className="mt-5"
				classNames={{
					wrapper: "min-h-[222px]",
				}}
				aria-label="Example static collection table"
				bottomContent={
					<div className="flex w-full justify-center">
						<Pagination
							isCompact
							showControls
							showShadow
							color="danger"
							page={page}
							total={pages}
							onChange={(page) => setPage(page)}
						/>
					</div>
				}>
				<TableHeader className="">
					<TableColumn>No</TableColumn>
					<TableColumn>Reservation Name</TableColumn>
					<TableColumn>Reservation Time</TableColumn>
					<TableColumn>Request</TableColumn>
					<TableColumn>Payment Status</TableColumn>
					<TableColumn>Menu</TableColumn>
					<TableColumn className="text-center">Aksi</TableColumn>
				</TableHeader>
				<TableBody>
					{items.map((menu, index) => {
						return (
							<TableRow key={index} className="h-[11vh]">
								<TableCell>
									{rowsPerPage * page - (rowsPerPage - index) + 1}
								</TableCell>
								<TableCell>{menu.reservation_name}</TableCell>
								<TableCell>{menu.reservation_time}</TableCell>
								<TableCell>{menu.request}</TableCell>
								<TableCell>{menu.payment_status}</TableCell>
								<TableCell>{menu.menu}</TableCell>
								<TableCell>
									<div className="flex justify-center items-center gap-x-4">
										<span className="p-1 cursor-pointer hover:text-green-500">
											<RiFileEditLine />
										</span>
										<span className="p-2 cursor-pointer hover:text-red-500">
											<FaRegTrashAlt />
										</span>
									</div>
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
};

export default DetailPage;
