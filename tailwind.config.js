/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        review: 'rgb(255, 145, 154)',
        approved: 'rgb(155, 229, 155)',
        reproved: '#ff8858',
      }
    },
  },
  plugins: [],
}


