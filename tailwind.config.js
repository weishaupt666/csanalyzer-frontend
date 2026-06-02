/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0f1115',
        card: '#16191f',
        steam: '#66c0f4',
        faceit: '#ff5500'
      }
    },
  },
  plugins: [],
}