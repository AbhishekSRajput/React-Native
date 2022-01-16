import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
const TextDemo = () => {
	const [name, setName] = useState("");
	return (
		<View>
			<Text>Text demo</Text>
			<TextInput
				style={styles.textInput}
				autoCapitalize="none"
				autoCorrect={false}
				value={name}
				onChangeText={(newText) => setName(newText)}
			/>
			{name.length > 8 ? (
				<Text>please add less than 8 character name</Text>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({
	textInput: {
		borderColor: "black",
		borderWidth: 1,
		margin: 15,
	},
});
export default TextDemo;
