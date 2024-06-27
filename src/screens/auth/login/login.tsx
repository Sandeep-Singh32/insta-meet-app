import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
	const navigation = useNavigation();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/instagram-logo.png")}
				style={styles.logo}
			/>

			<View style={styles.inputContainer}>
				<Icon name="user" size={20} color="#888" style={styles.icon} />
				<TextInput
					style={styles.input}
					placeholder="Email or Phone"
					placeholderTextColor="#888"
					value={email}
					onChangeText={setEmail}
				/>
			</View>

			<View style={styles.inputContainer}>
				<Icon name="lock" size={20} color="#888" style={styles.icon} />
				<TextInput
					style={styles.input}
					placeholder="Password"
					placeholderTextColor="#888"
					secureTextEntry
					value={password}
					onChangeText={setPassword}
				/>
			</View>

			<TouchableOpacity style={styles.loginButton}>
				<Text style={styles.loginButtonText}>Log In</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => navigation.navigate("ForgotPassword")}>
				<Text style={styles.forgotPassword}>Forgot Password?</Text>
			</TouchableOpacity>

			<View style={styles.separatorContainer}>
				<View style={styles.separatorLine} />
				<Text style={styles.separatorText}>OR</Text>
				<View style={styles.separatorLine} />
			</View>

			<TouchableOpacity
				style={styles.signupButton}
				onPress={() => navigation.navigate("Signup")}>
				<Text style={styles.signupButtonText}>Sign Up</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 16,
	},
	logo: {
		width: 120,
		height: 120,
		marginBottom: 40,
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		backgroundColor: "#f1f1f1",
		borderRadius: 5,
		paddingHorizontal: 10,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
	},
	input: {
		flex: 1,
		height: 40,
		fontSize: 16,
	},
	loginButton: {
		backgroundColor: "#3897f0",
		width: "100%",
		borderRadius: 5,
		paddingVertical: 12,
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 10,
	},
	loginButtonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
	forgotPassword: {
		color: "#3897f0",
		marginTop: 10,
	},
	separatorContainer: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		marginVertical: 20,
	},
	separatorLine: {
		flex: 1,
		height: 1,
		backgroundColor: "#ddd",
	},
	separatorText: {
		marginHorizontal: 10,
		color: "#888",
		fontSize: 14,
	},
	signupButton: {
		width: "100%",
		borderRadius: 5,
		paddingVertical: 12,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: "#ddd",
	},
	signupButtonText: {
		color: "#3897f0",
		fontSize: 16,
		fontWeight: "bold",
	},
});
