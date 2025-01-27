/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "../node_modules/flowbite"],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: ["flowbite/plugin"],
};

