/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        pacifico: ["Pacifico", "cursive"],
      },
      colors: {
        bgDark: "#090a0f",
        cardDark: "#12141e",
        cardBorder: "rgba(255, 255, 255, 0.08)",
        cardBorderHover: "rgba(255, 1, 79, 0.35)",
        cWhite: "#f3f4f6",
        primary: "#ff014f",
        primaryHover: "#e00045",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(255, 1, 79, 0.3)",
        glowLg: "0 0 40px -10px rgba(255, 1, 79, 0.4)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
