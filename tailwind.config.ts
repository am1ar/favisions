import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--gold)", // Gold for primary actions
          foreground: "var(--dark-blue)", // Dark blue text on gold
        },
        secondary: {
          DEFAULT: "var(--dark-blue)", // Dark blue for secondary elements
          foreground: "var(--gold)", // Gold text on dark blue
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors
        "dark-blue": {
          DEFAULT: "#0A1931", // A deep, rich dark blue
          50: "#E0E6ED",
          100: "#B3C0D4",
          200: "#879BB9",
          300: "#5A769F",
          400: "#2E5184",
          500: "#0A1931", // Base dark blue
          600: "#081428",
          700: "#06101F",
          800: "#040B16",
          900: "#02070D",
        },
        gold: {
          DEFAULT: "#FFD700", // Standard gold
          50: "#FFFBE0",
          100: "#FFF7C2",
          200: "#FFF2A3",
          300: "#FFED85",
          400: "#FFE866",
          500: "#FFD700", // Base gold
          600: "#E6C200",
          700: "#CCAC00",
          800: "#B39700",
          900: "#998200",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
