/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // './index.html',
    './components/**/*.{ts,tsx}',
    './layout/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        bgGreen: '#e6ede6',
        bgHighlightGreen: '#235B38',
        orangeBrown: '#ed5740',
        darkerOrange: '#d9503b',
        lightOrange: '#e68677',
        searchGreen: '#2A3621',
      },
      borderRadius: {
        button: '0.3rem',
      },
      fontSize: {
        banner: '3.5rem',
        h1: '2.6rem',
        h2: '2rem',
        small: '0.85rem',
        nav: '0.9rem',
        main: '1rem',
      },
      keyframes: {
        labelSlide: {
          '0%': { top: '50%' },
          '100%': { top: '0' },
        },
      },
    },
  },
  plugins: [],
};
