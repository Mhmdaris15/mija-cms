import { LoginType, RegisterType } from "./types";
import axios from "axios";

export const URI = "https://api.mijaapps.com";

export const login = async (body: LoginType) => {
	try {
		const response = await axios.post(`${URI}/user/login`, body, {
			headers: {
				"Content-Type": "application/json",
				Accept: "*/*",
				Connection: "keep-alive",
			},
		});
		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};

export const register = async (body: RegisterType) => {
	try {
		const response = await axios.post(`${URI}/user/register`, body, {
			headers: {
				"Content-Type": "application/json",
				Accept: "*/*",
				Connection: "keep-alive",
			},
		});
		return response;
	} catch (error) {
		console.error(error);
		return null;
	}
};