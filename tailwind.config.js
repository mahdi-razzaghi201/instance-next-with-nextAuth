// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}', // مخصوص App Router
      './pages/**/*.{js,ts,jsx,tsx}', // اگه pages هم داری
      './components/**/*.{js,ts,jsx,tsx}', // اگه فولدر components داری
    ],
    theme: {
      extend: {
        fontFamily: {
          vazir: ['Vazirmatn', 'sans-serif'], // اسم کلاس: font-vazir
        },
      },
    },
    plugins: [],
  }
  