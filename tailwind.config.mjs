/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'deep-navy': '#080c20',
        'navy': '#0d1133',
        'navy-light': '#162045',
        'navy-border': '#1e2d5c',
        'gold': '#d4a853',
        'gold-bright': '#f0c165',
        'gold-dark': '#a07830',
        'teal': '#2dd4bf',
        'teal-dark': '#0f9484',
        'parchment': '#f5e6c8',
        'parchment-dim': '#c4b69a',
        'blood-red': '#c0392b',
      },
      fontFamily: {
        display: ['Cinzel Decorative', 'Cinzel', 'Georgia', 'serif'],
        heading: ['Cinzel', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #a07830 0%, #d4a853 40%, #f0c165 60%, #d4a853 80%, #a07830 100%)',
        'navy-gradient': 'linear-gradient(180deg, #080c20 0%, #0d1133 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(22,32,69,0.8) 0%, rgba(13,17,51,0.9) 100%)',
      },
      boxShadow: {
        gold: '0 0 20px rgba(212, 168, 83, 0.3), 0 0 60px rgba(212, 168, 83, 0.1)',
        teal: '0 0 20px rgba(45, 212, 191, 0.3)',
        'card': '0 4px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(212, 168, 83, 0.15)',
        'card-hover': '0 8px 48px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(212, 168, 83, 0.3), inset 0 1px 0 rgba(212, 168, 83, 0.2)',
      },
      keyframes: {
        'compass-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'gold-shimmer': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'trail-dot': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'compass-spin': 'compass-spin 60s linear infinite',
        'gold-shimmer': 'gold-shimmer 3s ease infinite',
        'float': 'float 4s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'trail-dot': 'trail-dot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
