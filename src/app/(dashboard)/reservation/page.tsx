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
		reservationPayment: "Yuki Tanaka",
		total: 20000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Chen Wei",
		total: 18000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Kim Minho",
		total: 25000,
		deposit: "Dalam Proses",
	},
	{
		reservationPayment: "Akihiko Nakamura",
		total: 30000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Li Mei",
		total: 22000,
		deposit: "Dalam Proses",
	},
	{
		reservationPayment: "Kwon Jiyoung",
		total: 17000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Yoshiko Sato",
		total: 28000,
		deposit: "Dalam Proses",
	},
	{
		reservationPayment: "Wang Jie",
		total: 19000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Hideo Suzuki",
		total: 21000,
		deposit: "Dalam Proses",
	},
	{
		reservationPayment: "Lee Seojin",
		total: 23000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Zhang Wei",
		total: 27000,
		deposit: "Dalam Proses",
	},
	{
		reservationPayment: "Aya Yamamoto",
		total: 16000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Park Jihye",
		total: 24000,
		deposit: "Dalam Proses",
	},
	{
		reservationPayment: "Xiao Chen",
		total: 26000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Masato Suzuki",
		total: 32000,
		deposit: "Dalam Proses",
	},
	{
		reservationPayment: "Lin Yuki",
		total: 18000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Haruka Tanaka",
		total: 29000,
		deposit: "Dalam Proses",
	},
	{
		reservationPayment: "Kim Minji",
		total: 20000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Huang Lei",
		total: 17000,
		deposit: "Dalam Proses",
	},
	{
		reservationPayment: "Ryota Nakamura",
		total: 21000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Zhang Xia",
		total: 25000,
		deposit: "Dalam Proses",
	},
	{
		reservationPayment: "Kazuki Yamamoto",
		total: 30000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Li Hua",
		total: 22000,
		deposit: "Dalam Proses",
	},
	{
		reservationPayment: "Jung Minho",
		total: 19000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Yuki Takahashi",
		total: 23000,
		deposit: "Dalam Proses",
	},
	{
		reservationPayment: "Wang Mei",
		total: 16000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Kim Soojin",
		total: 24000,
		deposit: "Dalam Proses",
	},
	{
		reservationPayment: "Xiao Liu",
		total: 28000,
		deposit: "Paid",
	},
	{
		reservationPayment: "Hiroshi Suzuki",
		total: 31000,
		deposit: "Dalam Proses",
	},
];

const ReservationPage = (props: Props) => {
	const [filterValue, setFilterValue] = React.useState("");
	const [statusFilter, setStatusFilter] = React.useState("all");
	const [page, setPage] = React.useState(1);
	const [rowsPerPage, setRowsPerPage] = React.useState(6);

	const hasSearchFilter = Boolean(filterValue.length);

	const pages = Math.ceil(paymentArray.length / rowsPerPage);

	const filteredItems = React.useMemo(() => {
		let filteredPayments = [...paymentArray];

		if (hasSearchFilter) {
			filteredPayments = filteredPayments.filter(
				(payment) =>
					payment.reservationPayment
						.toLowerCase()
						.includes(filterValue.toLowerCase()) ||
					payment.total.toString().includes(filterValue.toLowerCase()) ||
					payment.deposit.toLowerCase().includes(filterValue.toLowerCase())
			);
		}

		return filteredPayments;
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
				<h3 className="flex-initial w-32 text-2xl font-bold">Payments</h3>
				<div className="flex justify-stretch items-center gap-x-4 flex-1 px-24">
					<Input
						type="email"
						className=""
						variant="bordered"
						value={filterValue}
						onValueChange={onSearchChange}
						onClear={() => onClear()}
						placeholder="Search"
					/>
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
