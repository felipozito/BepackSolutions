/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main:"#4bae54",
        lightgreen:"#8fbf79",
        secondary:"#6e4a3b",
        lightsecondary:"#b0a08d",
        background:"#e3dcb5",
    },
    }
  },
  plugins: [],
}

