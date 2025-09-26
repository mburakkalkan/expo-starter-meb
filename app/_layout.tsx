/// <reference types="nativewind/types" />

import MyCustomTheme from "@/paper-theme.json";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import { ThemeProp } from "react-native-paper/lib/typescript/types";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import "./global.css";

const theme: ThemeProp = {
	...MD3LightTheme,
	colors: {
		...MD3LightTheme.colors,
		...MyCustomTheme.colors,
	},
};

const defaultScreenOptions = {
	headerStyle: {
		backgroundColor: MyCustomTheme.colors.secondaryContainer,
	},
};

export default function Layout() {
	return (
		<SafeAreaProvider>
			<PaperProvider theme={theme}>
				<SafeAreaView style={styles.container}>
					<StatusBar style="auto" backgroundColor={MyCustomTheme.colors.secondaryContainer} />
					<Stack screenOptions={defaultScreenOptions}>
						<Stack.Screen name="index" options={{ headerShown: false }} />
						<Stack.Screen name="page2" options={{ headerShown: true, title: "Fetch Örneği" }} />
					</Stack>
				</SafeAreaView>
			</PaperProvider>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: MyCustomTheme.colors.surface,
		flex: 1,
	},
});
