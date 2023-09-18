/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
    content: ['./index.html','./src/**/*.{jsx,js}'],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          inter: ['ClashDisplay-Regular', ...defaultTheme.fontFamily.sans], 
        },
        colors: {
          tomato: '#E50914',
          marigold: '#ffbe0b',
        }
      },
    },
    plugins: [],
  }