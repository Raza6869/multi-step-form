/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "purple-mid": "#633bbc",
      "purple-light": "#8257e5",
      "sucess-color": "#1D8841",
    },
  },
  plugins: [],
};
