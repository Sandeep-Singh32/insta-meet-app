import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/auth/login/login";
import { Signup } from "../screens/auth/signup/signup";
import { ForgotPassword } from "../screens/auth/forgotPassword/forgotPassword";

const Stack = createStackNavigator();

const NonAuthStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Signup" component={Signup} />
			<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
		</Stack.Navigator>
	);
};

export default NonAuthStack;
