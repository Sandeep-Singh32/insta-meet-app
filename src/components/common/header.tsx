import React from "react";
import {
	Text,
	View,
	StatusBar,
	ViewStyle,
	StyleSheet,
	Pressable,
	TextStyle,
	Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colorTheme, fontfamily } from "../../themes/light";
import { ColorPalette } from "../../themes/types";
import { BackArrowIcon } from "../../assets/icons";

type StyleProps = {
	safeAreaViewContainer: ViewStyle;
	headerContainer: ViewStyle;
	headerText: TextStyle;
	subHeaderText: TextStyle;
	headerBackButton: ViewStyle;
};

const styleSheet = (theme: ColorPalette) =>
	StyleSheet.create<StyleProps>({
		safeAreaViewContainer: {
			flex: 1,
			backgroundColor: colorTheme.primary.white,
		},
		headerContainer: {
			flexDirection: "row",
			justifyContent: "space-between",
			paddingHorizontal: 16,
			paddingTop: Platform.OS === "ios" ? 0 : 20,
			paddingBottom: Platform.OS === "ios" ? 30 : 20,
			alignItems: "center",
		},
		headerText: {
			fontSize: 16,
			fontFamily: colorTheme.primary.green,
			color: theme.primary.black,
		},
		subHeaderText: {
			textAlign: "right",
			fontSize: 12,
			fontFamily: fontfamily.REGULAR,
			color: theme.primary.greyText,
		},
		headerBackButton: {
			padding: Platform.OS === "ios" ? 10 : 20,
			paddingLeft: 0,
			paddingRight: 30,
		},
	});

interface HeaderProps {
	children: React.JSX.Element | React.JSX.Element[];
	statusBarBackgroundColor?: string;
	onBackPress?: () => void;
	headerTitle?: string;
	isShowSubHeader?: boolean;
	subHeaderTitle?: string;
}

export const CommonHeader: React.FC<HeaderProps> = ({
	statusBarBackgroundColor,
	children,
	onBackPress,
	headerTitle,
	isShowSubHeader = false,
	subHeaderTitle = "",
}) => {
	const styles = styleSheet(colorTheme);

	return (
		<SafeAreaView style={styles.safeAreaViewContainer} edges={["top"]}>
			<StatusBar
				backgroundColor={
					statusBarBackgroundColor && statusBarBackgroundColor
				}
			/>
			<View style={styles.headerContainer}>
				<Pressable
					onPress={onBackPress}
					style={styles.headerBackButton}>
					<BackArrowIcon />
				</Pressable>
				<View>
					{headerTitle && (
						<Text style={styles.headerText}>{headerTitle}</Text>
					)}
					{isShowSubHeader && (
						<Text style={styles.subHeaderText}>
							{subHeaderTitle}
						</Text>
					)}
				</View>
			</View>
			{children}
		</SafeAreaView>
	);
};
