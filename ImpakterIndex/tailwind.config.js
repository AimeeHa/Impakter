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
      borderRadius: {
        button: '0.3rem',
      },
      fontSize: {
        banner: '56px',
        h1: '42px',
      },
    },
  },
  plugins: [],
};
