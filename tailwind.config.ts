import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        denim: {
          50: "#f0f4f9",
          100: "#e1e9f2",
          200: "#c7d7e7",
          300: "#9ebad6",
          400: "#6c97c1",
          500: "#4876a8",
          600: "#355c8c",
          700: "#2c4b73",
          800: "#1b2d45",
          900: "#111d2e",
          950: "#0b1320",
        },
        amberGold: "#E6A100",
        sandBg: "#F9F7F2",
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
