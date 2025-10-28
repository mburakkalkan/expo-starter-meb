import reactLogo from "@/assets/images/react-logo.png";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
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

			{/* Harita bileşeni örneği */}
			<MapView
				style={styles.map}
				mapType="standard"
				provider="google"
				initialRegion={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			/>
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
	map: {
		width: 300,
		height: 200,
	},
});
