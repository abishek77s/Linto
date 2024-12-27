/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'geist-mono': ['"Geist Mono"', 'monospace'],
        'geist': ['"Geist"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

