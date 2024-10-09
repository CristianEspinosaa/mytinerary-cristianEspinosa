/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'pin': '300px',
      },
      backdropBlur: {
        'none': '0',
        'sm': '4px',
        'DEFAULT': '10px',
        'md': '20px',
        'lg': '30px',
        'xl': '40px',
        '2xl': '50px',
    },
    boxShadow: {
      'text-light': '0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.5)',
      'text-glow': '0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5)',
},
  },
  plugins: [],
  }}
