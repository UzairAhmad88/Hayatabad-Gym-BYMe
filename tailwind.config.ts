import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        gym: {
          black: "#080808",
          surface: "#121212",
          surface2: "#1B1B1B",
          accent: "#B7FF00",
          muted: "#A5A5A5"
        }
      }
    }
  },
  plugins: []
};

export default config;
