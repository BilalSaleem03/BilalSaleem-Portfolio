/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // This enables class-based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    
    // Add other paths if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}