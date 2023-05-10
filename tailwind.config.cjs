/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#802FE9",
        "primaryBlack": "#1E1E1E"
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

