/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#000101",
        primaryPurple: "#773CBF",
      },
    },
  },
  plugins: [],
};
