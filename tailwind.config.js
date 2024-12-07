/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a2b4c', // dark blue
          light: '#2c4270',
          dark: '#111827',
        },
        secondary: {
          DEFAULT: '#e8e1d5', // chalky beige
          light: '#f5f1ea',
          dark: '#d8cfc0',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
};