/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "zumba-primary": "#D9D9D9",
        "zumba-primary-hover": "#999",
        "zumba-secondary": "#38A8AF",
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans'],
        'inter': ['Inter', 'sans'],
      },
    },
  },
  plugins: [],
};

