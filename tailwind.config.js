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
      },
      backgroundImage:{
        'test' : 'radial-gradient(at 10% 50%, rgb(56,172,255) 0, transparent 80%),radial-gradient(at 30% 23%, rgb(50,52,89) 0, transparent 79%), radial-gradient(at 55% 71%, rgb(50,52,89) 0, transparent 80%), radial-gradient(at 36% 62%, rgb(50,52,89) 0, transparent 56%);'
        // 'test' : 'radial-gradient(at 27% 60%, rgb(56,172,255) 0, transparent 98%), radial-gradient(at 65% 93%, rgb(255,255,255) 0, transparent 7%), radial-gradient(at 40% 23%, rgb(255,255,255) 0, transparent 79%), radial-gradient(at 59% 73%, rgb(0,0,0) 0, transparent 11%), radial-gradient(at 55% 71%, rgb(255,255,255) 0, transparent 8%), radial-gradient(at 36% 62%, rgb(0,0,0) 0, transparent 56%);'
      }
      
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
