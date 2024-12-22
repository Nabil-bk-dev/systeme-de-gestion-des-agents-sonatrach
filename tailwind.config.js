import twElementsReactPlugin from "tw-elements-react";
const daisyui = require("daisyui");
const flowbite = require("flowbite/plugin");
const    preline = require("preline/plugin");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
    "./node_modules/tw-elements-react/dist/js/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [twElementsReactPlugin, daisyui, flowbite,preline],
  daisyui: {
    themes: [
      {
        light: {
          // Vos thèmes clairs personnalisés ici
        },
      },
      "dark",
    ],
  },
};
