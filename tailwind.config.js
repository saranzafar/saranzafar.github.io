/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7e22ce',        // Primary Purple
        secondary: '#1f2937',      // Lighter Purple
        accent: '#9CA3AF',          // White
      },
      fontFamily: {
        heading: ['Labora', 'sans-serif'],     // Default body font
        body: ['Roboto', 'sans-serif'],     // Default body font
      },
    },
  },
  plugins: [],
}
