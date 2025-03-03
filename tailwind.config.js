/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './app/**/*.{js,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#121212',
        'midnight-blue': '#112240',
        'steel-grey': '#233554',
        'light-grey': '#8892B0',
        'off-white': '#CCD6F6',
        'charcoal': '#2E2E2E',
        'gunmetal': '#1F2933',
        'light-blue': '#ADD8E6',
        'light-green': 'rgba(100, 255, 218, 0.6)',
      },
    },
  },
  plugins: [],
}
