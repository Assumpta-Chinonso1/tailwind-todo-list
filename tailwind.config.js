/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8758ff",
        secondary: "#ff58a6", 
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], 
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      screens: {
        xs: "480px", 
      },
    },
  },
  plugins: [],
}
