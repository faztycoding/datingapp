/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cannabis-green': '#2d5016',
        'cannabis-light': '#4a7c2e',
        'cannabis-accent': '#8bc34a',
      },
      fontFamily: {
        'thai': ['Sukhumvit Set', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
