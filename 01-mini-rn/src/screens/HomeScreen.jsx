import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
	return (
		<View>
			<Text style={styles.text}>Hii </Text>
			<Button
				onPress={() => console.log("button clicked")}
				title="go to component demo"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default HomeScreen;