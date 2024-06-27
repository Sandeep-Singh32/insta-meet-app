import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { AuthStack } from "./authStack";
import { NonAuthStack } from "./nonAuthStack";

export const StackScreens = () => {
	const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

	return (
		<NavigationContainer>
			{isLoggedIn ? <AuthStack /> : <NonAuthStack />}
		</NavigationContainer>
	);
};
