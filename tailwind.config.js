/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#05060a',
          900: '#070914',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(99,102,241,0.25), 0 0 22px rgba(99,102,241,0.25)',
        glowCyan:
          '0 0 0 1px rgba(34,211,238,0.25), 0 0 20px rgba(34,211,238,0.22)',
      },
      backgroundImage: {
        grid:
          'linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)',
        glow:
          'radial-gradient(600px circle at var(--x, 50%) var(--y, 20%), rgba(99,102,241,0.25), transparent 40%), radial-gradient(520px circle at var(--x2, 70%) var(--y2, 60%), rgba(34,211,238,0.18), transparent 42%)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-40%)' },
          '100%': { transform: 'translateX(140%)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

