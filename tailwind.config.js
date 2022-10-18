/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'cloudy': "url('/assets/cloudy.jpg')"
      },
    },
  },
  plugins: [],
}
