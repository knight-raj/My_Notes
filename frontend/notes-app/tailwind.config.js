/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //color used in the project
      colors:{
        primary: '#2B85FF',
        secoundary:'#EF863E'
      },
    },
  },
  plugins: [],
}

