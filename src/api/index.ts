import axios, { AxiosResponse } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "../store";

const api = axios.create({
	baseURL: "http://localhost:3001",
	responseType: "json",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

api.interceptors.request.use(async config => {
	const token = await AsyncStorage.getItem("@auth");
	if (config.headers) {
		config.headers["Authorization"] = token ? `Bearer ${token}` : "";
	}

	return config;
});

api.interceptors.response.use(
	response => response,
	async error => {
		const originalConfig = error.config;
		console.log({ originalConfig });
		return Promise.reject(error);
	},
);

export { api };
