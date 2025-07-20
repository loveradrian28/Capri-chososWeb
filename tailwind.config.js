/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#1B1B1E",
        lunar: "#FFE066",
        astral: "#7B2CBF",
        cosmic: "#25274D",
        chismoso: "#FF6F91",
      },
    },
  },
  plugins: [],
}

