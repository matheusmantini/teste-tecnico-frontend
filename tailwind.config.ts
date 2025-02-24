import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      colors: {
        "light-gray": "#E3E6E9",
        "medium-gray": "#8C8C8C",
        "neutral-gray": "#616161",
        "dark-gray": "#4E4E4E",
        primary: "#32C0C6",
        "primary-light": "rgba(50, 192, 198, 0.7)",
      },
    },
  },
  plugins: [],
} satisfies Config;
