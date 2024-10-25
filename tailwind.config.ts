import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      main: "#b5a69b",
      hover: "#cfc6be",
      background: "#e9e4e0",
      active: "#927569",
      inactive: "#752b2b",
      text: "#342f2c",
      callToAction: "#ab9594"
    },
    extend: {
      backgroundImage: {
        "header-image1": "url('./assets/image.jpg')",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
export default config;
