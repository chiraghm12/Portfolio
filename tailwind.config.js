/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', "sans-serif"], // Example for a sans-serif font
        serif: ['"Merriweather"', "serif"], // Example for a serif font
      },
    },
  },
  plugins: [],
}

