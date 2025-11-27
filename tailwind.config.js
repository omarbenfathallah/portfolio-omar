/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'media', // ou 'class' pour un dark mode activable via bouton
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
