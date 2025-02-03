// // tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0D3B66",   // Rich deep blue for headings and text
        secondary: "#F4D35E", // Warm mustard yellow for highlights
        accent: "#FA7921",    // Vibrant orange for buttons and accents
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
