/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "slider-1" : "url('/home/bg1.png')"
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

