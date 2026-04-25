import type { MD3Colors } from "react-native-paper/lib/typescript/types";
import colors from "tailwindcss/colors";
import { ERROR, NEUTRAL, PRIMARY, SECONDARY, TERTIARY } from "./theme-colors";

type PaperTheme = {
	colors: MD3Colors;
};

function hexToRgba(hex: string, alpha: number): string {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export const paperLightTheme: PaperTheme = {
	colors: {
		primary: PRIMARY[700],
		onPrimary: colors.white,
		primaryContainer: PRIMARY[100],
		onPrimaryContainer: PRIMARY[950],
		secondary: SECONDARY[500],
		onSecondary: colors.white,
		secondaryContainer: SECONDARY[200],
		onSecondaryContainer: SECONDARY[900],
		tertiary: TERTIARY[700],
		onTertiary: colors.white,
		tertiaryContainer: TERTIARY[100],
		onTertiaryContainer: TERTIARY[950],
		error: ERROR[700],
		onError: colors.white,
		errorContainer: ERROR[100],
		onErrorContainer: ERROR[950],
		background: NEUTRAL[50],
		onBackground: NEUTRAL[900],
		surface: NEUTRAL[50],
		onSurface: NEUTRAL[900],
		surfaceVariant: NEUTRAL[200],
		onSurfaceVariant: NEUTRAL[600],
		outline: NEUTRAL[400],
		outlineVariant: NEUTRAL[300],
		shadow: colors.black,
		scrim: colors.black,
		inverseSurface: NEUTRAL[800],
		inverseOnSurface: NEUTRAL[100],
		inversePrimary: PRIMARY[300],
		elevation: {
			level0: "transparent",
			level1: PRIMARY[50],
			level2: PRIMARY[100],
			level3: PRIMARY[100],
			level4: PRIMARY[100],
			level5: PRIMARY[200],
		},
		surfaceDisabled: hexToRgba(NEUTRAL[900], 0.12),
		onSurfaceDisabled: hexToRgba(NEUTRAL[900], 0.38),
		backdrop: hexToRgba(NEUTRAL[800], 0.4),
	},
};

export const paperDarkTheme: PaperTheme = {
	colors: {
		primary: PRIMARY[300],
		onPrimary: PRIMARY[900],
		primaryContainer: PRIMARY[800],
		onPrimaryContainer: PRIMARY[100],
		secondary: SECONDARY[300],
		onSecondary: SECONDARY[800],
		secondaryContainer: SECONDARY[700],
		onSecondaryContainer: SECONDARY[100],
		tertiary: TERTIARY[300],
		onTertiary: TERTIARY[900],
		tertiaryContainer: TERTIARY[800],
		onTertiaryContainer: TERTIARY[100],
		error: ERROR[300],
		onError: ERROR[900],
		errorContainer: ERROR[800],
		onErrorContainer: ERROR[100],
		background: NEUTRAL[950],
		onBackground: NEUTRAL[100],
		surface: NEUTRAL[950],
		onSurface: NEUTRAL[100],
		surfaceVariant: NEUTRAL[700],
		onSurfaceVariant: NEUTRAL[300],
		outline: NEUTRAL[500],
		outlineVariant: NEUTRAL[600],
		shadow: colors.black,
		scrim: colors.black,
		inverseSurface: NEUTRAL[100],
		inverseOnSurface: NEUTRAL[800],
		inversePrimary: PRIMARY[700],
		elevation: {
			level0: "transparent",
			level1: NEUTRAL[800],
			level2: NEUTRAL[700],
			level3: NEUTRAL[700],
			level4: NEUTRAL[700],
			level5: NEUTRAL[600],
		},
		surfaceDisabled: hexToRgba(NEUTRAL[100], 0.12),
		onSurfaceDisabled: hexToRgba(NEUTRAL[100], 0.38),
		backdrop: hexToRgba(NEUTRAL[950], 0.4),
	},
};
