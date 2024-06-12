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
        white: '#ffffff',
        darkPrimary: '#0ea5e9',//light-neon
        darkSecondary: '#38bdf8',//dark-neon
        darktext: '#e5e7eb',//dark-grey
      },
      fontFamily: {
        heading: ['Labora', 'sans-serif'],     // Default body font
        body: ['Roboto', 'sans-serif'],     // Default body font
      },
    },
  },
  plugins: [],
}
