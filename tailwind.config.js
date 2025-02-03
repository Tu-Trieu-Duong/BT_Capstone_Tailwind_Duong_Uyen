/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "../node_modules/flowbite**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundColor: {
        colorOrangyRed: "#FE330A",
      },

      textColor: {
        colorOrangyRed: "#FE330A",
      },

      borderColor: {
        colorOrangyRed: "#FE330A",
      },
    },
  },
  plugins: [require("flowbite/plugin-windicss")],
};

