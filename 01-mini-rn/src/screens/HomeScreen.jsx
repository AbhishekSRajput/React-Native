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
