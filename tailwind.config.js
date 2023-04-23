/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moblue': '#0978A6',
        'moyellow': '#FB9447'
      }
    },
  },
  plugins: [],
}

