/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        blue: "#468fd1",
        gray: "#868686",
        black: "#161616",
        white: "#f3f3f3",
      },
    },
   
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
