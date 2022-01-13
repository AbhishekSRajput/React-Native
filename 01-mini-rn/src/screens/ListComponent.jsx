import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListComponent = () => {
	const fList = [
		{ name: "friend #1" },
		{ name: "friend #2" },
		{ name: "friend #3" },
		{ name: "friend #4" },
		{ name: "friend #5" },
	];
	return (
		<FlatList
			keyExtractor={(friend) => friend.name}
			data={fList}
			renderItem={({ item: { name } }) => {
				return <Text style={styles.textStyle}>{name}</Text>;
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 90,
	},
});

export default ListComponent;
