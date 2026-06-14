import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
        /* Brand colors - Updated palette */
        navy: {
          50: "#f0f4f8",
          100: "#dbe4f0",
          200: "#b7cae1",
          300: "#7ba5d2",
          400: "#4480c3",
          500: "#094E80", /* Deep Corporate Navy - Primary */
          600: "#073a60",
          700: "#062d48",
          800: "#041f30",
          900: "#021218",
        },
        cyan: {
          50: "#f0f9fc",
          100: "#e1f3f8",
          200: "#c2e7f2",
          300: "#84d5ea",
          400: "#4ac2e1",
          500: "#0091BA", /* Vibrant Cyan/Teal - Primary Accent */
          600: "#007a99",
          700: "#00596f",
          800: "#003d4d",
          900: "#002430",
        },
        orange: {
          50: "#fef9f4",
          100: "#fef3e8",
          200: "#fce8d6",
          300: "#f9d5a8",
          400: "#f7941d", /* Solar Orange - CTA Button */
          500: "#d47511",
          600: "#b0600d",
          700: "#8c4a09",
          800: "#6e3805",
          900: "#592c03",
        },
        lime: {
          50: "#f7fef4",
          100: "#ecfde5",
          200: "#d9fac7",
          300: "#bef264",
          400: "#8DC63F", /* Lime Green - Success/Verification */
          500: "#65a319",
          600: "#4f8817",
          700: "#3f6914",
          800: "#2f5110",
          900: "#1d300a",
        },
        charcoal: {
          50: "#f5f5f7",
          100: "#e9e9ed",
          200: "#d3d3db",
          300: "#aeaeb8",
          400: "#8a8a98",
          500: "#2C3E50", /* Smooth Charcoal - Body Text */
          600: "#23303f",
          700: "#1a2330",
          800: "#111820",
          900: "#080d10",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-almarai)", "system-ui", "sans-serif"],
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
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "slide-down": {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.96)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out both",
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        "slide-in": "slide-in 0.3s ease-out",
        "slide-down": "slide-down 0.25s ease-out both",
        "scale-in": "scale-in 0.4s ease-out both",
        "bounce-gentle": "bounce-gentle 2s infinite",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #094E80 0%, #0091BA 50%, #F7941D 100%)",
        "navy-gradient": "linear-gradient(135deg, #094E80 0%, #0091BA 100%)",
        "orange-gradient": "linear-gradient(135deg, #F7941D 0%, #f9d5a8 100%)",
        "success-gradient": "linear-gradient(135deg, #8DC63F 0%, #bef264 100%)",
        "hero-gradient": "linear-gradient(160deg, #094E80 0%, #0091BA 40%, #F7941D 100%)",
      },
    },
  },
  plugins: [],
}

export default config
