/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  purge: {
    enabled: true,
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  },
  theme: {
    extend: {
      colors: {
        wonkaPurple: "#684fa3",
      },
      fontSize: {
        xxs: "0.65rem",
      },
    },
  },
  plugins: [],
};
