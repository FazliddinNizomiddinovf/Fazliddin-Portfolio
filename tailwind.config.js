/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '920px',
        xl: '1050px'
      }
    },
    extend: {
      screens: {
        xm: "345px",
        xxss: "400px",
        xxs: "460px",
        xmx: "530px",
        ccm: "730px",
        xxc: "825px"
      },
    },
  },
  plugins: [],
}