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
        headeroutline: '#606e85',
        paper: '#4865f4',
        scissors: '#ec9e0e',
        rock: '#dc2e4e'
      },
      backgroundImage: {
        'triangle': "url('./assets/images/bg-triangle.svg')"
      },
      boxShadow: {
        '3xl': '5px 5px 0px 40px rgba(0, 0, 0, 0.1), 5px 5px 0px 70px rgba(0, 0, 0, 0.1), 5px 5px 0px 100px rgba(0, 0, 0, 0.1)',
        '4xl': '5px 5px 0px 40px rgba(0, 0, 0, 0.1), 5px 5px 0px 70px rgba(0, 0, 0, 0.1), 5px 5px 0px 100px rgba(0, 0, 0, 0.1), 5px 5px 0px 148px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
}
