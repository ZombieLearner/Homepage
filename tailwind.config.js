/** @type {import('tailwindcss').Config} */
module.exports = {
  // ← use class-based dark mode instead of media
  darkMode: 'class',

  // ← point Tailwind at the real places you keep JSX/TSX
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    // if you have pages/ or lib/ folders with JSX in them, add those too:
    // './src/pages/**/*.{js,ts,jsx,tsx}',
    // './src/lib/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        undead:   '#00ff95',
        glitch:   '#b076ff',
        brain:    '#2c2f33',
        zombiebg: '#1a1a1a',
      },
      fontFamily: {
        heading: ['"Press Start 2P"', 'monospace'],
        body:    ['"Fira Code"',     'monospace'],
      },
      boxShadow: {
        glow: '0 0 8px #00ff95, 0 0 12px #00ff95',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
}

// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      keyframes: {
        zombieType: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(2px)' }, // slow bob
        },
      },
      animation: {
        zombieType: 'zombieType 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

