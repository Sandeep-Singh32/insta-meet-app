import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/auth/login/login";
import { Signup } from "../screens/auth/signup/signup";
import { ForgotPassword } from "../screens/auth/forgotPassword/forgotPassword";

export type NonAuthStackScreens = {
	login: undefined;
	signup: undefined;
	forgotPassword: undefined;
};

const Stack = createStackNavigator<NonAuthStackScreens>();

export const NonAuthStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="login"
			screenOptions={{ headerShown: false }}>
			<Stack.Screen name="login" component={Login} />
			<Stack.Screen name="signup" component={Signup} />
			<Stack.Screen name="forgotPassword" component={ForgotPassword} />
		</Stack.Navigator>
	);
};
