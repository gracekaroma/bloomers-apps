/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        fairplay: ['Playfair Display'],
        libre: ['Libre Baskerville']
      },
      colors: {
        abu: '#A6A6A6',
        pink: '#D67F7F',
        checkbox: '#CECECE'
      }
    },
  },
  plugins: [],
});

