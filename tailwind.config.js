/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          goldenYellow: '#EFC524', // Custom color
          homePurple: '#800080',
        },
      },
    },
    plugins: [],
  }