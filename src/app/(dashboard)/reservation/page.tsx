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

type Props = {};

interface Payment {
	reservationPayment: string;
	total: number;
	deposit: "Paid" | "Dalam Proses";
}

const paymentArray: Payment[] = [
	{
		reservationPayment: "Sena Hargi",
		total: 15000,
		deposit: "Dalam Proses",
	},
	{
		reservationPayment: "Adam Firdaus",
		total: 20000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Rizky Fauzi",
		total: 17500,
		deposit: "Paid",
	},
	{
		reservationPayment: "Maulana Ibrahim",
		total: 22500,
		deposit: "Paid",
	},
	{
		reservationPayment: "Akmal Ramadhan",
		total: 11000,
		deposit: "Dalam Proses",
	},
	{
		reservationPayment: "Anton Suhartono",
		total: 13000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Naufal Fadhil",
		total: 10000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Aris Setiawan",
		total: 12000,
		deposit: "Dalam Proses",
	},
	{
		reservationPayment: "Soeharto Tjahjono",
		total: 50000,
		deposit: "Paid",
	},
];

const ReservationPage = (props: Props) => {
	const [page, setPage] = React.useState(1);
	const rowsPerPage = 6;

	const pages = Math.ceil(paymentArray.length / rowsPerPage);

	const items = React.useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		return paymentArray.slice(start, end);
	}, [page, paymentArray]);

	return (
		<div className="flex flex-col justify-stretch mt-5 px-10 bg-gray-600 w-full h-full">
			<section className="flex justify-between items-center gap-x-4 mt-5 p-5 rounded-xl bg-gray-50">
				<h3 className="flex-initial w-32 text-2xl font-bold">Payments</h3>
				<div className="flex justify-stretch items-center gap-x-4 flex-1 px-24">
					<Input type="email" className="" variant="bordered" />
					<Button className="w-16 h-12 text-white" color="warning">
						<div className="">
							<BsSearch />
						</div>
					</Button>
				</div>
				<Button className="flex-initial w-32 h-12 bg-red-600 text-white">
					<IoAdd /> Tambahkan
				</Button>
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
					<TableColumn>Reservation Payment</TableColumn>
					<TableColumn>Total</TableColumn>
					<TableColumn>Deposit</TableColumn>
				</TableHeader>
				<TableBody>
					{items.map((menu, index) => {
						return (
							<TableRow key={index} className="h-[7vh]">
								<TableCell>
									{rowsPerPage * page - (rowsPerPage - index) + 1}
								</TableCell>
								<TableCell>{menu.reservationPayment}</TableCell>
								<TableCell>{menu.total}</TableCell>
								<TableCell>{menu.deposit}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
};

export default ReservationPage;
