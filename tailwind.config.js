/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          600: "#C336FF",
        },
        yellow: {
          600: "#F9BB07",
        },
        'custom-purple': '#986DFF',
        'custom-yellow': '#F9BB07',
        'custom-indigo': '#6333FF',
        'custom-teal': '#00FFB8',
        'custom-green': '#077950',
        'custom-purple-dark': '#4E20E0',
      },
      fontFamily: {
        roboto: ["roboto", "open-sans"],
      },
    },
  },
  plugins: [],
};
