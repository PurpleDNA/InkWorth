/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "greenn": "#1D6167",
        "mgray" : "#D1DFE0",
        "dgray": "#77A0A3",
        "dgreenn" : "#174D52",
        "vdgreen" : "#113A3D",
        "creamy" : "#FDFADF",
        "fgreenn" : "#EEF8FF",
        "lyellow" : "#F5E663",
        "myellow" : "#F9F0A1",
        "dyellow" : "#F7EB82",
        "dblue" : "#0B2629"
      },
      fontFamily : {
        "inter" : ["Inter", "sans-serif"],
        "sofia" : ["Sofia Pro", "sans-serif"],
        "poppins" : ["Poppins", "sans-serif"]
      },
      width : {
        "static" : "600px"
      },
      transitionTimingFunction: {
        "maroof-expo" : "cubic-bezier(0,1,0,1)"
      }
    },
  },
  plugins: [],
}