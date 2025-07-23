/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8758ff", // Your favorite purple shade
        secondary: "#ff58a6", // A complementary pink
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins font
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      screens: {
        xs: "480px", // Extra small screen
      },
    },
  },
  plugins: [],
}
