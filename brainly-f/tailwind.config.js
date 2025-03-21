/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(250px, 1fr))",
      },
      fontFamily: {
        cmoon: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        geistmono: ['Geist Mono', 'monospace'],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
}

