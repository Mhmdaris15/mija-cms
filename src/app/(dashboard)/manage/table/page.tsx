"use client";

import {
	Button,
	Checkbox,
	Input,
	Pagination,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from "@nextui-org/react";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiFileEditLine } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import TableDialog from "@/components/TableDialog";

type Props = {};

const tableArray = [
	{
		table_number: "Number 2",
		category: "2 Seats",
		deskripsi: "Table for intimate dining",
		status: "Available",
	},
	{
		table_number: "Number 3",
		category: "4 Seats",
		deskripsi: "Table for small groups",
		status: "Available",
	},
	{
		table_number: "Number 4",
		category: "6 Seats",
		deskripsi: "Table for medium-sized groups",
		status: "Available",
	},
	{
		table_number: "Number 5",
		category: "8 Seats",
		deskripsi: "Table for large groups",
		status: "Available",
	},
	{
		table_number: "Window Table 1",
		category: "4 Seats",
		deskripsi: "Table with a view of the city",
		status: "Available",
	},
	{
		table_number: "Window Table 2",
		category: "2 Seats",
		deskripsi: "Table with a view of the street",
		status: "Available",
	},
	{
		table_number: "Outdoor Table 1",
		category: "4 Seats",
		deskripsi: "Table in the outdoor patio",
		status: "Available",
	},
	{
		table_number: "Outdoor Table 2",
		category: "2 Seats",
		deskripsi: "Table in the outdoor patio",
		status: "Available",
	},
];

const StatusCheckbox = (props: any) => {
	const [isBooked, setIsBooked] = useState(false);
	return (
		<Checkbox
			isSelected={isBooked}
			onValueChange={() => setIsBooked(!isBooked)}>
			{isBooked ? "Booked" : "Available"}
		</Checkbox>
	);
};

const TablePage = (props: Props) => {
	const [page, setPage] = React.useState(1);
	const rowsPerPage = 4;

	const pages = Math.ceil(tableArray.length / rowsPerPage);

	const items = React.useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		return tableArray.slice(start, end);
	}, [page, tableArray]);

	return (
		<div className="flex flex-col justify-stretch mt-5 px-10 bg-gray-600 w-full h-full">
			<section className="flex justify-between items-center gap-x-4 mt-5 p-5 rounded-xl bg-gray-50">
				<h3 className="flex-initial w-32 text-2xl font-bold">Table</h3>
				<div className="flex justify-stretch items-center gap-x-4 flex-1 px-24">
					<Input type="email" className="" variant="bordered" />
					<Button className="w-16 h-12 text-white" color="warning">
						<div className="">
							<BsSearch />
						</div>
					</Button>
				</div>
				{/* <Button className="flex-initial w-32 h-12 bg-red-600 text-white">
					<IoAdd /> Tambahkan
				</Button> */}
				<TableDialog />
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
					<TableColumn>Nomor Table</TableColumn>
					<TableColumn>Kategori</TableColumn>
					<TableColumn>Deskripsi</TableColumn>
					<TableColumn>Status</TableColumn>
					<TableColumn className="text-center">Aksi</TableColumn>
				</TableHeader>
				<TableBody>
					{items.map((menu, index) => {
						return (
							<TableRow key={index} className="h-[7vh]">
								<TableCell>
									{rowsPerPage * page - (rowsPerPage - index) + 1}
								</TableCell>
								<TableCell>{menu.table_number}</TableCell>
								<TableCell>{menu.category}</TableCell>
								<TableCell>{menu.deskripsi}</TableCell>
								<TableCell>
									<StatusCheckbox />
								</TableCell>
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

export default TablePage;
