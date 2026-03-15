/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f5f6ff',
          100: '#e8eaff',
          200: '#cdd3ff',
          300: '#a7b3ff',
          400: '#7c88ff',
          500: '#5a60ff',
          600: '#4446e8',
          700: '#3739b6',
          800: '#2f3190',
          900: '#272b70',
          950: '#14153a',
        },
        slateblue: {
          50: '#f3f7ff',
          100: '#e3edff',
          200: '#c8dbff',
          300: '#a0c1ff',
          400: '#73a0ff',
          500: '#4d7dff',
          600: '#355ef0',
          700: '#2a48c0',
          800: '#263c98',
          900: '#23367a',
          950: '#161f46',
        },
        midnight: '#0b0d17',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(92, 108, 255, 0.25)',
        soft: '0 24px 60px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 20% 20%, rgba(92,108,255,0.35) 0%, rgba(11,13,23,0) 55%), radial-gradient(circle at 80% 10%, rgba(115,160,255,0.35) 0%, rgba(11,13,23,0) 60%), linear-gradient(135deg, rgba(12,18,32,0.98) 0%, rgba(9,12,26,0.95) 45%, rgba(9,11,22,0.98) 100%)',
        'hero-light':
          'radial-gradient(circle at 20% 20%, rgba(92,108,255,0.2) 0%, rgba(248,250,252,0) 55%), radial-gradient(circle at 80% 10%, rgba(56,189,248,0.18) 0%, rgba(248,250,252,0) 60%), linear-gradient(135deg, #f8fafc 0%, #eef2ff 45%, #f1f5f9 100%)',
        'grid-lines':
          'linear-gradient(rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)',
        'cta-glow':
          'radial-gradient(circle at top left, rgba(92,108,255,0.5), rgba(12,18,32,0.15) 60%)',
        'header-glow':
          'linear-gradient(120deg, rgba(92,108,255,0.45), rgba(115,160,255,0.35), rgba(167,179,255,0.45))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 10s ease infinite',
        marquee: 'marquee 22s linear infinite',
      },
    },
  },
  plugins: [],
}
