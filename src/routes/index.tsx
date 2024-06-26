// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAppSelector } from "../store";
import { StackScreens } from "./stack";


export const Route = () => {
	return <StackScreens />;
};
