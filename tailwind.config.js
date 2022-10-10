/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#1D2123',
      darkGrey: '#1A1E1F',
      lightGrey: '#EFEEE040',
      secondary: '#FACD66',
      accent: '#9CBCBB',
      redish: '#E5524A',
      bluish: '#609EAF'
    },
    fontFamily: {
      Quicksand: ['Quicksand', 'sans-serif'],
    },
    screens: {
      'xs': '376px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
      '5xl': '3440px'
    },
    extend: {
      borderRadius: {
        '4xl': '3rem',
      }
    },
  },
  plugins: [],
}
