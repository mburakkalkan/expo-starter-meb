import ExpoIcon from "@/assets/images/expo-logo.svg";
import reactLogo from "@/assets/images/react-logo.png";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";

export default function Index() {
	const { colors } = useTheme();

	const click = () => {
		alert("Merhaba dünya!");
	};

	return (
		<View style={styles.container}>
			<Text className="font-serif text-center font-bold text-primary text-3xl">Expo Starter MEB</Text>

			{/* SVG örneği */}
			<ExpoIcon fill={colors.inversePrimary} width={81.5} height={75.75} />

			{/* Statik resim örneği */}
			<Image source={reactLogo} style={styles.reactLogo} />

			{/* Tailwind CSS ile stillendirilmiş metin örneği */}
			<Text className="text-error font-bold text-center">Bu ekran app/index.tsx içindeki ana ekrandır.</Text>

			{/* React Native Paper butonu örneği */}
			<Button onPress={click} mode="contained" icon="mouse">
				TIKLA
			</Button>

			{/* Uzak resim örneği */}
			<Image style={styles.image} source="https://placehold.net/3.png" contentFit="cover" />

			{/* Sayfa bağlantısı örneği */}
			<Link href="/page2" className="text-primary font-bold">
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
		backgroundColor: "transparent",
	},
	image: {
		width: 300,
		height: 200,
	},
	reactLogo: {
		width: 80,
		height: 80,
	},
});
