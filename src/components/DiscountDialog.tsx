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
import { IoAdd, IoRemoveCircle } from "react-icons/io5";

type UploadPhotoProps = {
	name: string;
	description: string;
	className?: string;
};

const UploadPhoto = (props: UploadPhotoProps) => {
	const fileRef = React.useRef<HTMLInputElement>(null);
	const [file, setFile] = React.useState<File | null>(null);

	// Handler for file change
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (files && files[0]) {
			setFile(files[0]);
		}
	};

	const handleRemoveFile = () => {
		setFile(null);
		if (fileRef.current) {
			fileRef.current.value = ""; // Reset the file input
		}
	};

	// Render the uploaded image if available, otherwise render the file input
	return (
		<>
			<input
				ref={fileRef}
				type="file"
				id={props.name}
				name={props.name}
				onChange={handleFileChange}
				style={{ display: "none" }}
			/>
			{file ? (
				<label
					htmlFor={props.name}
					className={`${props.className} cursor-pointer relative`}>
					<button
						className="absolute top-0 right-0 m-2 text-red-500 z-10"
						onClick={handleRemoveFile}
						aria-label="Remove image">
						<IoRemoveCircle size={24} />
					</button>
					<Image
						width={300}
						alt="Uploaded Image"
						className="z-0"
						src={URL.createObjectURL(file)}
					/>
				</label>
			) : (
				<>
					<label
						htmlFor={props.name}
						className={`${props.className} cursor-pointer`}>
						<span className="flex flex-col items-center justify-evenly h-32 border border-gray-400 rounded-2xl">
							<IoAdd className="text-2xl text-default-400 pointer-events-none" />
							<p className="text-gray-500">{props.description}</p>
						</span>
					</label>
				</>
			)}
		</>
	);
};

type Props = {
	ButtonTrigger?: React.ReactNode;
	data?: any;
};

const DiscountDialog = (props: Props) => {
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
								<h2 className="text-xl">Penambahan Menu</h2>
								<p className="text-sm font-light">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
								</p>
							</ModalHeader>
							<ModalBody>
								<div className="flex flex-col gap-y-2">
									<label htmlFor="name" className="pl-2 text-md font-bold">
										Nama Menu
									</label>
									<Input
										type="text"
										id="name"
										name="name"
										variant="bordered"
										placeholder="Masukkan Nama Menu"
										className="w-full mx-auto"
									/>
								</div>
								<div className="flex flex-col gap-y-2">
									<label htmlFor="variasi" className="pl-2 text-md font-bold">
										Variasi
									</label>
									<Input
										type="text"
										id="variasi"
										name="variasi"
										variant="bordered"
										placeholder="Masukkan Variasi Menu"
										className="w-full mx-auto"
									/>
								</div>
								<div className="flex flex-col gap-y-2">
									<label className="pl-2 text-md font-bold">Photo</label>
									<div className="flex gap-2 justify-between">
										<UploadPhoto
											className="basis-1/3"
											name="photo1"
											description="Upload Foto Makanan"
										/>
										<UploadPhoto
											className="basis-1/3"
											name="photo2"
											description="Upload Foto Makanan"
										/>
										<UploadPhoto
											className="basis-1/3"
											name="photo3"
											description="Upload Foto Makanan"
										/>
									</div>
								</div>
								<div className="flex flex-col gap-y-2">
									<label htmlFor="deskripsi" className="pl-2 text-md font-bold">
										Deskripsi
									</label>
									<Textarea
										name="deskripsi"
										id="deskripsi"
										variant="bordered"
										label="deskripsi"
										placeholder="Masukkan Deskripsi Menu"
									/>
								</div>
								<div className="flex flex-col gap-y-2">
									<label htmlFor="harga" className="pl-2 text-md font-bold">
										Harga
									</label>
									<Input
										variant="bordered"
										type="number"
										name="harga"
										id="harga"
										placeholder="Masukkan Nominal Harga Menu"
										startContent={
											<div className="pointer-events-none flex items-center">
												<span className="text-default-400 text-small">Rp</span>
											</div>
										}
									/>
								</div>
								<div className="flex flex-col gap-y-2">
									<label htmlFor="stok" className="pl-2 text-md font-bold">
										Stok
									</label>
									<Input
										variant="bordered"
										type="number"
										name="stok"
										id="stok"
										placeholder="Masukkan Nominal Jumlah Stok"
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

export default DiscountDialog;
