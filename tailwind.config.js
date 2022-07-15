module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ['nunito', 'sans'],
        cinzel: ['cinzel', 'sans-serif'],
        lora: ['lora', 'sans-serif']
      },
      listStyleType: {
        square: 'square'
      },
      boxShadow: {
        'sm-white': '0 1px 2px 0 rgba(255, 255, 255, 0.05)',
        white: '0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.06)',
        'md-white': '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
        'lg-white': '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)',
        'xl-white': '0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)',
        '2xl-white': '0 25px 50px -12px rgba(255, 255, 255, 0.25)',
        '3xl-white': '0 35px 60px -15px rgba(255, 255, 255, 0.3)',
        'inner-white': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)'
      }
    },
    container: {
      center: true
    }
  },
  variants: {
    extend: {
      boxShadow: ['dark']
    }
  },
  plugins: []
}
