/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts,scss}',
    '../igot-design-system/**/*.{html,ts,scss}',
  ],
  theme: {
    // ── Breakpoints (from igot_design_data_knowledge/Screen_Size) ───
    // Mobile:             320 – 425px
    // Tablet Portrait:    426 – 1023px
    // Tablet Landscape:   649 – 1365px
    // Small Desktop:     1024 – 1339px
    // Large Desktop:     1440 – 1919px
    // Extra Large:       1920+
    screens: {
      'xs':     '320px',   // Mobile min
      'sm':     '426px',   // Tablet Portrait start
      'md':     '649px',   // Tablet Landscape start
      'lg':    '1024px',   // Small Desktop start
      'xl':    '1440px',   // Large Desktop start
      '2xl':   '1920px',   // Extra Large Desktop start
      // Semantic aliases
      'mobile':           '320px',
      'tablet-portrait':  '426px',
      'tablet-landscape': '649px',
      'small-desktop':   '1024px',
      'large-desktop':   '1440px',
      'extra-large':     '1920px',
    },
    extend: {
      // ── Colors (from igot_design_data_knowledge/Source_Colour) ────
      colors: {
        // Primary — #1B4CA1 (500 Main)
        primary: {
          DEFAULT: 'var(--color-primary, #1B4CA1)',
          50:  '#E8EDF6',
          100: '#B8C8E2',
          200: '#96ADD4',
          300: '#6687C0',
          400: '#4970B4',
          500: '#1B4CA1',
          600: '#194593',
          700: '#133672',
          800: '#0F2A59',
          900: '#0B2044',
          hover: 'var(--color-primary-hover, #133672)',
          light: 'var(--color-primary-light, #E8EDF6)',
        },
        // Primary with opacity
        'primary-o': {
          8:  'rgba(27, 76, 161, 0.08)',
          16: 'rgba(27, 76, 161, 0.16)',
          24: 'rgba(27, 76, 161, 0.24)',
          32: 'rgba(27, 76, 161, 0.32)',
          40: 'rgba(27, 76, 161, 0.40)',
          48: 'rgba(27, 76, 161, 0.48)',
          56: 'rgba(27, 76, 161, 0.56)',
          64: 'rgba(27, 76, 161, 0.64)',
          72: 'rgba(27, 76, 161, 0.72)',
          80: 'rgba(27, 76, 161, 0.80)',
          88: 'rgba(27, 76, 161, 0.88)',
          96: 'rgba(27, 76, 161, 0.96)',
        },

        // Secondary — #F3962F (500 Main)
        secondary: {
          DEFAULT: 'var(--color-secondary, #F3962F)',
          50:  '#FEF5EA',
          100: '#FBDEBF',
          200: '#F9CF9F',
          300: '#F7B974',
          400: '#F5AB59',
          500: '#F3962F',
          600: '#DD892B',
          700: '#AD6B21',
          800: '#86531A',
          900: '#663F14',
          hover: 'var(--color-secondary-hover, #DD892B)',
          light: 'var(--color-secondary-light, #FEF5EA)',
        },
        // Secondary with opacity
        'secondary-o': {
          8:  'rgba(243, 150, 47, 0.08)',
          16: 'rgba(243, 150, 47, 0.16)',
          24: 'rgba(243, 150, 47, 0.24)',
          32: 'rgba(243, 150, 47, 0.32)',
          40: 'rgba(243, 150, 47, 0.40)',
          48: 'rgba(243, 150, 47, 0.48)',
          56: 'rgba(243, 150, 47, 0.56)',
          64: 'rgba(243, 150, 47, 0.64)',
          72: 'rgba(243, 150, 47, 0.72)',
          80: 'rgba(243, 150, 47, 0.80)',
          88: 'rgba(243, 150, 47, 0.88)',
          96: 'rgba(243, 150, 47, 0.96)',
        },

        // Tertiary/Neutral — #1B2133 (500 Main)
        tertiary: {
          DEFAULT: 'var(--color-tertiary, #1B2133)',
          50:  '#E8E9EB',
          100: '#B8BAC0',
          200: '#9699A1',
          300: '#666A76',
          400: '#494D5C',
          500: '#1B2133',
          600: '#191E2E',
          700: '#131724',
          800: '#0F121C',
          900: '#0B0E15',
        },
        // Tertiary with opacity
        'tertiary-o': {
          8:  'rgba(27, 33, 51, 0.08)',
          16: 'rgba(27, 33, 51, 0.16)',
          24: 'rgba(27, 33, 51, 0.24)',
          32: 'rgba(27, 33, 51, 0.32)',
          40: 'rgba(27, 33, 51, 0.40)',
          48: 'rgba(27, 33, 51, 0.48)',
          56: 'rgba(27, 33, 51, 0.56)',
          64: 'rgba(27, 33, 51, 0.64)',
          72: 'rgba(27, 33, 51, 0.72)',
          80: 'rgba(27, 33, 51, 0.80)',
          88: 'rgba(27, 33, 51, 0.88)',
          96: 'rgba(27, 33, 51, 0.96)',
        },

        // Black (with opacity & without-opacity variants)
        black: {
          DEFAULT: '#000000',
          // WO_Opacity (solid tinted shades)
          50:  '#E6E6E6',
          100: '#B0B0B0',
          200: '#8A8A8A',
          300: '#545454',
          400: '#333333',
          500: '#000000',
        },
        'black-o': {
          8:  'rgba(0, 0, 0, 0.08)',
          16: 'rgba(0, 0, 0, 0.16)',
          24: 'rgba(0, 0, 0, 0.24)',
          32: 'rgba(0, 0, 0, 0.32)',
          40: 'rgba(0, 0, 0, 0.40)',
          48: 'rgba(0, 0, 0, 0.48)',
          56: 'rgba(0, 0, 0, 0.56)',
          64: 'rgba(0, 0, 0, 0.64)',
          72: 'rgba(0, 0, 0, 0.72)',
          80: 'rgba(0, 0, 0, 0.80)',
          88: 'rgba(0, 0, 0, 0.88)',
          96: 'rgba(0, 0, 0, 0.96)',
        },

        // White (with opacity)
        white: {
          DEFAULT: '#FFFFFF',
          500: '#FFFFFF',
        },
        'white-o': {
          8:  'rgba(255, 255, 255, 0.08)',
          16: 'rgba(255, 255, 255, 0.16)',
          24: 'rgba(255, 255, 255, 0.24)',
          32: 'rgba(255, 255, 255, 0.32)',
          40: 'rgba(255, 255, 255, 0.40)',
          48: 'rgba(255, 255, 255, 0.48)',
          56: 'rgba(255, 255, 255, 0.56)',
          64: 'rgba(255, 255, 255, 0.64)',
          72: 'rgba(255, 255, 255, 0.72)',
          80: 'rgba(255, 255, 255, 0.80)',
          88: 'rgba(255, 255, 255, 0.88)',
          96: 'rgba(255, 255, 255, 0.96)',
        },

        // Accent Colors (from Source_Colour/Accents)
        accent: {
          DEFAULT: 'var(--color-accent, #F3962F)',
          red:    '#FF383C',
          orange: '#FF8D28',
          yellow: '#FFCC00',
          green:  '#34C759',
          mint:   '#00C8B3',
          teal:   '#00C3D0',
          cyan:   '#00C0E8',
          blue:   '#0088FF',
          indigo: '#6155F5',
          purple: '#CB30E0',
          pink:   '#FF2D55',
          brown:  '#AC7F5E',
        },

        // Semantic: Error — #D13924
        error: {
          DEFAULT: 'var(--color-error, #D13924)',
          500: '#D13924',
          'o-16': 'rgba(209, 57, 36, 0.16)',
          'o-24': 'rgba(209, 57, 36, 0.24)',
          'o-32': 'rgba(209, 57, 36, 0.32)',
          'o-40': 'rgba(209, 57, 36, 0.40)',
          'o-48': 'rgba(209, 57, 36, 0.48)',
        },

        // Semantic: Success — #1D8923
        success: {
          DEFAULT: 'var(--color-success, #1D8923)',
          500: '#1D8923',
          'o-16': 'rgba(29, 137, 35, 0.16)',
          'o-24': 'rgba(29, 137, 35, 0.24)',
          'o-32': 'rgba(29, 137, 35, 0.32)',
          'o-40': 'rgba(29, 137, 35, 0.40)',
          'o-48': 'rgba(29, 137, 35, 0.48)',
        },

        // Semantic: Warning — #E99E38
        warning: {
          DEFAULT: 'var(--color-warning, #E99E38)',
          500: '#E99E38',
          'o-16': 'rgba(233, 158, 56, 0.16)',
          'o-24': 'rgba(233, 158, 56, 0.24)',
          'o-32': 'rgba(233, 158, 56, 0.32)',
          'o-40': 'rgba(233, 158, 56, 0.40)',
          'o-48': 'rgba(233, 158, 56, 0.48)',
        },

        // Semantic: Info — #0A5396
        info: {
          DEFAULT: 'var(--color-info, #0A5396)',
          500: '#0A5396',
          'o-16': 'rgba(10, 83, 150, 0.16)',
          'o-24': 'rgba(10, 83, 150, 0.24)',
          'o-32': 'rgba(10, 83, 150, 0.32)',
          'o-40': 'rgba(10, 83, 150, 0.40)',
          'o-48': 'rgba(10, 83, 150, 0.48)',
        },

        // Semantic text colors (from KB_Colour_Token — Light Theme)
        'text-display':   'var(--text-display,   rgba(0, 0, 0, 0.96))',
        'text-heading':   'var(--text-heading,   rgba(0, 0, 0, 0.96))',
        'text-title':     'var(--text-title,     rgba(0, 0, 0, 0.88))',
        'text-subheading':'var(--text-subheading, rgba(0, 0, 0, 0.80))',
        'text-body':      'var(--text-body,      rgba(0, 0, 0, 0.80))',
        'text-caption':   'var(--text-caption,   rgba(0, 0, 0, 0.72))',
        'text-label':     'var(--text-label,     rgba(0, 0, 0, 0.72))',
        'text-fineprint': 'var(--text-fineprint, rgba(0, 0, 0, 0.72))',

        // Background semantic
        'bg-primary':     'var(--bg-primary,   #FFFFFF)',
        'bg-secondary':   'var(--bg-secondary, #F9FAFB)',
        'bg-tertiary':    'var(--bg-tertiary,  #F3F4F6)',
        'bg-inverse':     'var(--bg-inverse,   #1B2133)',

        // Border semantic
        'border-primary':   'var(--border-primary,   #E8E9EB)',
        'border-secondary': 'var(--border-secondary, #B8BAC0)',
        'border-focus':     'var(--border-focus,     #1B4CA1)',
      },

      // ── Typography ────────────────────────────────────────
      fontFamily: {
        sans:    ['var(--font-family)'],
        mono:    ['var(--font-family-mono)'],
        primary: ["'Inter'", '-apple-system', 'BlinkMacSystemFont', "'Segoe UI'", 'sans-serif'],
        secondary: ["'Roboto'", 'sans-serif'],
      },
      fontSize: {
        // Named sizes matching design knowledge typography tokens
        'fine-print': ['0.75rem',  { lineHeight: '1rem' }],      // 12px
        'label':      ['0.75rem',  { lineHeight: '1rem' }],      // 12px
        'caption':    ['0.75rem',  { lineHeight: '1rem' }],      // 12px
        'button-2':   ['0.875rem', { lineHeight: '1.25rem' }],   // 14px
        'button-1':   ['1rem',     { lineHeight: '1.5rem' }],    // 16px
        'body-2':     ['0.875rem', { lineHeight: '1.25rem' }],   // 14px
        'body-1':     ['1rem',     { lineHeight: '1.5rem' }],    // 16px
        // Scale
        'xs':  ['0.75rem',  { lineHeight: '1rem' }],       // 12px
        'sm':  ['0.875rem', { lineHeight: '1.25rem' }],    // 14px
        'base':['1rem',     { lineHeight: '1.5rem' }],     // 16px
        'lg':  ['1.125rem', { lineHeight: '1.75rem' }],    // 18px
        'xl':  ['1.25rem',  { lineHeight: '1.75rem' }],    // 20px
        '2xl': ['1.5rem',   { lineHeight: '2rem' }],       // 24px
        '3xl': ['1.75rem',  { lineHeight: '2.25rem' }],    // 28px
        '4xl': ['1.875rem', { lineHeight: '2.5rem' }],     // 30px
        '5xl': ['2rem',     { lineHeight: '2.5rem' }],     // 32px
        '6xl': ['2.5rem',   { lineHeight: '3rem' }],       // 40px
        '7xl': ['3rem',     { lineHeight: '3.5rem' }],     // 48px
      },
      // Font weights from Source_Number/Text_Weight (100-900)
      fontWeight: {
        thin:       100,
        extralight: 200,
        light:      300,
        normal:     400,
        medium:     500,
        semibold:   600,
        bold:       700,
        extrabold:  800,
        black:      900,
      },
      lineHeight: {
        none:    '1',
        tight:   '1.25',
        snug:    '1.375',
        normal:  '1.5',
        relaxed: '1.625',
        loose:   '2',
        // Pixel line heights from knowledge
        '16': '1rem',
        '20': '1.25rem',
        '24': '1.5rem',
        '28': '1.75rem',
        '32': '2rem',
        '36': '2.25rem',
        '40': '2.5rem',
        '44': '2.75rem',
        '48': '3rem',
        '64': '4rem',
      },
      letterSpacing: {
        '1':  '1px',
        '2':  '2px',
        '4':  '4px',
        '6':  '6px',
        '8':  '8px',
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
      },

      // ── Spacing (from Auto_Layout_Size — padding/gap scale) ─
      spacing: {
        '0':    '0px',
        'px':   '1px',
        '0.5':  '0.125rem',  //  2px
        '1':    '0.25rem',   //  4px  — XS
        '1.5':  '0.375rem',  //  6px
        '2':    '0.5rem',    //  8px  — S
        '2.5':  '0.625rem',  // 10px
        '3':    '0.75rem',   // 12px  — M
        '3.5':  '0.875rem',  // 14px
        '4':    '1rem',      // 16px  — L
        '5':    '1.25rem',   // 20px  — XL
        '6':    '1.5rem',    // 24px  — XXL
        '7':    '1.75rem',   // 28px
        '8':    '2rem',      // 32px  — XXXL
        '9':    '2.25rem',   // 36px
        '10':   '2.5rem',    // 40px
        '11':   '2.75rem',   // 44px
        '12':   '3rem',      // 48px
        '14':   '3.5rem',    // 56px
        '16':   '4rem',      // 64px
        '20':   '5rem',      // 80px
        '24':   '6rem',      // 96px
        '28':   '7rem',      // 112px
        '32':   '8rem',      // 128px
        '36':   '9rem',      // 144px
        '40':   '10rem',     // 160px
        '44':   '11rem',     // 176px
        '48':   '12rem',     // 192px
        '64':   '16rem',     // 256px
      },

      // ── Max-Width (matching screen breakpoints) ───────────
      maxWidth: {
        'mobile':          '425px',
        'tablet-portrait': '1023px',
        'tablet-landscape':'1365px',
        'small-desktop':   '1339px',
        'large-desktop':   '1919px',
        'container':       'var(--container-max-width, 1440px)',
      },

      // ── Border Radius (from Radius_Size knowledge: 4, 8, 12, 16, 999) ─
      borderRadius: {
        'none':    '0',
        'sm':      '0.25rem',   // 4px
        'DEFAULT': '0.5rem',    // 8px
        'md':      '0.5rem',    // 8px
        'lg':      '0.75rem',   // 12px
        'xl':      '1rem',      // 16px
        'full':    '999px',     // from knowledge _999
      },

      // ── Border Width (from Stroke_Size knowledge: 1, 2) ──
      borderWidth: {
        DEFAULT: '1px',
        '0': '0px',
        '1': '1px',
        '2': '2px',
      },

      // ── Icon Size utilities (from Icon_Size: 16, 24, 32, 40) ─
      width: {
        'icon-sm':  '1rem',     // 16px
        'icon-md':  '1.5rem',   // 24px
        'icon-lg':  '2rem',     // 32px
        'icon-xl':  '2.5rem',   // 40px
      },
      height: {
        'icon-sm':  '1rem',
        'icon-md':  '1.5rem',
        'icon-lg':  '2rem',
        'icon-xl':  '2.5rem',
      },
      minWidth: {
        'icon-sm':  '1rem',
        'icon-md':  '1.5rem',
        'icon-lg':  '2rem',
        'icon-xl':  '2.5rem',
      },
      minHeight: {
        'icon-sm':  '1rem',
        'icon-md':  '1.5rem',
        'icon-lg':  '2rem',
        'icon-xl':  '2.5rem',
      },

      // ── Grid gaps (from Grid_System_Size knowledge) ───────
      gap: {
        'grid-mobile':  '1.25rem',  // 20px (mobile gutter)
        'grid-desktop': '1rem',     // 16px (desktop gutter)
      },

      // ── Box Shadows ───────────────────────────────────────
      boxShadow: {
        'xs':  '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'sm':  '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md':  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg':  '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl':  '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },

      // ── Z-Index ───────────────────────────────────────────
      zIndex: {
        'dropdown':       '1000',
        'sticky':         '1020',
        'fixed':          '1030',
        'modal-backdrop': '1040',
        'modal':          '1050',
        'popover':        '1060',
        'tooltip':        '1070',
        'toast':          '1080',
      },

      // ── Animations ────────────────────────────────────────
      animation: {
        'spin-slow':  'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in':    'fadeIn 0.3s ease-in',
        'fade-out':   'fadeOut 0.3s ease-out',
        'slide-up':   'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in':   'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn:    { '0%': { opacity: '0' },                                     '100%': { opacity: '1' } },
        fadeOut:   { '0%': { opacity: '1' },                                     '100%': { opacity: '0' } },
        slideUp:   { '0%': { transform: 'translateY(10px)', opacity: '0' },      '100%': { transform: 'translateY(0)', opacity: '1' } },
        slideDown: { '0%': { transform: 'translateY(-10px)', opacity: '0' },     '100%': { transform: 'translateY(0)', opacity: '1' } },
        scaleIn:   { '0%': { transform: 'scale(0.95)', opacity: '0' },           '100%': { transform: 'scale(1)', opacity: '1' } },
      },
    },
  },

  // ── Plugins ─────────────────────────────────────────────
  plugins: [
    function ({ addUtilities, addComponents }) {
      // ── Accessibility Utilities ──
      addUtilities({
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: '0',
        },
        '.sr-only-focusable:focus': {
          position: 'static',
          width: 'auto',
          height: 'auto',
          padding: 'inherit',
          margin: 'inherit',
          overflow: 'visible',
          clip: 'auto',
          whiteSpace: 'normal',
        },
        '.focus-ring': {
          '&:focus-visible': {
            outline: '2px solid var(--border-focus, #1B4CA1)',
            outlineOffset: '2px',
          },
        },
        '.skip-link': {
          position: 'absolute',
          top: '-40px',
          left: '0',
          background: 'var(--color-primary, #1B4CA1)',
          color: '#ffffff',
          padding: '0.5rem 1rem',
          textDecoration: 'none',
          zIndex: '9999',
          fontWeight: '600',
          '&:focus': { top: '0' },
        },
        // Icon size utilities (from Icon_Size knowledge)
        '.icon-sm': { width: '1rem',   height: '1rem' },     // 16px
        '.icon-md': { width: '1.5rem', height: '1.5rem' },   // 24px
        '.icon-lg': { width: '2rem',   height: '2rem' },     // 32px
        '.icon-xl': { width: '2.5rem', height: '2.5rem' },   // 40px
        // Truncation utilities
        '.truncate-2-lines': {
          display: '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.truncate-3-lines': {
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
      });

      // ── Responsive Typography Utilities ──
      // From Typography_Size knowledge:
      //   Mobile(320-425) → Large_Desktop(1440-1920)
      addUtilities({
        // Display 1: 30px mobile → 48px large-desktop
        '.text-display-1': {
          fontSize: '1.875rem',  fontWeight: '700', lineHeight: '2.5rem',
          '@screen lg':  { fontSize: '2.5rem',  lineHeight: '3rem' },
          '@screen xl':  { fontSize: '3rem',    lineHeight: '3.5rem' },
        },
        // Display 2: 28px mobile → 40px large-desktop
        '.text-display-2': {
          fontSize: '1.75rem',  fontWeight: '700', lineHeight: '2.25rem',
          '@screen lg':  { fontSize: '2rem',    lineHeight: '2.5rem' },
          '@screen xl':  { fontSize: '2.5rem',  lineHeight: '3rem' },
        },
        // Heading 1: 24px mobile → 32px large-desktop
        '.text-heading-1': {
          fontSize: '1.5rem',   fontWeight: '600', lineHeight: '2rem',
          '@screen lg':  { fontSize: '1.75rem', lineHeight: '2.25rem' },
          '@screen xl':  { fontSize: '2rem',    lineHeight: '2.5rem' },
        },
        // Heading 2: 20px mobile → 28px large-desktop
        '.text-heading-2': {
          fontSize: '1.25rem',  fontWeight: '600', lineHeight: '1.75rem',
          '@screen lg':  { fontSize: '1.5rem',  lineHeight: '2rem' },
          '@screen xl':  { fontSize: '1.75rem', lineHeight: '2.25rem' },
        },
        // Title 1: 18px mobile → 24px large-desktop
        '.text-title-1': {
          fontSize: '1.125rem', fontWeight: '600', lineHeight: '1.75rem',
          '@screen lg':  { fontSize: '1.25rem', lineHeight: '1.75rem' },
          '@screen xl':  { fontSize: '1.5rem',  lineHeight: '2rem' },
        },
        // Title 2: 16px mobile → 20px large-desktop
        '.text-title-2': {
          fontSize: '1rem',     fontWeight: '600', lineHeight: '1.5rem',
          '@screen lg':  { fontSize: '1.125rem', lineHeight: '1.75rem' },
          '@screen xl':  { fontSize: '1.25rem',  lineHeight: '1.75rem' },
        },
        // Sub-Heading 1: 16px mobile → 18px large-desktop
        '.text-subheading-1': {
          fontSize: '1rem',     fontWeight: '500', lineHeight: '1.5rem',
          '@screen xl':  { fontSize: '1.125rem', lineHeight: '1.75rem' },
        },
        // Sub-Heading 2: 14px mobile → 16px large-desktop
        '.text-subheading-2': {
          fontSize: '0.875rem', fontWeight: '500', lineHeight: '1.25rem',
          '@screen xl':  { fontSize: '1rem', lineHeight: '1.5rem' },
        },
        // Body 1: 16px (all breakpoints)
        '.text-body-1': {
          fontSize: '1rem',     fontWeight: '400', lineHeight: '1.5rem',
        },
        // Body 2: 14px (all breakpoints)
        '.text-body-2': {
          fontSize: '0.875rem', fontWeight: '400', lineHeight: '1.25rem',
        },
        // Button 1: 16px (all breakpoints)
        '.text-button-1': {
          fontSize: '1rem',     fontWeight: '400', lineHeight: '1.5rem',
        },
        // Button 2: 14px (all breakpoints)
        '.text-button-2': {
          fontSize: '0.875rem', fontWeight: '400', lineHeight: '1.25rem',
        },
        // Caption 1: 12px (all breakpoints)
        '.text-caption-1': {
          fontSize: '0.75rem',  fontWeight: '600', lineHeight: '1rem',
        },
        // Label 1: 12px (all breakpoints)
        '.text-label-1': {
          fontSize: '0.75rem',  fontWeight: '500', lineHeight: '1rem',
        },
        // Fine Print 1: 12px (all breakpoints)
        '.text-fine-print-1': {
          fontSize: '0.75rem',  fontWeight: '400', lineHeight: '1rem',
        },
      });

      // ── Grid Layout Utilities ──
      // From Grid_System_Size knowledge:
      //   Mobile: 4 cols, 20px gutter, 20px margin
      //   Tablet: 8 cols
      //   Desktop: 12 cols, 16px gutter, 16px margin
      addUtilities({
        '.grid-layout': {
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.25rem',
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          '@screen sm': { gridTemplateColumns: 'repeat(8, 1fr)' },
          '@screen lg': {
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
          },
        },
      });

      // ── Reusable Component Classes ──
      addComponents({
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          fontWeight: '500',
          fontSize: '1rem',
          lineHeight: '1.5rem',
          transition: 'all 200ms ease-in-out',
          cursor: 'pointer',
          '&:focus-visible': {
            outline: '2px solid var(--border-focus, #1B4CA1)',
            outlineOffset: '2px',
          },
          '&:disabled': { opacity: '0.6', cursor: 'not-allowed' },
        },
        '.btn-primary': {
          backgroundColor: 'var(--color-primary, #1B4CA1)',
          color: '#ffffff',
          '&:hover:not(:disabled)': { backgroundColor: 'var(--color-primary-hover, #133672)' },
        },
        '.btn-secondary': {
          backgroundColor: 'var(--color-secondary, #F3962F)',
          color: '#ffffff',
          '&:hover:not(:disabled)': { backgroundColor: 'var(--color-secondary-hover, #DD892B)' },
        },
        '.btn-outline': {
          backgroundColor: 'transparent',
          border: '2px solid var(--color-primary, #1B4CA1)',
          color: 'var(--color-primary, #1B4CA1)',
          '&:hover:not(:disabled)': { backgroundColor: 'var(--color-primary-light, #E8EDF6)' },
        },
        '.btn-ghost': {
          backgroundColor: 'transparent',
          color: 'var(--color-primary, #1B4CA1)',
          '&:hover:not(:disabled)': { backgroundColor: 'var(--color-primary-light, #E8EDF6)' },
        },
        '.btn-danger': {
          backgroundColor: 'var(--color-error, #D13924)',
          color: '#ffffff',
          '&:hover:not(:disabled)': { backgroundColor: '#B02E1D' },
        },
        '.btn-sm': { padding: '0.375rem 0.75rem', fontSize: '0.875rem', minHeight: '2rem' },
        '.btn-lg': { padding: '0.75rem 1.5rem',   fontSize: '1.125rem', minHeight: '3rem' },

        '.card': {
          backgroundColor: 'var(--bg-primary, #ffffff)',
          borderRadius: '0.75rem',
          boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)',
          padding: '1.5rem',
        },
        '.card-header': {
          marginBottom: '1rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border-primary, #E8E9EB)',
        },
        '.card-title': {
          fontSize: '1.25rem',
          fontWeight: '600',
          color: 'var(--text-heading, rgba(0,0,0,0.96))',
        },
        '.card-body': { color: 'var(--text-body, rgba(0,0,0,0.80))' },

        '.form-label': {
          display: 'block',
          fontSize: '0.875rem',
          fontWeight: '500',
          color: 'var(--text-label, rgba(0,0,0,0.72))',
          marginBottom: '0.5rem',
        },
        '.form-input': {
          width: '100%',
          padding: '0.5rem 0.75rem',
          border: '1px solid var(--border-primary, #E8E9EB)',
          borderRadius: '0.5rem',
          fontSize: '1rem',
          lineHeight: '1.5',
          color: 'var(--text-body, rgba(0,0,0,0.80))',
          backgroundColor: 'var(--bg-primary, #ffffff)',
          transition: 'border-color 200ms, box-shadow 200ms',
          '&:focus': {
            outline: 'none',
            borderColor: 'var(--border-focus, #1B4CA1)',
            boxShadow: '0 0 0 2px rgba(27, 76, 161, 0.2)',
          },
          '&:disabled': {
            backgroundColor: 'var(--bg-tertiary, #F3F4F6)',
            cursor: 'not-allowed',
          },
        },
        '.form-input-error': {
          borderColor: 'var(--color-error, #D13924)',
          '&:focus': { boxShadow: '0 0 0 2px rgba(209, 57, 36, 0.2)' },
        },
        '.form-help': {
          marginTop: '0.5rem',
          fontSize: '0.875rem',
          color: 'var(--text-caption, rgba(0,0,0,0.72))',
        },
        '.form-error': {
          marginTop: '0.5rem',
          fontSize: '0.875rem',
          color: 'var(--color-error, #D13924)',
        },

        '.nav-link': {
          display: 'inline-flex',
          alignItems: 'center',
          padding: '0.5rem 0.75rem',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
          fontWeight: '500',
          color: 'var(--text-body, rgba(0,0,0,0.80))',
          textDecoration: 'none',
          transition: 'color 200ms, background-color 200ms',
          '&:hover': {
            color: 'var(--color-primary, #1B4CA1)',
            backgroundColor: 'var(--color-primary-light, #E8EDF6)',
          },
        },
        '.nav-link-active': {
          color: 'var(--color-primary, #1B4CA1)',
          backgroundColor: 'var(--color-primary-light, #E8EDF6)',
          fontWeight: '600',
        },

        '.badge': {
          display: 'inline-flex',
          alignItems: 'center',
          padding: '0.125rem 0.625rem',
          borderRadius: '999px',
          fontSize: '0.75rem',
          fontWeight: '500',
        },
        '.badge-primary':   { backgroundColor: '#E8EDF6', color: '#1B4CA1' },
        '.badge-secondary': { backgroundColor: '#FEF5EA', color: '#F3962F' },
        '.badge-success':   { backgroundColor: 'rgba(29, 137, 35, 0.16)', color: '#1D8923' },
        '.badge-warning':   { backgroundColor: 'rgba(233, 158, 56, 0.16)', color: '#E99E38' },
        '.badge-error':     { backgroundColor: 'rgba(209, 57, 36, 0.16)', color: '#D13924' },
        '.badge-info':      { backgroundColor: 'rgba(10, 83, 150, 0.16)', color: '#0A5396' },

        '.container-custom': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1.25rem',    // 20px mobile margin
          paddingRight: '1.25rem',
          '@screen lg': { paddingLeft: '1rem', paddingRight: '1rem' },
          '@screen xl':  { maxWidth: '1440px' },
          '@screen 2xl': { maxWidth: '1920px' },
        },
      });
    },
  ],
};
