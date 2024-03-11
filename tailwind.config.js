/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "slider-1" : "url('/home/bg1.png')",
        "slider-2" : "url('/home/bg2.png')",
        "slider-3" : "url('/home/bg3.webp')",
        "slider-4" : "url('/home/bann31.webp')",
        "slider-5" : "url('/home/bann32.webp')",
      },
      fontFamily: {
        'sans': ['Neue','Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'didot': ['Didot','Roboto', 'Helvetica', 'Arial', 'sans-serif']
      },
      keyframes: {
        reduceWidth: {
          '0%' : { width: '100%'},
          '100%' : { width: '5%'}
        }
      },
      animation: {
        reduceWidth: 'reduceWidth 2s ease alternate infinite',
      }
    },
    
  },
  plugins: [],
}

