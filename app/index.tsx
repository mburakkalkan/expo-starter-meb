import reactLogo from "@/assets/images/react-logo.png";
import PageWrapper, { PageWrapperProps } from "@/components/PageWrapper";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

const screenOptions: PageWrapperProps["screenOptions"] = {
	title: "Home",
	headerShown: false,
};

export default function Index() {
	const click = () => {
		alert("Merhaba dünya!");
	};

	return (
		<PageWrapper screenOptions={screenOptions}>
			<View style={styles.container}>
				<Image source={reactLogo} style={styles.reactLogo} />
				<Text className="text-red-500 font-bold text-center m-5">
					Bu ekran app/index.tsx içindeki ana ekrandır.
				</Text>
				<Button title="TIKLA" onPress={click} />
				<Image style={styles.image} source="https://placehold.co/300x200" contentFit="cover" />
				<Link href="/page2" className="text-blue-500 font-bold">
					Sayfa 2'ye Git
				</Link>
			</View>
		</PageWrapper>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: 300,
		height: 200,
		margin: 30,
	},
	reactLogo: {
		width: 100,
		height: 100,
	},
});
