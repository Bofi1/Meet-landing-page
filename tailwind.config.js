/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      screens: {
        textTablet: "440px",
      },
      fontFamily: {
        redhat: ["'Red Hat'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
