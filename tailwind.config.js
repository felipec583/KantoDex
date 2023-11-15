/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "red-world": "#E11D48",
        "cerulean-blue": "#3B4CCA",
        "golden-yellow": "#FFDE00",
        "boston-red": "#CC0000",
      },
    },
  },
  plugins: [require("daisyui")],
};
