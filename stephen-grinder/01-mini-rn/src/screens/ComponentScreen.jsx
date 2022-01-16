import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
	const variable = [123, 23];
	return (
		<View>
			<Text style={styles.textStyle}>this is the screen component</Text>
			<Text>{variable}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 24,
	},
});

export default ComponentScreen;
