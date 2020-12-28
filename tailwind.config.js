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
      }
    },
    container: {
      center: true
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
