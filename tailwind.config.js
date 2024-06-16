/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7e22ce',//purpal
        secondary: '#0f172a',//black
        accent: '#475569',//grey

        darktheme: "#0b1120",
        darkBg: "#0f172a",
        darkSubBg: "#1e293b",
        darkHeading: "#e7e8ea",
        darkText: "#94a3b8",
      },
      fontFamily: {
        heading: ['Labora', 'sans-serif'],     // Default body font
        body: ['Roboto', 'sans-serif'],     // Default body font
      },
    },
  },
  plugins: [],
}
