/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT"); 
module.exports =  withMT( {
  content: ["./index.html", "./src/**/*.{vue,html,js,ts,jsx,tsx}", "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",],
  theme: {
    extend: {}, 
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },

}
)

