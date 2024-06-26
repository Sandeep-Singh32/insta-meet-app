import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import NonAuthStack from "./NonAuthStack";
import AuthStack from "./authStack";

export const StackScreens = () => {
	const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

	return (
		<NavigationContainer>
			{isLoggedIn ? <AuthStack /> : <NonAuthStack />}
		</NavigationContainer>
	);
};

