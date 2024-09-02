/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/App.tsx',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff7500',
        'primary-hover': '#e66900',
        'primary-active': '#cc5c00',
        secondary: '#4242DF',
        'secondary-hover': '#3a3ac6',
        'secondary-active': '#3232ad',
        review: 'rgb(255, 145, 154)',
        approved: 'rgb(155, 229, 155)',
        reproved: '#ff8858',
      },
    },
  },
  plugins: [],
};
