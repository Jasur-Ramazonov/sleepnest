/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ["Unbounded", "sans-serif"],
      },
      screens: {
        xd: "900px",
        xs: "480px",
        lg2: "1230px",
        xm: "730px",
      },
    },
  },
  plugins: [],
};
