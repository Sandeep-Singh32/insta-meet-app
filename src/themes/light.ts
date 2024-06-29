import { ColorPalette } from "./types";

export const fontfamily = {
	BLACK: "RobotoCondensed-Black",
	BOLD: "RobotoCondensed-Bold",
	EXTRABOLD: "RobotoCondensed-ExtraBold",
	EXTRA_LIGHT: "RobotoCondensed-ExtraLight",
	LIGHT: "RobotoCondensed-Light",
	MEDIUM: "RobotoCondensed-Medium",
	REGULAR: "RobotoCondensed-Regular",
	SEMIBOLD: "RobotoCondensed-SemiBold",
	THIN: "RobotoCondensed-Thin",
	ITALIC_BOLD: "RobotoCondensed-BoldItalic",
};

export const colorTheme: ColorPalette = {
	primary: {
		white: "#FFFFFF",
		black: "#000000",
		textGrey: "#868686",
		red: "#D24837",
		backgroundRed: "#FF3333",
		backgroundGray: "#C2BCE4",
		green: "#379777",
    greyText: "#6E6E6E",

	},
	text: {
		textLight: "#C2BCE4",
		textPlaceHolder1: "#6B6685",
		darkLabelTextColor: "#1F1750",
		lightLabelTextColor: "#F5F5F5",
		pageTitleColor: "#F5F5F5",
		bodyTextColor: "#C2BCE4",
	},
	success: {
		greenDark: "#2E546C",
		greenMedium1: "#2DD7AE",
	},
	info: {
		grey: "#C7C5D3",
	},
	error: {
		redLight1: "#FF6678",
	},
};
