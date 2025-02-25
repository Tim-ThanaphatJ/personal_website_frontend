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
      },
    },
  },
  plugins: [],
}

// Can you make this to have a same theme when it light and when it dark use dark-blue keyword only
