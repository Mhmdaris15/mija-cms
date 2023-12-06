import React from "react";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
	useDisclosure,
	Input,
	Textarea,
	Image,
} from "@nextui-org/react";
import { IoAdd } from "react-icons/io5";

type Props = {
	ButtonTrigger?: React.ReactNode;
	data?: any;
};

const TableDialog = (props: Props) => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();

	return (
		<>
			<Button
				className="flex-initial w-32 h-12 bg-red-600 text-white"
				onPress={onOpen}>
				<IoAdd />
				Tambahkan
			</Button>
			<Modal
				backdrop="blur"
				isOpen={isOpen}
				size="2xl"
				classNames={{
					footer: "flex justify-between gap-x-2",
				}}
				onOpenChange={onOpenChange}
				motionProps={{
					variants: {
						enter: {
							y: 0,
							opacity: 1,
							transition: {
								duration: 0.3,
								ease: "easeOut",
							},
						},
						exit: {
							y: -20,
							opacity: 0,
							transition: {
								duration: 0.2,
								ease: "easeIn",
							},
						},
					},
				}}>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								<h2 className="text-xl">Penambahan Tabel</h2>
								<p className="text-sm font-light">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
								</p>
							</ModalHeader>
							<ModalBody>
								<div className="flex flex-col gap-y-2">
									<label htmlFor="name" className="pl-2 text-md font-bold">
										Kategori Meja
									</label>
									<Input
										type="text"
										id="name"
										name="name"
										variant="bordered"
										placeholder="Masukkan Kateogri Meja"
										className="w-full mx-auto"
									/>
								</div>

								<div className="flex flex-col gap-y-2">
									<label htmlFor="deskripsi" className="pl-2 text-md font-bold">
										Deskripsi Kursi
									</label>
									<Textarea
										name="deskripsi"
										id="deskripsi"
										variant="bordered"
										label="deskripsi"
										placeholder="Masukkan Deskripsi Kursi yang tersedia dalam 1 Meja"
									/>
								</div>
							</ModalBody>
							<ModalFooter>
								<Button
									size="lg"
									className="bg-red-500 text-gray-50 w-full"
									onPress={onClose}>
									Close
								</Button>
								<Button
									size="lg"
									color="primary"
									className="w-full"
									onPress={onClose}>
									Save
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
};

export default TableDialog;
