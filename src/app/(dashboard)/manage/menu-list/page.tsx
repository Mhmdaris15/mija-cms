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

const menuArray = [
	{
		nama_menu: "Nasi Goreng",
		kategori: "Main Dish",
		harga: "12000",
		deskripsi:
			"Nasi goreng adalah makanan khas Indonesia yang terbuat dari nasi yang digoreng dengan bumbu-bumbu. Nasi goreng dapat ditambahkan dengan berbagai macam bahan, seperti daging ayam, telur, sayuran, dan lain-lain.",
		stok: "150",
		diskon: "5%",
	},
	{
		nama_menu: "Soto Ayam",
		kategori: "Soup",
		harga: "10000",
		deskripsi:
			"Soto ayam adalah makanan berkuah yang terbuat dari kaldu ayam. Soto ayam biasanya disajikan dengan nasi, daging ayam, tauge, telur, dan lain-lain.",
		stok: "200",
		diskon: "10%",
	},
	{
		nama_menu: "Mie Ayam",
		kategori: "Noodle",
		harga: "13000",
		deskripsi:
			"Mie ayam adalah makanan yang terbuat dari mie kuning yang disajikan dengan ayam suwir, sawi, daun bawang, dan pangsit. Mie ayam biasanya disajikan dengan kuah kaldu ayam.",
		stok: "175",
		diskon: "15%",
	},
	{
		nama_menu: "Capcay",
		kategori: "Vegetable",
		harga: "11000",
		deskripsi:
			"Capcay adalah makanan yang terbuat dari berbagai macam sayuran yang ditumis dengan bumbu-bumbu. Capcay biasanya disajikan dengan nasi atau mie.",
		stok: "225",
		diskon: "0%",
	},
	{
		nama_menu: "Es Teh Manis",
		kategori: "Drink",
		harga: "5000",
		deskripsi:
			"Es teh manis adalah minuman yang terbuat dari teh yang disajikan dengan gula dan es. Es teh manis adalah minuman yang paling populer di Indonesia.",
		stok: "300",
		diskon: "20%",
	},
	{
		nama_menu: "Es Jeruk",
		kategori: "Drink",
		harga: "6000",
		deskripsi:
			"Es jeruk adalah minuman yang terbuat dari jeruk yang disajikan dengan gula dan es. Es jeruk adalah minuman yang menyegarkan dan menyehatkan.",
		stok: "250",
		diskon: "10%",
	},
	{
		nama_menu: "Jus Alpukat",
		kategori: "Drink",
		harga: "7000",
		deskripsi:
			"Jus alpukat adalah minuman yang terbuat dari alpukat yang disajikan dengan gula dan es. Jus alpukat adalah minuman yang kaya akan nutrisi dan bermanfaat bagi kesehatan.",
		stok: "275",
		diskon: "0%",
	},
	{
		nama_menu: "Kopi Hitam",
		kategori: "Drink",
		harga: "8000",
		deskripsi:
			"Kopi hitam adalah minuman yang terbuat dari biji kopi yang disangrai dan digiling. Kopi hitam adalah minuman yang dapat meningkatkan energi dan konsentrasi.",
		stok: "325",
		diskon: "15%",
	},
];

const MenuListPage = (props: Props) => {
	const [page, setPage] = React.useState(1);
	const rowsPerPage = 4;

	const pages = Math.ceil(menuArray.length / rowsPerPage);

	const items = React.useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		return menuArray.slice(start, end);
	}, [page, menuArray]);

	return (
		<div className="flex flex-col justify-stretch mt-5 px-10 bg-gray-600 w-full h-full">
			<section className="flex justify-between items-center gap-x-4 mt-5 p-5 rounded-xl bg-gray-50">
				<h3 className="flex-initial w-32 text-2xl font-bold">Menu List</h3>
				<div className="flex justify-stretch items-center gap-x-4 flex-1 px-24">
					<Input type="email" className="" variant="bordered" />
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
					<TableColumn>Nama Menu</TableColumn>
					<TableColumn>Kategori</TableColumn>
					<TableColumn>Harga (Rp)</TableColumn>
					<TableColumn>Deskripsi</TableColumn>
					<TableColumn>Stok</TableColumn>
					<TableColumn className="text-center">Aksi</TableColumn>
				</TableHeader>
				<TableBody>
					{items.map((menu, index) => {
						return (
							<TableRow key={index} className="h-[11vh]">
								<TableCell>{index + 1}</TableCell>
								<TableCell>{menu.nama_menu}</TableCell>
								<TableCell>{menu.kategori}</TableCell>
								<TableCell>{menu.harga}</TableCell>
								<TableCell className="max-w-lg">{menu.deskripsi}</TableCell>
								<TableCell>{menu.stok}</TableCell>
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

export default MenuListPage;
