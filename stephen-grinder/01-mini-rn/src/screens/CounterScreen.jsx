import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
	switch (action.type) {
		case "increase":
			return { ...state, count: state.count + 1 };
		case "decrease":
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};
const CounterScreen = () => {
	// const [count, setCount] = useState(0);
	const [{ count }, dispatch] = useReducer(reducer, { count: 0 });
	return (
		<View>
			<Button title="increase" onPress={() => dispatch({ type: "increase" })} />
			<Button title="decrease" onPress={() => dispatch({ type: "decrease" })} />
			{/* <Button title="Increase" onPress={() => setCount(count + 1)} />
			<Button title="Decrease" onPress={() => setCount(count - 1)} /> */}
			<Text> Current Count:{count} </Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CounterScreen;
