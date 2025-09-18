import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

// Bileşen örneği: CharacterBox

// Props'ları için tip tanımları
type CharacterBoxProps = {
	character: {
		id: number;
		name: string;
		species: string;
		image: string;
	};
};

export default function CharacterBox({ character }: CharacterBoxProps) {
	return (
		<View style={styles.card}>
			<Image source={{ uri: character.image }} style={styles.image} />
			<View style={styles.info}>
				<Text style={styles.name}>{character.name}</Text>
				<Text style={styles.species}>{character.species}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		flexDirection: "row",
		marginBottom: 16,
		backgroundColor: "#f5f5f5",
		borderRadius: 12,
		overflow: "hidden",
		elevation: 2,
	},
	image: {
		width: 100,
		height: 100,
	},
	info: {
		padding: 10,
		justifyContent: "center",
	},
	name: {
		fontWeight: "bold",
		fontSize: 16,
	},
	species: {
		fontSize: 14,
		color: "#666",
	},
});
