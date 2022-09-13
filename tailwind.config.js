/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/public/assets/hero.jpg)",
      },
    },
  },
  plugins: [],
};
