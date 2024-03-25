/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "4px 4px 0 0 #818cf8",
      },
      imageShadow: {
        custom: "4px 4px 4px 4px #818cf8",
      },
      minHeight: {
        50: "50rem",
        55: "55rem",
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
