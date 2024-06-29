import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { api } from "../../../api";
import { API_URLS } from "../../../utils/apiUrls";
export const SIGNUP_ACTION = "SIGNUP_ACTION";

export const signupUser = createAsyncThunk(
	SIGNUP_ACTION,
	async (payload, { rejectWithValue }) => {
		try {
			const response = await api.post(API_URLS.auth.signup, payload);
			return response.data;
		} catch (error) {
			const err = error as AxiosError;
			rejectWithValue(error);
		}
	},
);
