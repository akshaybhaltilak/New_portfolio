/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: '#1E1B18',
        primary: '#D4AF37',
        accent: '#800000',
        sand: '#F5F0E6'
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'glow': '0 10px 50px -12px rgba(212, 175, 55, 0.35)'
      }
    },
  },
  plugins: [],
}

