/// <reference types="nativewind/types" />

import { Stack } from "expo-router";
import MyCustomTheme from "@/paper-theme.json";

import "./global.css";

// https://reactnavigation.org/docs/native-stack-navigator/#options

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: MyCustomTheme.colors.secondaryContainer,
        },
        headerTintColor: MyCustomTheme.colors.onSecondaryContainer,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "normal",
        },
      }}
    />
  );
}
