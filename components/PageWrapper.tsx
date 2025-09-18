import MyCustomTheme from "@/paper-theme.json";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ComponentProps, PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
import { ThemeProp } from "react-native-paper/lib/typescript/types";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// https://callstack.github.io/react-native-paper/docs/guides/theming#creating-dynamic-theme-colors

const theme: ThemeProp = {
	...MD3LightTheme,
	colors: {
		...MD3LightTheme.colors,
		...MyCustomTheme.colors,
	},
};

export interface PageWrapperProps extends PropsWithChildren {
	screenOptions: ComponentProps<typeof Stack.Screen>["options"];
}

export default function PageWrapper({ children, screenOptions }: PageWrapperProps) {
	return (
		<SafeAreaProvider>
			<SafeAreaView style={styles.container}>
				<Stack.Screen options={screenOptions} />
				<StatusBar style="auto" backgroundColor={MyCustomTheme.colors.secondaryContainer} />
				<PaperProvider theme={theme}>{children}</PaperProvider>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: MyCustomTheme.colors.surface,
		flex: 1,
	},
});
