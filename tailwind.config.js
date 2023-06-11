/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.{js,jsx}",
    "./src/index.html",
  ],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 10px #D06713',
    }
  },
  plugins: [],
},
}