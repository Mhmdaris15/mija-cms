export type LoginType = {
	email: string;
	password: string;
};

export type RegisterType = {
	first_name: string;
	last_name: string;
	email: string;
	birthday: Date;
	phone_number: number;
	gender: "male" | "female";
}

export type LoginResponseType = {
	code: number;
	message: string;
	count: number | null;
	data: {
		accessToken: string;
		refreshToken: string;
	} | null;
	error: string | null;
};

export type RegisterResponseType = {
	code: number;
	message: string;
	count: number | null;
	data: {
		accessToken: string;
		refreshToken: string;
	} | null;
	error: string | null;
};