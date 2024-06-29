import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice({
	name: "signup",
	initialState: {
		name: "",
		email: "",
		password: "",
	},
	reducers: {},
    extraReducers: (buillder)=>{
        buillder.addCase(signupSlice.actions.setName, (state, action) => {
            state.name = action.payload;
        });
        buillder.addCase(signupSlice.actions.setEmail, (state, action) => {
            state.email = action.payload;
        });
        buillder.addCase(signupSlice.actions.setPassword, (state, action) => {
            state.password = action.payload;
        });
    }
});
