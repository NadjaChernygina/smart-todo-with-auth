/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
          colors: {
            light: {
              primary: '#3b82f6',
              base100: '#ffffff',
            },
            dark: {
              primary: '#60a5fa',
              base100: '#1f2937',
            },
          },
          fontFamily: {
              sans: ['Inter', 'system-ui', 'sans-serif'],
          },
          spacing: {
              18: '4.5rem',
              88: '22rem',
          },
      },
  },
}
