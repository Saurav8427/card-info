/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      '2xs': '0.675rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    screens: {
      '2xs': {'max': '479px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }
      
      'xs': {'min': '479px', 'max': '639px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }
      
      'sm': {'min': '639px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '767px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1023px', 'max': '1179px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1179px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}