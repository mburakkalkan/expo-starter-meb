import CharacterBox from "@/components/CharacterBox";
import axios from "axios";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

export default function Page2() {
	// State tanımları
	const [characters, setCharacters] = useState([]);
	const [loading, setLoading] = useState(true);

	// useEffect hook ile API çağrısı
	useEffect(() => {
		axios
			.get("https://rickandmortyapi.com/api/character")
			.then((response) => {
				setCharacters(response.data.results);
			})
			.catch((error) => {
				console.error("API error:", error);
			})
			.finally(() => setLoading(false));
	}, []);

	// Yükleniyorsa ActivityIndicator göster
	if (loading) {
		return (
			<View className="flex-1 justify-center items-center">
				<ActivityIndicator size="large" color="#00bfff" />
			</View>
		);
	}

	return (
		<View className="flex-1">
			{/* Karakter listesini FlatList ile göster */}
			<FlatList
				data={characters}
				keyExtractor={(item) => item.id.toString()}
				// Her bir karakteri render eden fonksiyon
				renderItem={({ item }) => <CharacterBox character={item} />}
				contentContainerStyle={{ padding: 16 }}
			/>
		</View>
	);
}
