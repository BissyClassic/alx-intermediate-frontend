/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",        // look at root files (like 1-index.html)
    "./src/**/*.{html,js}"  // look inside src/ for html/js
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

