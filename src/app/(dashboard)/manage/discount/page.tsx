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

interface Discount {
	nama_discount: string;
	code: string;
	total_potongan: number;
	deskripsi: string | null;
	tanggal_berlaku: string;
}

const discountArray: Discount[] = [
	{
		nama_discount: "Paket 50 + 20",
		code: "5DAN82H",
		total_potongan: 80,
		deskripsi:
			"Diskon 50% untuk pembelian 2 menu dan 20% untuk pembelian 1 menu. Berlaku untuk semua menu. Berlaku untuk 1 kali transaksi. Berlaku untuk 1 meja.",
		tanggal_berlaku: "2021-10-10",
	},
	{
		nama_discount: "Special Deal",
		code: "SPC1AL",
		total_potongan: 30,
		deskripsi:
			"Diskon 30% untuk pembelian menu-menu spesial. Berlaku untuk semua cabang. Berlaku hingga akhir bulan.",
		tanggal_berlaku: "2022-02-28",
	},
	{
		nama_discount: "Weekend Bonanza",
		code: "WKND777",
		total_potongan: 25,
		deskripsi:
			"Diskon 25% untuk pembelian di akhir pekan. Berlaku untuk semua jenis pembayaran. Tidak berlaku dengan diskon lainnya.",
		tanggal_berlaku: "2022-03-15",
	},
	{
		nama_discount: "Family Feast",
		code: "FAM10Y",
		total_potongan: 40,
		deskripsi:
			"Diskon 40% untuk pemesanan lebih dari 5 menu untuk keluarga. Berlaku di semua hari kecuali hari libur nasional.",
		tanggal_berlaku: "2022-04-20",
	},
	{
		nama_discount: "Student Discount",
		code: "STDNT25",
		total_potongan: 15,
		deskripsi:
			"Diskon 15% untuk pelajar dengan menunjukkan kartu pelajar. Berlaku setiap hari kecuali hari Minggu.",
		tanggal_berlaku: "2022-05-05",
	},
	{
		nama_discount: "Early Bird",
		code: "EARLY20",
		total_potongan: 20,
		deskripsi:
			"Diskon 20% untuk pemesanan sebelum jam 12 siang. Berlaku untuk makan siang dan makan malam.",
		tanggal_berlaku: "2022-06-01",
	},
	{
		nama_discount: "VIP Exclusive",
		code: "VIP123",
		total_potongan: 50,
		deskripsi:
			"Diskon 50% untuk anggota VIP dengan menggunakan kartu keanggotaan. Berlaku di restoran tertentu.",
		tanggal_berlaku: "2022-07-15",
	},
	{
		nama_discount: "Birthday Bash",
		code: "BIRTH30",
		total_potongan: 30,
		deskripsi:
			"Diskon 30% untuk pembelian di hari ulang tahun. Harus menunjukkan kartu identitas.",
		tanggal_berlaku: "2022-08-10",
	},
	{
		nama_discount: "Couples Retreat",
		code: "LOVE2022",
		total_potongan: 15,
		deskripsi:
			"Diskon 15% untuk pasangan yang datang bersama. Berlaku setiap hari kecuali hari Senin.",
		tanggal_berlaku: "2022-09-05",
	},
	{
		nama_discount: "Grand Opening",
		code: "GRAND50",
		total_potongan: 50,
		deskripsi:
			"Diskon 50% untuk merayakan pembukaan cabang baru. Berlaku selama minggu pertama.",
		tanggal_berlaku: "2022-10-01",
	},
	{
		nama_discount: "Loyalty Reward",
		code: "LOYAL25",
		total_potongan: 25,
		deskripsi:
			"Diskon 25% untuk pelanggan setia dengan poin reward tertentu. Berlaku di semua cabang.",
		tanggal_berlaku: "2022-11-20",
	},
	{
		nama_discount: "Holiday Special",
		code: "HOLIDAY40",
		total_potongan: 40,
		deskripsi:
			"Diskon 40% untuk merayakan musim liburan. Berlaku di semua hari kecuali hari Jumat.",
		tanggal_berlaku: "2022-12-25",
	},
	{
		nama_discount: "Business Lunch",
		code: "BIZLUNCH",
		total_potongan: 15,
		deskripsi:
			"Diskon 15% untuk pemesanan makan siang bisnis. Berlaku pada hari kerja.",
		tanggal_berlaku: "2023-01-10",
	},
	{
		nama_discount: "Health & Wellness",
		code: "FITNESS",
		total_potongan: 20,
		deskripsi:
			"Diskon 20% untuk menu-menu sehat. Berlaku sepanjang bulan Januari.",
		tanggal_berlaku: "2023-02-01",
	},
	{
		nama_discount: "Game Night",
		code: "GAMER30",
		total_potongan: 30,
		deskripsi:
			"Diskon 30% untuk pembelian selama malam game. Berlaku di hari Sabtu.",
		tanggal_berlaku: "2023-03-15",
	},
];

const DiscountPage = (props: Props) => {
	const [filterValue, setFilterValue] = React.useState("");
	const [statusFilter, setStatusFilter] = React.useState("all");
	const [page, setPage] = React.useState(1);
	const [rowsPerPage, setRowsPerPage] = React.useState(4);

	const hasSearchFilter = Boolean(filterValue.length);

	const pages = Math.ceil(discountArray.length / rowsPerPage);

	const filteredItems = React.useMemo(() => {
		let filteredDiscounts = [...discountArray];

		if (hasSearchFilter) {
			filteredDiscounts = filteredDiscounts.filter(
				(discount) =>
					discount.nama_discount
						.toLowerCase()
						.includes(filterValue.toLowerCase()) ||
					discount.code.toLowerCase().includes(filterValue.toLowerCase()) ||
					discount.deskripsi
						?.toLowerCase()
						.includes(filterValue.toLowerCase()) ||
					discount.tanggal_berlaku
						.toLowerCase()
						.includes(filterValue.toLowerCase()) ||
					discount.total_potongan.toString().includes(filterValue.toLowerCase())
			);
		}

		return filteredDiscounts;
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
		<div className="flex flex-col justify-stretch mt-5 px-10 bg-gray-600 w-full h-full">
			<section className="flex justify-between items-center gap-x-4 mt-5 p-5 rounded-xl bg-gray-50">
				<h3 className="flex-initial w-40 text-2xl font-bold">Discount List</h3>
				<div className="flex justify-stretch items-center gap-x-4 flex-1 px-24">
					<Input
						type="email"
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
					<TableColumn>Nama Discount</TableColumn>
					<TableColumn>Code</TableColumn>
					<TableColumn>Total Potongan</TableColumn>
					<TableColumn>Deskripsi</TableColumn>
					<TableColumn>Tanggal Berlaku</TableColumn>
					<TableColumn className="text-center">Aksi</TableColumn>
				</TableHeader>
				<TableBody>
					{items.map((menu, index) => {
						return (
							<TableRow key={index} className="h-[11vh]">
								<TableCell>
									{rowsPerPage * page - (rowsPerPage - index) + 1}
								</TableCell>
								<TableCell>{menu.nama_discount}</TableCell>
								<TableCell>{menu.code}</TableCell>
								<TableCell>{menu.total_potongan}</TableCell>
								<TableCell className="max-w-lg">{menu.deskripsi}</TableCell>
								<TableCell>{menu.tanggal_berlaku}</TableCell>
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

export default DiscountPage;
