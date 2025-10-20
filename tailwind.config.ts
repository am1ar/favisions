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
          DEFAULT: "#0A2E5A", // Navy
          foreground: "#F8F5F0", // Ivory
        },
        secondary: {
          DEFAULT: "#D4AF37", // Gold
          foreground: "#0A2E5A", // Navy
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
        // New luxury color scheme
        "luxury-navy": "#0A2E5A",
        "luxury-gold": "#D4AF37",
        "luxury-ivory": "#F8F5F0",
        "luxury-gold-light": "#E5C158",
        "luxury-gold-dark": "#B8941F",
        "luxury-navy-light": "#1A4A7A",
        "luxury-navy-dark": "#051A3A",
        "luxury-ivory-dark": "#E8E0D0",
        "luxury-silver": "#C0C0C0",
        "luxury-bronze": "#CD7F32",
        // Background colors
        "light-background": "#F8F5F0", // Ivory
        "dark-text": "#0A2E5A", // Navy
        "medium-text": "#1A4A7A", // Navy Light
        "light-border": "#E8E0D0", // Ivory Dark
        "accent-text": "#D4AF37", // Gold
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
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        // Removed duplicate key; using kebab-case variant above
        "slide-up": "slideUp 0.5s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
      },
      backgroundImage: {
        "luxury-gradient": "linear-gradient(135deg, #0A2E5A 0%, #1A4A7A 50%, #D4AF37 100%)",
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #E5C158 50%, #F8F5F0 100%)",
        "navy-gradient": "linear-gradient(135deg, #0A2E5A 0%, #051A3A 100%)",
        "metallic": "linear-gradient(135deg, #C0C0C0 0%, #E5E4E2 50%, #C0C0C0 100%)",
      },
    },
  },
  plugins: [],
}

export default config
