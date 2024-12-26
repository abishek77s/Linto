/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridRow: {
        'span-6': 'span 6 / span 6',
      },
    },
  },
  plugins: [],
}

