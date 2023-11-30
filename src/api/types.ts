export type LoginType = {
	email: string;
	password: string;
};

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
