import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image,
	ViewStyle,
	ImageStyle,
	TextStyle,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import { colorTheme, fontfamily } from "../../../themes/light";
import { appIcon } from "../../../assets/images";
import { NavigationProp } from "@react-navigation/native";
import { NonAuthStackScreens } from "../../../routes/nonAuthStack";

interface LoginInterface {
	navigation: NavigationProp<NonAuthStackScreens>;
}

export const Login: React.FC<LoginInterface> = ({ navigation }) => {
	const styles = styleSheet();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleForgotPassword = () => {
		navigation.navigate("forgotPassword");
	};

	const handelSignup = () => {
		navigation.navigate("signup");
	};

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "android" ? "height" : "padding"}>
			<Image source={appIcon} style={styles.logo} />

			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="username, email address or mobile number"
					placeholderTextColor={colorTheme.primary.black}
					value={email}
					onChangeText={setEmail}
				/>
			</View>

			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="password"
					placeholderTextColor={colorTheme.primary.black}
					secureTextEntry
					value={password}
					onChangeText={setPassword}
				/>
			</View>

			<TouchableOpacity style={styles.loginButton}>
				<Text style={styles.loginButtonText}>Log in</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={handleForgotPassword}>
				<Text style={styles.forgotPassword}>Forgotten Password?</Text>
			</TouchableOpacity>

			<View style={styles.bottomView}>
				<TouchableOpacity
					style={styles.signupButton}
					onPress={handelSignup}>
					<Text style={styles.signupButtonText}>
						Create new account
					</Text>
				</TouchableOpacity>

				<Text style={styles.appText}>Insta Meet</Text>
			</View>
		</KeyboardAvoidingView>
	);
};

interface StyleTypes {
	container: ViewStyle;
	logo: ImageStyle;
	inputContainer: ViewStyle;
	input: ViewStyle;
	loginButton: ViewStyle;
	loginButtonText: TextStyle;
	forgotPassword: TextStyle;
	signupButton: ViewStyle;
	signupButtonText: TextStyle;
	appText: TextStyle;
	bottomView: ViewStyle;
}

const styleSheet = () =>
	StyleSheet.create<StyleTypes>({
		container: {
			flex: 1,
			backgroundColor: colorTheme.primary.white,
			alignItems: "center",
			justifyContent: "center",
			padding: 16,
		},
		logo: {
			width: 80,
			height: 80,
			marginBottom: 40,
			borderRadius: 40,
		},
		inputContainer: {
			width: "100%",
			backgroundColor: "transparent",
			borderRadius: 5,
			paddingHorizontal: 10,
			marginVertical: 10,
			borderWidth: 1,
		},
		input: {
			height: 50,
			fontSize: 16,
			fontFamily: fontfamily.REGULAR,
			color: colorTheme.primary.black,
			borderRadius: 20,
		},
		loginButton: {
			backgroundColor: colorTheme.primary.green,
			width: "100%",
			borderRadius: 20,
			paddingVertical: 12,
			alignItems: "center",
			justifyContent: "center",
			marginVertical: 10,
		},
		loginButtonText: {
			color: colorTheme.primary.white,
			fontSize: 16,
			fontWeight: "bold",
			fontFamily: fontfamily.BOLD,
		},
		forgotPassword: {
			color: colorTheme.primary.black,
			marginTop: 5,
			fontFamily: fontfamily.MEDIUM,
			letterSpacing: 0.7,
			fontSize: 14,
		},
		signupButton: {
			width: "100%",
			paddingVertical: 12,
			alignItems: "center",
			justifyContent: "center",
			borderWidth: 1,
			borderColor: colorTheme.primary.green,
			marginVertical: 10,
			borderRadius: 20,
		},
		signupButtonText: {
			color: colorTheme.primary.green,
			fontSize: 16,
			fontWeight: "bold",
			fontFamily: fontfamily.BOLD,
		},
		appText: {
			color: colorTheme.primary.black,
			fontSize: 16,
			marginTop: 20,
			fontFamily: fontfamily.MEDIUM,
		},
		bottomView: {
			// ...StyleSheet.absoluteFillObject,
			// bottom: 50,
			marginTop: 100,
			top: undefined,
			width: "100%",
			// padding: 16,
			alignItems: "center",
			alignSelf: "center",
			justifyContent: "center",
		},
	});
