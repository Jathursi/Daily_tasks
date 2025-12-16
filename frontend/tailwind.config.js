/** @type {import('tailwindcss').Config} */
 
const config = {
  content: [
    "./index.html","./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "primary": "#46ec13",
            "background-light": "#f6f8f6",
            "background-dark": "#131811",
            "surface-dark": "#1e271c",
            "surface-border": "#2c3928",
        },
        fontFamily: {
            "display": ["Manrope", "sans-serif"],
            "body": ["Noto Sans", "sans-serif"],
        },
        borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
    },
  },
  plugins: [],
};

export default config;