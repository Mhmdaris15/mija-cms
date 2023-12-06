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

interface MenuInterface {
	nama_menu: string;
	kategori: string;
	harga: string;
	deskripsi: string | null;
	stok: string;
	diskon: string;
}

const menuArray: MenuInterface[] = [
	{
		nama_menu: "Nasi Goreng",
		kategori: "Main Dish",
		harga: "12,000",
		deskripsi:
			"Nasi goreng adalah makanan khas Indonesia yang terbuat dari nasi yang digoreng dengan bumbu-bumbu. Nasi goreng dapat ditambahkan dengan berbagai macam bahan, seperti daging ayam, telur, sayuran, dan lain-lain.",
		stok: "150",
		diskon: "5%",
	},
	{
		nama_menu: "Sweet and Sour Chicken",
		kategori: "Chinese Cuisine",
		harga: "45,000",
		deskripsi:
			"Sweet and sour chicken is a classic Chinese dish with crispy fried chicken, bell peppers, and pineapple in a tangy sweet and sour sauce.",
		stok: "100",
		diskon: "10%",
	},
	{
		nama_menu: "Sushi Assortment",
		kategori: "Japanese Cuisine",
		harga: "60,000",
		deskripsi:
			"Enjoy a variety of sushi with this assortment that includes nigiri, sashimi, and maki rolls. Perfect for sushi lovers!",
		stok: "80",
		diskon: "8%",
	},
	{
		nama_menu: "Rendang",
		kategori: "Indonesian Dish",
		harga: "35,000",
		deskripsi:
			"Rendang is a flavorful Indonesian dish made with slow-cooked beef, coconut milk, and a blend of aromatic spices.",
		stok: "120",
		diskon: "7%",
	},
	{
		nama_menu: "Bibimbap",
		kategori: "Korean Cuisine",
		harga: "50,000",
		deskripsi:
			"Bibimbap is a popular Korean mixed rice dish topped with vegetables, egg, and a spicy gochujang sauce. A delicious and colorful meal!",
		stok: "90",
		diskon: "12%",
	},
	{
		nama_menu: "Pad Thai",
		kategori: "Thai Cuisine",
		harga: "55,000",
		deskripsi:
			"Pad Thai is a famous Thai stir-fried noodle dish, made with rice noodles, shrimp, tofu, peanuts, and lime.",
		stok: "80",
		diskon: "10%",
	},
	{
		nama_menu: "Dim Sum Platter",
		kategori: "Chinese Cuisine",
		harga: "65,000",
		deskripsi:
			"Indulge in a delightful assortment of dim sum, including dumplings, buns, and spring rolls.",
		stok: "95",
		diskon: "8%",
	},
	{
		nama_menu: "Sashimi Deluxe",
		kategori: "Japanese Cuisine",
		harga: "75,000",
		deskripsi:
			"Experience the freshness of the ocean with a deluxe sashimi platter featuring a variety of raw fish slices.",
		stok: "70",
		diskon: "15%",
	},
	{
		nama_menu: "Nasi Lemak",
		kategori: "Malaysian Dish",
		harga: "30,000",
		deskripsi:
			"Nasi Lemak is a Malaysian fragrant rice dish cooked in coconut milk, served with anchovies, peanuts, boiled eggs, and sambal.",
		stok: "110",
		diskon: "5%",
	},
	{
		nama_menu: "Bulgogi",
		kategori: "Korean Cuisine",
		harga: "40,000",
		deskripsi:
			"Bulgogi is a Korean barbecue dish featuring marinated and grilled beef, often served with vegetables.",
		stok: "85",
		diskon: "12%",
	},
	{
		nama_menu: "Chicken Adobo",
		kategori: "Filipino Dish",
		harga: "35,000",
		deskripsi:
			"Chicken Adobo is a popular Filipino dish made with chicken marinated in soy sauce, vinegar, and garlic, then braised until tender.",
		stok: "100",
		diskon: "7%",
	},
	{
		nama_menu: "Pho Bo",
		kategori: "Vietnamese Cuisine",
		harga: "45,000",
		deskripsi:
			"Pho Bo is a Vietnamese noodle soup with beef, rice noodles, and a fragrant broth made with herbs and spices.",
		stok: "75",
		diskon: "9%",
	},
	{
		nama_menu: "Mee Goreng",
		kategori: "Malaysian Dish",
		harga: "38,000",
		deskripsi:
			"Mee Goreng is a Malaysian stir-fried noodle dish with a flavorful mix of spices, vegetables, and protein.",
		stok: "90",
		diskon: "6%",
	},
	{
		nama_menu: "Tempura Udon",
		kategori: "Japanese Cuisine",
		harga: "58,000",
		deskripsi:
			"Tempura Udon features thick wheat noodles in a savory broth, topped with tempura (battered and deep-fried seafood or vegetables).",
		stok: "65",
		diskon: "11%",
	},
	{
		nama_menu: "Tom Yum Soup",
		kategori: "Thai Cuisine",
		harga: "48,000",
		deskripsi:
			"Tom Yum Soup is a spicy and sour Thai soup with a fragrant blend of herbs, shrimp, mushrooms, and lime.",
		stok: "80",
		diskon: "8%",
	},
];

const MenuListPage = (props: Props) => {
	const [filterValue, setFilterValue] = React.useState("");
	const [statusFilter, setStatusFilter] = React.useState("all");
	const [page, setPage] = React.useState(1);
	const [rowsPerPage, setRowsPerPage] = React.useState(4);

	const hasSearchFilter = Boolean(filterValue.length);

	const pages = Math.ceil(menuArray.length / rowsPerPage);

	const filteredMenus = React.useMemo(() => {
		let filteredMenus = [...menuArray];

		if (hasSearchFilter) {
			filteredMenus = filteredMenus.filter(
				(menu) =>
					menu.nama_menu.toLowerCase().includes(filterValue.toLowerCase()) ||
					menu.kategori.toLowerCase().includes(filterValue.toLowerCase()) ||
					menu.deskripsi?.toLowerCase().includes(filterValue.toLowerCase()) ||
					menu.stok.toLowerCase().includes(filterValue.toLowerCase()) ||
					menu.harga.toLowerCase().includes(filterValue.toLowerCase())
			);
		}

		return filteredMenus;
	}, [filterValue, hasSearchFilter]);

	const items = React.useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		return filteredMenus.slice(start, end);
	}, [page, filteredMenus, rowsPerPage]);

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
				<h3 className="flex-initial w-32 text-2xl font-bold">Menu List</h3>
				<div className="flex justify-stretch items-center gap-x-4 flex-1 px-24">
					<Input
						type="email"
						className=""
						variant="bordered"
						value={filterValue}
						onChange={(e) => onSearchChange(e.target.value)}
						onClear={onClear}
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
								<TableCell>
									{rowsPerPage * page - (rowsPerPage - index) + 1}
								</TableCell>
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
