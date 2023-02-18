/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    spacing: {
      "70": "70%",
      "95": "95%"
    }
  },
  plugins: [],
}