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
        primary: '#64a98c',
        'primary-hover': '#51907a',
        'primary-active': '#3e7965',
        secondary: '#ff7500',
        'secondary-hover': '#e66700',
        'secondary-active': '#cc5900',
        review: 'rgb(255, 145, 154)',
        approved: 'rgb(155, 229, 155)',
        reproved: '#ff8858',
        gray: "#979ead",
        error: "#ff0000",
      },
    },
  },
  plugins: [],
};
