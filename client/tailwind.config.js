module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
