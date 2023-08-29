/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))'
      }
    }
  },
  plugins: []
};