import reactLogo from "@/assets/images/react-logo.png";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
	const click = () => {
		alert("Merhaba dünya!");
	};

	return (
		<View style={styles.container}>
			{/* Statik resim örneği */}
			<Image source={reactLogo} style={styles.reactLogo} />

			{/* Tailwind CSS ile stillendirilmiş metin örneği */}
			<Text className="text-red-500 font-bold text-center">Bu ekran app/index.tsx içindeki ana ekrandır.</Text>

			{/* React Native Paper butonu örneği */}
			<Button onPress={click} mode="contained" icon="mouse">
				TIKLA
			</Button>

			{/* Uzak resim örneği */}
			<Image style={styles.image} source="https://placehold.co/300x200" contentFit="cover" />

			{/* Sayfa bağlantısı örneği */}
			<Link href="/page2" className="text-blue-500 font-bold">
				Sayfa 2'ye Git
			</Link>
		</View>
	);
}

// Stil tanımları
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		gap: 30,
	},
	image: {
		width: 300,
		height: 200,
	},
	reactLogo: {
		width: 100,
		height: 100,
	},
});
