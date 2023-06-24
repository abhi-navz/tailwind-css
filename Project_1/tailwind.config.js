/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"], // changed index.html to *.html so that it works on every .html file in directory
  theme: {
    extend: {},
  },
  plugins: [],
};
