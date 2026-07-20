/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: {
          DEFAULT: "var(--accent)",
          light: "var(--accent-light)",
        },
        secondary: "var(--secondary)",
        muted: "var(--muted)",
        border: "var(--border)",
        card: "var(--card)",
      },
      fontFamily: {
        heading: ["Fraunces", "Georgia", "serif"],
        body: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
