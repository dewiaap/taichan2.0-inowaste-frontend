module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#003459",
        primarydark: "#01253F",
        secondary : "#EEBF32",
        tertiary : "#58AFD7",
        tertiarydark: "#4CA0C7",
        secondarylight : "#FFE188",
        secondarylight2: "#FDCF46",
        secondarydark: "#EDB50A",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      boxShadow:{
        'right' : '3px 1px 8px 1px rgba(0, 0, 0, 0.2)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
