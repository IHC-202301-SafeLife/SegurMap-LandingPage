/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customWhite: '#FFFFFF',
        customOrange: '#D06713',
        customGray: '#1A1A1A',
        customPurple: '#0C050C'
      },
      container: {
        center:true,
      },
      fontSize: {
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '56': '56px',
      }
    },
  },
  plugins: [],
}