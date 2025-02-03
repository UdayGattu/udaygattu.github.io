// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D32F2F",    /* Vibrant red */
        secondary: "#212121",  /* Dark grey/black background */
        accent: "#FFFFFF",     /* White accents */
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out",
        slideIn: "slideIn 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
