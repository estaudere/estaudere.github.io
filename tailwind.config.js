/** @type {import('tailwindcss').Config} */
export default {
  purge: [
    './src/**/*.svelte',
    './src/**/*.html',
    './src/**/*.js',
  ],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'sans-serif']
      },
    }
  },
  plugins: []
};