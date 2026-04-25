/// <reference types="nativewind/types" />

import { paperDarkTheme, paperLightTheme } from "@/paper-theme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "@/global.css";

export default function Layout() {
	const colorScheme = useColorScheme();
	const isDark = colorScheme === "dark";
	const theme = isDark ? paperDarkTheme : paperLightTheme;
	const themeColors = isDark ? paperDarkTheme.colors : paperLightTheme.colors;

	return (
		<SafeAreaProvider>
			<PaperProvider theme={theme}>
				<StatusBar style="auto" />
				<View className="flex-1 bg-background">
					<Stack
						screenOptions={{
							headerStyle: {
								backgroundColor: themeColors.background,
							},
							headerTintColor: themeColors.primary,
							contentStyle: { backgroundColor: themeColors.background },
						}}
					>
						<Stack.Screen name="index" options={{ headerShown: false }} />
						<Stack.Screen name="page2" options={{ headerShown: true, title: "Fetch Örneği" }} />
					</Stack>
				</View>
			</PaperProvider>
		</SafeAreaProvider>
	);
}
