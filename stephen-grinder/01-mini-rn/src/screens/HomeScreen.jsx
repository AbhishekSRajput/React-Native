import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
	return (
		<View style={styles.viewBackground}>
			<Text style={styles.text}>Hii </Text>
			<Button
				onPress={() => navigate("Components")}
				title="go to component demo"
			/>
			<Button
				onPress={() => navigate("ListComponent")}
				title="go to list component"
			/>
			<Button
				onPress={() => navigate("ImageScreen")}
				title="Go to Image Screen"
			/>
			<Button
				onPress={() => navigate("CounterScreen")}
				title="Go to Counter screen"
			/>
			<Button
				onPress={() => navigate("ColorScreen")}
				title="go to color screen"
			/>
			<Button
				onPress={() => navigate("SquareScreen")}
				title="go to Square screen"
			/>
			<Button onPress={() => navigate("TextDemo")} title="go to text demo" />
			<Button onPress={() => navigate("BoxModel")} title="Go to Box Model" />
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
	viewBackground: {
		backgroundColor: "#349199",
	},
});

export default HomeScreen;
