import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/shadcn-ui/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Sora', 'Space Grotesk', ...fontFamily.sans],
        display: ['Sora', 'Inter', ...fontFamily.sans],
      },
      colors: {
        accent: '#e0e0e0', // Apple-like silver
        darkbg: '#0d0d0d',
        glass: 'rgba(30, 41, 59, 0.5)',
        glassLight: 'rgba(255,255,255,0.05)',
        swissline: '#23272f',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0,0,0,0.25)',
        soft: '0 2px 8px 0 rgba(0,0,0,0.10)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(120deg, #0d0d0d 0%, #23272f 100%)',
        'glass-gradient': 'linear-gradient(120deg, rgba(224,224,224,0.08) 0%, rgba(255,255,255,0.02) 100%)',
      },
      transitionProperty: {
        'parallax': 'transform, opacity',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} 