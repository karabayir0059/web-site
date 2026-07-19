import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--color-background) / <alpha-value>)",
        foreground: "hsl(var(--color-foreground) / <alpha-value>)",
        muted: "hsl(var(--color-muted) / <alpha-value>)",
        border: "hsl(var(--color-border) / <alpha-value>)",
        surface: {
          DEFAULT: "hsl(var(--color-surface) / <alpha-value>)",
          elevated: "hsl(var(--color-surface-elevated) / <alpha-value>)",
          dark: "hsl(var(--color-surface-dark) / <alpha-value>)",
          soft: "hsl(var(--color-surface-soft) / <alpha-value>)",
          deep: "hsl(var(--color-bg-deep) / <alpha-value>)",
        },
        brand: {
          DEFAULT: "hsl(var(--color-brand) / <alpha-value>)",
          hover: "hsl(var(--color-brand-hover) / <alpha-value>)",
          soft: "hsl(var(--color-brand-soft) / <alpha-value>)",
          contrast: "hsl(var(--color-brand-contrast) / <alpha-value>)",
          deep: "hsl(var(--color-brand-deep) / <alpha-value>)",
        },
        warm: {
          DEFAULT: "hsl(var(--color-warm) / <alpha-value>)",
          hover: "hsl(var(--color-warm-hover) / <alpha-value>)",
          soft: "hsl(var(--color-warm-soft) / <alpha-value>)",
        }
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        "2xl": "2rem",
        pill: "999px"
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        card: "var(--shadow-card)",
        glass: "var(--shadow-glass)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"]
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, hsl(var(--color-brand)), hsl(var(--color-brand-hover)))",
      },
      maxWidth: {
        site: "74rem"
      },
      transitionTimingFunction: {
        soft: "var(--ease-soft)",
        smooth: "var(--ease-smooth)"
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    }
  },
  plugins: [],
};

export default config;
