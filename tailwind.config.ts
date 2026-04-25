import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";
import { ERROR, NEUTRAL, PRIMARY, SECONDARY, TERTIARY } from "./src/theme-colors";

function hexToRgba(hex: string, alpha: number): string {
	const r = parseInt(hex.slice(1, 3), 16);
	const g = parseInt(hex.slice(3, 5), 16);
	const b = parseInt(hex.slice(5, 7), 16);
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** CSS değişkenleri — light mod */
const lightVars: Record<string, string> = {
	"--color-primary": PRIMARY[700],
	"--color-on-primary": "#ffffff",
	"--color-primary-container": PRIMARY[100],
	"--color-on-primary-container": PRIMARY[950],
	"--color-secondary": SECONDARY[500],
	"--color-on-secondary": "#ffffff",
	"--color-secondary-container": SECONDARY[200],
	"--color-on-secondary-container": SECONDARY[900],
	"--color-tertiary": TERTIARY[700],
	"--color-on-tertiary": "#ffffff",
	"--color-tertiary-container": TERTIARY[100],
	"--color-on-tertiary-container": TERTIARY[950],
	"--color-error": ERROR[700],
	"--color-on-error": "#ffffff",
	"--color-error-container": ERROR[100],
	"--color-on-error-container": ERROR[950],
	"--color-surface": NEUTRAL[50],
	"--color-on-surface": NEUTRAL[900],
	"--color-surface-variant": NEUTRAL[200],
	"--color-on-surface-variant": NEUTRAL[600],
	"--color-outline": NEUTRAL[400],
	"--color-outline-variant": NEUTRAL[300],
	"--color-background": NEUTRAL[50],
	"--color-on-background": NEUTRAL[900],
	"--color-shadow": colors.black,
	"--color-scrim": colors.black,
	"--color-inverse-surface": NEUTRAL[800],
	"--color-inverse-on-surface": NEUTRAL[100],
	"--color-inverse-primary": PRIMARY[300],
	"--color-elevation-0": "transparent",
	"--color-elevation-1": PRIMARY[50],
	"--color-elevation-2": PRIMARY[100],
	"--color-elevation-3": PRIMARY[100],
	"--color-elevation-4": PRIMARY[100],
	"--color-elevation-5": PRIMARY[200],
	"--color-surface-disabled": hexToRgba(NEUTRAL[900], 0.12),
	"--color-on-surface-disabled": hexToRgba(NEUTRAL[900], 0.38),
	"--color-backdrop": hexToRgba(NEUTRAL[800], 0.4),
};

/** CSS değişkenleri — dark mod */
const darkVars: Record<string, string> = {
	"--color-primary": PRIMARY[300],
	"--color-on-primary": PRIMARY[900],
	"--color-primary-container": PRIMARY[800],
	"--color-on-primary-container": PRIMARY[100],
	"--color-secondary": SECONDARY[300],
	"--color-on-secondary": SECONDARY[800],
	"--color-secondary-container": SECONDARY[700],
	"--color-on-secondary-container": SECONDARY[100],
	"--color-tertiary": TERTIARY[300],
	"--color-on-tertiary": TERTIARY[900],
	"--color-tertiary-container": TERTIARY[800],
	"--color-on-tertiary-container": TERTIARY[100],
	"--color-error": ERROR[300],
	"--color-on-error": ERROR[900],
	"--color-error-container": ERROR[800],
	"--color-on-error-container": ERROR[100],
	"--color-surface": NEUTRAL[950],
	"--color-on-surface": NEUTRAL[100],
	"--color-surface-variant": NEUTRAL[700],
	"--color-on-surface-variant": NEUTRAL[300],
	"--color-outline": NEUTRAL[500],
	"--color-outline-variant": NEUTRAL[600],
	"--color-background": NEUTRAL[950],
	"--color-on-background": NEUTRAL[100],
	"--color-shadow": colors.black,
	"--color-scrim": colors.black,
	"--color-inverse-surface": NEUTRAL[100],
	"--color-inverse-on-surface": NEUTRAL[800],
	"--color-inverse-primary": PRIMARY[700],
	"--color-elevation-0": "transparent",
	"--color-elevation-1": NEUTRAL[800],
	"--color-elevation-2": NEUTRAL[700],
	"--color-elevation-3": NEUTRAL[700],
	"--color-elevation-4": NEUTRAL[700],
	"--color-elevation-5": NEUTRAL[600],
	"--color-surface-disabled": hexToRgba(NEUTRAL[100], 0.12),
	"--color-on-surface-disabled": hexToRgba(NEUTRAL[100], 0.38),
	"--color-backdrop": hexToRgba(NEUTRAL[950], 0.4),
};

export default {
	// NOTE: Update this to include the paths to all files that contain Nativewind classes.
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	darkMode: "media",
	theme: {
		extend: {
			colors: {
				// Tam skala korunur (bg-primary-50, bg-primary-100 … çalışır)
				// DEFAULT sayesinde bg-primary tek başına semantic değişkeni kullanır
				primary: { DEFAULT: "var(--color-primary)", ...PRIMARY },
				secondary: { DEFAULT: "var(--color-secondary)", ...SECONDARY },
				tertiary: { DEFAULT: "var(--color-tertiary)", ...TERTIARY },
				error: { DEFAULT: "var(--color-error)", ...ERROR },
				neutral: { DEFAULT: "var(--color-surface)", ...NEUTRAL },
				// Semantic on-* ve container renkleri
				"on-primary": "var(--color-on-primary)",
				"primary-container": "var(--color-primary-container)",
				"on-primary-container": "var(--color-on-primary-container)",
				"on-secondary": "var(--color-on-secondary)",
				"secondary-container": "var(--color-secondary-container)",
				"on-secondary-container": "var(--color-on-secondary-container)",
				"on-tertiary": "var(--color-on-tertiary)",
				"tertiary-container": "var(--color-tertiary-container)",
				"on-tertiary-container": "var(--color-on-tertiary-container)",
				"on-error": "var(--color-on-error)",
				"error-container": "var(--color-error-container)",
				"on-error-container": "var(--color-on-error-container)",
				surface: "var(--color-surface)",
				"on-surface": "var(--color-on-surface)",
				"surface-variant": "var(--color-surface-variant)",
				"on-surface-variant": "var(--color-on-surface-variant)",
				outline: "var(--color-outline)",
				"outline-variant": "var(--color-outline-variant)",
				background: "var(--color-background)",
				"on-background": "var(--color-on-background)",
				shadow: "var(--color-shadow)",
				scrim: "var(--color-scrim)",
				"inverse-surface": "var(--color-inverse-surface)",
				"inverse-on-surface": "var(--color-inverse-on-surface)",
				"inverse-primary": "var(--color-inverse-primary)",
				elevation: {
					0: "var(--color-elevation-0)",
					1: "var(--color-elevation-1)",
					2: "var(--color-elevation-2)",
					3: "var(--color-elevation-3)",
					4: "var(--color-elevation-4)",
					5: "var(--color-elevation-5)",
				},
				"surface-disabled": "var(--color-surface-disabled)",
				"on-surface-disabled": "var(--color-on-surface-disabled)",
				backdrop: "var(--color-backdrop)",
			},
		},
	},
	plugins: [
		plugin(function ({ addBase }) {
			addBase({
				":root": lightVars,
				"@media (prefers-color-scheme: dark)": { ":root": darkVars },
			});
		}),
	],
} satisfies Config;
