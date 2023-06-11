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
      },
      colors: {
        customWhite: '#FFFFFF',
        customOrange: '#D06713',
        customGray: '#1A1A1A',
        customPurple: '#070307'
      },
      container: {
        center:true,
      },
      fontSize: {
        '14': '0.5rem',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '56': '56px',
      }
 },
  plugins: [],
},
}