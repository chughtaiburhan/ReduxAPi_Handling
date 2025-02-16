/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure all JSX/TSX files are included
  theme: {
    extend: {
      colors: {
        darkBlue: "#022C43",
        cardBlue: "#053F5E",
        buttonBlue: "#00A7E1",
        buttonHover: "#0079A1",
        buttonActive: "#005F7F",
        borderBlue: "#115173",
      },
    },
  },
  plugins: [],
};
