/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        undead: '#00ff95',      // bright green glow
        glitch: '#b076ff',      // neon purple
        brain: '#2c2f33',       // base card bg
        zombiebg: '#1a1a1a',    // background
      },
      fontFamily: {
        heading: ['"Press Start 2P"', 'monospace'],
        body: ['"Fira Code"', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 8px #00ff95, 0 0 12px #00ff95',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
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

