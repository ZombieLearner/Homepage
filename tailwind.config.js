/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",   // Important to include your source files
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#10b981",
      },
      fontFamily: {
        heading: ["Poppins", "ui-sans-serif", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // Prose class plugin
  ],
}
module.exports = {
  darkMode: 'class', // 👈 enables dark mode via a CSS class
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // your custom colors/fonts here
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

