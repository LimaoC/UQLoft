/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      current: "currentColor",
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
      uqgold: "#bb9d65",
      uqpurple: "#51247a",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
