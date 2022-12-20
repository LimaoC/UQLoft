/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      black: colors.black,
      gray: colors.gray,
      white: colors.white,
      uqgold: "#bb9d65",
      uqpurple: {
        DEFAULT: "#51247a",
        secondary: "#49206e",
        faded: "#a892bd",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
