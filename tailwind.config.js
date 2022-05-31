module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F3F3F4',
          200: '#E4E4E4',
          300: '#EEEEEE',
          400: '#A9A9AF',
          500: '#272738'
        },
        white: '#FFFFFF',
        black: '#000',
        error: 'crimson',
        blue: {
          100: '#4F3CC9'
        },
        green: {
          100: '#32CD99'
        },
        grey: {
          100: '#747474',
          200: '#F3F3F3',
          300: '#8B8B9E',
          400: '#D9D9D9'
        }
      },
      fontFamily:{
        sans: ['Poppins', 'sans-serif'],
      },
      width:{
        'on-lg': '1150px',
        'on-card': '360px',
        'on-400': "420px",
        'on-90': "98%"
      },
      screens: {
        xs: '450px',
        '2md': '800px',
        '2lg': '1200px'
      },
      maxHeight: {
        100: '550px'
      },
      boxShadow: {
        'on-shadow': '8px 8px 23px rgba(60, 60, 60, 0.15);',
        'on-shadow-sm': '4px 4px 11px rgba(60, 60, 60, 0.15);',
      },
      borderRadius: {
        'on-md': '10px'
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}
