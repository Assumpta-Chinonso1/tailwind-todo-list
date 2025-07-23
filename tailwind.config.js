/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: "#ff58a6",
      },
      fontSize: {
        mammoth: ["10rem", { lineHeight: "1" }],
        gigantic: ["6rem", { lineHeight: "1" }],
        tiny: ["0.6rem", { lineHeight: "1rem" }],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 6px rgba(0, 0, 0, 0.1)",
        "soft-lg": "0 10px 15px rgba(0, 0, 0, 0.1)",
      },
    },
  },
};
