/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'my-custom-image': "url('./images/city.jpg')",
      }),
    },
  },
  plugins: [],
};
