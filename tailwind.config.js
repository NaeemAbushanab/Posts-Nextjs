/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      translate: {
        "120%": '120%'
      },
      animation: {
        toastIt: "toastIt cubic-bezier(0.785, 0.135, 0.15, 0.86)"
      },
      keyframes: {
        toastIt: {
          "0%,100%": {
            transform: 'translateX(120%)',
            opacity: "0",
          },
          "5%,90%": {
            transform: 'translateX(0%)',
            opacity: "1",
          },
        }
      }
    },
    container: {
      padding: "10rem",
      center: true
    }
  },
  plugins: [],
}