/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        firebrick: "#d02e2a",
      },

      screens: {
        tn: "350px",
        xs: "420px",
      },
    },
  },

  variants: {},

  plugins: [require("@tailwindcss/container-queries")],
};
