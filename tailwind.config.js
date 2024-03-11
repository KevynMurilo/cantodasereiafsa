/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Adicione suas cores personalizadas aqui
        aquamarine: {
          bg: '#15C1CD', // Cor de fundo personalizada
          text: '#15C1CD', // Cor do texto personalizada
          border: '#15C1CD'
        },
        aquamarine2: {
          bg: '#1299A6'
        }
      },
      extend: {
        fontFamily: {
          'roboto': ['Roboto', 'sans-serif']
        }
      }
      
    },
  },
  plugins: [],
}
