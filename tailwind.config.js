/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          // "bg-hero":"url('/ooorganize.svg')"
      },
      fontFamily: {
        'inter':['Inter','sans-serif']
      }
    },
  },
  plugins: [require("tailwind-gradient-mask-image")],
}

