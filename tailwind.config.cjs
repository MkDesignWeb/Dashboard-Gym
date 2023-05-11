/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#802FE9",
        "secondary": "#F5EEFF",
        "primaryBlack": "#1E1E1E",
        "secondaryBlack": "#373637"
      },
      backgroundImage: {
        "fundoAcademia": "url('./src/assets/img/fundo.png')"
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}

