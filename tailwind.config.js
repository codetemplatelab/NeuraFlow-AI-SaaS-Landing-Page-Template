/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f7f5ff',
          100: '#efeaff',
          200: '#ddd6ff',
          300: '#bfb2ff',
          400: '#9a87ff',
          500: '#6f52ff',
          600: '#5a38f0',
          700: '#4728c2',
          800: '#361f94',
          900: '#27186b',
          950: '#14082e',
        },
        slateblue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        neon: {
          50: '#ecfff7',
          100: '#d0ffe8',
          200: '#9dffd5',
          300: '#5bffbf',
          400: '#34f7a1',
          500: '#12e487',
          600: '#00c86d',
          700: '#009a55',
          800: '#0a7a48',
          900: '#0b633e',
          950: '#043523',
        },
        midnight: '#0b0617',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 45px rgba(59, 130, 246, 0.35), 0 0 90px rgba(52, 247, 161, 0.18)',
        soft: '0 24px 60px rgba(15, 23, 42, 0.08)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.35) 0%, rgba(8,10,28,0) 55%), radial-gradient(circle at 80% 10%, rgba(52,247,161,0.25) 0%, rgba(8,10,28,0) 60%), linear-gradient(135deg, #14082e 0%, #0b0b1f 45%, #0b0617 100%)',
        'hero-light':
          'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.18) 0%, rgba(248,250,252,0) 55%), radial-gradient(circle at 80% 10%, rgba(52,247,161,0.14) 0%, rgba(248,250,252,0) 60%), linear-gradient(135deg, #f7f6ff 0%, #eef2ff 45%, #f0f9ff 100%)',
        'grid-lines':
          'linear-gradient(rgba(99,102,241,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.12) 1px, transparent 1px)',
        'cta-glow':
          'radial-gradient(circle at top left, rgba(59,130,246,0.45), rgba(20,8,46,0.15) 60%)',
        'header-glow':
          'linear-gradient(120deg, rgba(91,33,182,0.55), rgba(59,130,246,0.45), rgba(52,247,161,0.45))',
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
        pulseGlow: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.08)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 10s ease infinite',
        marquee: 'marquee 22s linear infinite',
        'pulse-glow': 'pulseGlow 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
