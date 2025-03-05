/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Assicurati di includere tutti i file da cui Tailwind deve estrarre le classi
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
