import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterColor = ({ title, onIncrease, onDecrease }) => {
	// const colorIncrement = 15;
	// const colorCheck = (color) => {
	// 	switch (title) {
	// 		case "red":
	// 			color > 255 || color < 0 ? null : setColor(color);
	// 			return;
	// 		case "green":
	// 			color > 255 || color < 0 ? null : setColor(color);
	// 			return;
	// 		case "blue":
	// 			color > 255 || color < 0 ? null : setColor(color);
	// 			return;
	// 		default:
	// 			return;
	// 	}
	// };
	return (
		<View style={styles.viewBackground}>
			<Text>{title}</Text>
			<Button title={`increase ${title}`} onPress={() => onIncrease()} />
			<Button title={`decrease ${title}`} onPress={() => onDecrease()} />
			{/* <Text>{title}</Text>
			<Button
				title={`increase ${title}`}
				onPress={() => colorCheck(color + colorIncrement)}
			/>
			<Button
				title={`decrease ${title}`}
				onPress={() => colorCheck(color - colorIncrement)}
			/> */}
		</View>
	);
};

const styles = StyleSheet.create({
	viewBackground: {
		backgroundColor: "pink",
	},
});

export default CounterColor;
