import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Homepage } from "../screens/home/homepage/homepage";

const Tab = createBottomTabNavigator();

const AuthStack = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={Homepage} />
		</Tab.Navigator>
	);
};

export default AuthStack;
