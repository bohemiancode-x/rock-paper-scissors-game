/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Barlow Semi Condensed']
      },
      colors: {
        darktext: '#3b4363',
        scoretext: '#2a46c0',
        headeroutline: '#606e85'
      },
      backgroundImage: {
        'triangle': "url('./assets/images/bg-triangle.svg')"
      }
    },
  },
  plugins: [],
}
