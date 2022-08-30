/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mobile': "url('./../../../public/images/mobile/image-header.jpg')",
        'hero-desktop': "url('./../../../public/images/desktop/image-header.jpg')",
      },
    },
    fontFamily: {
      Barlow: ['Barlow', 'ui-sans-serif'],
      Fraunces: ['Fraunces', 'ui-serif'],
    },
  },
  plugins: [],
};
