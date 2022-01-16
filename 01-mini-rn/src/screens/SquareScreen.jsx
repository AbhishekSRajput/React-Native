import React, { useReducer, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
//custom component
import CounterColor from "../components/CounterColor";

const incrementAmount = 15;
const reducer = (state, action) => {
	switch (action.type) {
		case "change__red":
			return state.red + action.payload > 255 || state.red + action.payload < 0
				? state
				: { ...state, red: state.red + action.payload };
		case "change__green":
			return state.green + action.payload > 255 ||
				state.green + action.payload < 0
				? state
				: { ...state, green: state.green + action.payload };
		case "change__blue":
			return state.blue + action.payload > 255 ||
				state.blue + action.payload < 0
				? state
				: { ...state, blue: state.blue + action.payload };
		default:
			return state;
	}
};

const SquareScreen = () => {
	// const [red, setRed] = useState(0);
	// const [green, setGreen] = useState(0);
	// const [blue, setBlue] = useState(0);
	// console.log(red, green, blue);

	const [{ red, green, blue }, dispatch] = useReducer(reducer, {
		red: 0,
		green: 0,
		blue: 0,
	});
	console.log(red, green, blue);
	return (
		<View>
			<CounterColor
				onIncrease={() =>
					dispatch({ type: "change__red", payload: incrementAmount })
				}
				onDecrease={() =>
					dispatch({ type: "change__red", payload: -1 * incrementAmount })
				}
				title="red"
			/>
			<CounterColor
				onIncrease={() =>
					dispatch({ type: "change__green", payload: incrementAmount })
				}
				onDecrease={() =>
					dispatch({ type: "change__green", payload: -1 * incrementAmount })
				}
				title="green"
			/>
			<CounterColor
				onIncrease={() =>
					dispatch({ type: "change__blue", payload: incrementAmount })
				}
				onDecrease={() =>
					dispatch({ type: "change__blue", payload: -1 * incrementAmount })
				}
				title="blue"
			/>
			{/* <CounterColor title="red" setColor={setRed} color={red} />
			<CounterColor title="green" setColor={setGreen} color={green} />
			<CounterColor title="blue" setColor={setBlue} color={blue} /> */}
			<View
				style={{
					width: 200,
					height: 200,
					backgroundColor: `rgb(${red},${green},${blue})`,
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SquareScreen;
