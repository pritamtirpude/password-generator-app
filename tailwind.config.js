/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customWhite: "hsl(252, 11%, 91%)",
        customDarkGray: "hsl(248, 10%, 15%)",
        customGray: "hsl(251, 9%, 53%)",
        customVeryDarkGray: "hsl(248, 15%, 11%)",
        customNeonGreen: "hsl(127, 100%, 82%)",
        customRed: "hsl(0, 91%, 63%)",
        customOrange: "hsl(13, 95%, 66%)",
        customYellow: "hsl(42, 91%, 68%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
