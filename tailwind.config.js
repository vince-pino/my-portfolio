/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        custom: {
          'linkedin-blue': '#0077B5',
          'facebook-blue': '#1877F2',
        }
      }
    },
  },
  plugins: [],
}

