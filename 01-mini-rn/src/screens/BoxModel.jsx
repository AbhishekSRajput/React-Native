import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxModel = () => {
	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle1}>box model 1</Text>
			<Text style={styles.textStyle2}>box model 2</Text>
			<Text style={styles.textStyle3}>box model 3</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	viewStyle: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		flexDirection: "row",
		borderWidth: 3,
		borderColor: "black",
		height: 200,
		backgroundColor: "purple",
	},

	textStyle1: {
		backgroundColor: "pink",
		borderWidth: 1,
		borderColor: "red",
		margin: 10,
		padding: 10,
	},
	textStyle2: {
		backgroundColor: "blue",
		borderWidth: 1,
		borderColor: "red",
		margin: 10,
		padding: 10,
		alignSelf: "flex-end",
	},
	textStyle3: {
		backgroundColor: "orange",
		borderWidth: 1,
		borderColor: "red",
		margin: 10,
		padding: 10,
	},
});

export default BoxModel;
