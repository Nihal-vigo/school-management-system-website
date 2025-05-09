/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'md': '18px',
        'lg': '19px',
      },
      textColor: {
        'primary': '#112E57',//darkblue
        'secondary': '#FB601C',//lightblue
        'ternary': 'black',
      },
      backgroundColor: {
        'primary': '#112E57',//darkblue
        'secondary': '#FB601C',//lightblue
        'gradient-white': 'rgba(255, 255, 255, 0.8)',
        'gradient-black': 'rgba(0, 0, 0, 0.6)',
      },
      borderColor: {
        'primary': '#112E57', //darkblue
        'secondary' : '#FB601C',//lightblue
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden'
          },
          '100%': {
            width: '100%'
          }
        },
      },
      boxShadow: {
        'custom-shadow': '-2rem 0 3rem -2rem #9A9A9A',
      },

      animation: {
        typing: 'typing 2s steps(20) infinite alternate'
      },
      clipPath: {
        'custom-shape': 'polygon(25% 0%, 100% 0%, 100% 100%, 57% 100%)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.clip-custom-shape': {
          'clip-path': 'polygon(25% 0%, 100% 0%, 100% 100%, 57% 100%)',
          'background-color': '#FB601C'
        },
        '.text-stroke-white': {
          '-webkit-text-stroke': '2px #092d581f', // Outline thickness and color
          'text-stroke': '1px #092d581f', // For non-webkit browsers
        },
        '.bg-clip-text': {
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
        },
        '.text-stroke-DarkWhite': {
          '-webkit-text-stroke': '2px #d1d1d129', // Outline thickness and color
          'text-stroke': '1px #d1d1d129', // For non-webkit browsers
        },

      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },

  ],
};
