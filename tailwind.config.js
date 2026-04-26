/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Inter', 'sans-serif'],
      },
      colors: {
        cosmic: {
          void: '#000000',
          abyss: '#0a0a0a',
          nebula: '#1a1a1a',
          storm: '#262626',
        },
        neon: {
          violet: '#ffffff',
          cyan: '#a1a1aa',
          magenta: '#71717a',
        },
        ink: {
          950: '#05060a',
          900: '#070914',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.25), 0 0 22px rgba(255,255,255,0.25)',
        glowCyan:
          '0 0 0 1px rgba(161,161,172,0.25), 0 0 20px rgba(161,161,172,0.22)',
        'glow-violet':
          '0 0 30px rgba(255,255,255,0.35), 0 0 60px rgba(255,255,255,0.15)',
        'glow-cyan':
          '0 0 25px rgba(161,161,172,0.4), 0 0 50px rgba(161,161,172,0.15)',
        'glow-magenta': '0 0 20px rgba(113,113,122,0.3)',
        glass:
          'inset 0 0 0 1px rgba(255,255,255,0.08), 0 4px 30px rgba(0,0,0,0.3)',
      },
      backgroundImage: {
        grid:
          'linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)',
        glow:
          'radial-gradient(600px circle at var(--x, 50%) var(--y, 20%), rgba(255,255,255,0.15), transparent 40%), radial-gradient(520px circle at var(--x2, 70%) var(--y2, 60%), rgba(161,161,172,0.1), transparent 42%)',
        'cosmic-gradient':
          'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.1), transparent 50%)',
        'glass-gradient':
          'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
        'aurora-gradient':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,255,255,0.2), transparent), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(161,161,172,0.1), transparent), radial-gradient(ellipse 50% 30% at 0% 50%, rgba(113,113,122,0.1), transparent)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-40%)' },
          '100%': { transform: 'translateX(140%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', filter: 'brightness(1)' },
          '50%': { opacity: '1', filter: 'brightness(1.2)' },
        },
        'border-beam': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        aurora: {
          '0%, 100%': {
            backgroundPosition: '50% 50%, 50% 50%',
            transform: 'rotate(0deg)',
          },
          '50%': {
            backgroundPosition: '350% 50%, 350% 50%',
            transform: 'rotate(3deg)',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'border-beam': 'border-beam 3s linear infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        aurora: 'aurora 20s ease-in-out infinite',
        bounce: 'bounce 1s infinite',
      },
    },
  },
  plugins: [],
}