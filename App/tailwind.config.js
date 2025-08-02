/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // هذا لتفعيل الوضع الليلي عبر class "dark"
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FDC435",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
