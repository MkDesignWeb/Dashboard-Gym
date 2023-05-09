/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "primary": "#802FE9"
      },
      backgroundImage: {
        "fundoAcademia": "url('./src/assets/img/fundo.png')"
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

