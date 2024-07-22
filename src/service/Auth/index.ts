import { iUserData } from "@/types/interfaces";
import { Axios } from "../AxiosServiceWrapper";

export const AuthService = {
	signInUser: async (userData: iUserData) => {
		const { data } = await Axios.Request("post", "user/login", "", userData);
		return data;
	},
	signUpUser: async (userData: iUserData) => {
		const { data } = await Axios.Request("post", "user", "", userData);
		return data;
	}
};
