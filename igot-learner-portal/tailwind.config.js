/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts,scss}',
    '../igot-design-system/**/*.{html,ts,scss}',
  ],
  theme: {
    screens: {
      'xs':  '320px',   // 400% zoom — WCAG Reflow
      'sm':  '426px',   // 300% zoom — Standard Smartphone
      'md':  '576px',   // ~250% zoom — Mobile ceiling
      'lg':  '640px',   // 200% zoom — Phablet
      'xl':  '768px',   // ~166% zoom — Tablet
      '2xl': '853px',   // 150% zoom — Tablet Portrait
      '3xl': '992px',   // ~130% zoom — Tablet Landscape
      '4xl': '1024px',  // 125% zoom — Small Desktop
      '5xl': '1200px',  // ~107% zoom — Desktop
      '6xl': '1280px',  // 100% zoom — Base Desktop
      '7xl': '1536px',  // Ultra-wide
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'primary-light': 'var(--color-primary-light)',
        accent: 'var(--color-accent)',
        'accent-hover': 'var(--color-accent-hover)',
        'accent-light': 'var(--color-accent-light)',
        warn: 'var(--color-warn)',
        'warn-hover': 'var(--color-warn-hover)',
        'warn-light': 'var(--color-warn-light)',
        success: 'var(--color-success)',
        'success-light': 'var(--color-success-light)',
        info: 'var(--color-info)',
        'info-light': 'var(--color-info-light)',
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-tertiary': 'var(--bg-tertiary)',
        'bg-inverse': 'var(--bg-inverse)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',
        'text-inverse': 'var(--text-inverse)',
        'border-primary': 'var(--border-primary)',
        'border-secondary': 'var(--border-secondary)',
        'border-focus': 'var(--border-focus)',
      },
      fontFamily: {
        sans: ['var(--font-family)'],
        mono: ['var(--font-family-mono)'],
      },
      fontSize: {
        '3xs': ['0.5rem', { lineHeight: '0.75rem' }],
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
        'xs':  ['0.75rem', { lineHeight: '1rem' }],
        'sm':  ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg':  ['1.25rem', { lineHeight: '1.75rem' }],
        'xl':  ['1.5rem', { lineHeight: '2rem' }],
        '2xl': ['1.75rem', { lineHeight: '2.25rem' }],
        '3xl': ['2rem', { lineHeight: '2.5rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.75rem' }],
        '5xl': ['2.5rem', { lineHeight: '3rem' }],
        '6xl': ['2.75rem', { lineHeight: '3.25rem' }],
        '7xl': ['3rem', { lineHeight: '3.5rem' }],
      },
      spacing: {
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '2.5': '0.625rem',
        '3.5': '0.875rem',
        '18':  '4.5rem',
        '88':  '22rem',
        '128': '32rem',
      },
      maxWidth: {
        'xs':  '320px',
        'sm':  '426px',
        'md':  '576px',
        'lg':  '640px',
        'xl':  '768px',
        '2xl': '853px',
        '3xl': '992px',
        '4xl': '1024px',
        '5xl': '1200px',
        '6xl': '1280px',
        '7xl': '1536px',
        'container': 'var(--container-max-width)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
      },
    },
  },
  plugins: [],
};
