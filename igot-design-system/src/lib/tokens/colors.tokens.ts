/**
 * Color Design Tokens
 *
 * Sourced from igot_design_data_knowledge/Source_Colour/Tarento_Light_Tokens.
 * Comprehensive color palette supporting:
 * - Light theme (default)
 * - Dark theme
 * - High-contrast theme (WCAG AAA)
 * - Semantic colors (success, warning, error, info)
 * - Accent colors
 * - Opacity variants for Primary, Secondary, Tertiary, Black, White
 */

export const COLOR_TOKENS = {
  /** Primary brand color scale — #1B4CA1 (500 Main) */
  primary: {
    50:  '#E8EDF6',
    100: '#B8C8E2',
    200: '#96ADD4',
    300: '#6687C0',
    400: '#4970B4',
    500: '#1B4CA1', // Main
    600: '#194593',
    700: '#133672',
    800: '#0F2A59',
    900: '#0B2044',
  },
  /** Primary opacity variants (base #1B4CA1) */
  primaryOpacity: {
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

  /** Secondary brand color scale — #F3962F (500 Main) */
  secondary: {
    50:  '#FEF5EA',
    100: '#FBDEBF',
    200: '#F9CF9F',
    300: '#F7B974',
    400: '#F5AB59',
    500: '#F3962F', // Main
    600: '#DD892B',
    700: '#AD6B21',
    800: '#86531A',
    900: '#663F14',
  },
  /** Secondary opacity variants (base #F3962F) */
  secondaryOpacity: {
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

  /** Tertiary/Neutral color scale — #1B2133 (500 Main) */
  tertiary: {
    50:  '#E8E9EB',
    100: '#B8BAC0',
    200: '#9699A1',
    300: '#666A76',
    400: '#494D5C',
    500: '#1B2133', // Main
    600: '#191E2E',
    700: '#131724',
    800: '#0F121C',
    900: '#0B0E15',
  },
  /** Tertiary opacity variants (base #1B2133) */
  tertiaryOpacity: {
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

  /** Black — solid (WO_Opacity) shades */
  black: {
    50:  '#E6E6E6',
    100: '#B0B0B0',
    200: '#8A8A8A',
    300: '#545454',
    400: '#333333',
    500: '#000000',
  },
  /** Black opacity variants */
  blackOpacity: {
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

  /** White opacity variants */
  whiteOpacity: {
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

  /** Accent colors */
  accents: {
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

  /** Semantic colors */
  semantic: {
    error:   '#D13924',
    success: '#1D8923',
    warning: '#E99E38',
    info:    '#0A5396',
  },
  /** Semantic opacity variants */
  semanticOpacity: {
    error:   { 16: 'rgba(209, 57, 36, 0.16)',  24: 'rgba(209, 57, 36, 0.24)',  32: 'rgba(209, 57, 36, 0.32)',  40: 'rgba(209, 57, 36, 0.40)',  48: 'rgba(209, 57, 36, 0.48)' },
    success: { 16: 'rgba(29, 137, 35, 0.16)',   24: 'rgba(29, 137, 35, 0.24)',  32: 'rgba(29, 137, 35, 0.32)',  40: 'rgba(29, 137, 35, 0.40)',  48: 'rgba(29, 137, 35, 0.48)' },
    warning: { 16: 'rgba(233, 158, 56, 0.16)',  24: 'rgba(233, 158, 56, 0.24)', 32: 'rgba(233, 158, 56, 0.32)', 40: 'rgba(233, 158, 56, 0.40)', 48: 'rgba(233, 158, 56, 0.48)' },
    info:    { 16: 'rgba(10, 83, 150, 0.16)',   24: 'rgba(10, 83, 150, 0.24)',  32: 'rgba(10, 83, 150, 0.32)',  40: 'rgba(10, 83, 150, 0.40)',  48: 'rgba(10, 83, 150, 0.48)' },
  },

  /**
   * Theme text colors (from KB_Colour_Token)
   * Light theme uses black with opacity; dark uses white with opacity.
   */
  lightThemeText: {
    display:    'rgba(0, 0, 0, 0.96)',
    heading:    'rgba(0, 0, 0, 0.96)',
    title:      'rgba(0, 0, 0, 0.88)',
    subHeading: 'rgba(0, 0, 0, 0.80)',
    body:       'rgba(0, 0, 0, 0.80)',
    captions:   'rgba(0, 0, 0, 0.72)',
    labels:     'rgba(0, 0, 0, 0.72)',
    finePrint:  'rgba(0, 0, 0, 0.72)',
  },
  darkThemeText: {
    display:    'rgba(255, 255, 255, 0.96)',
    heading:    'rgba(255, 255, 255, 0.96)',
    title:      'rgba(255, 255, 255, 0.88)',
    subHeading: 'rgba(255, 255, 255, 0.80)',
    body:       'rgba(255, 255, 255, 0.80)',
    captions:   'rgba(255, 255, 255, 0.72)',
    labels:     'rgba(255, 255, 255, 0.72)',
    finePrint:  'rgba(255, 255, 255, 0.72)',
  },
  /** Permanent text colors (always same regardless of theme) */
  permanentBlackText: {
    display:    'rgba(0, 0, 0, 0.96)',
    heading:    'rgba(0, 0, 0, 0.96)',
    title:      'rgba(0, 0, 0, 0.96)',
    subHeading: 'rgba(0, 0, 0, 0.80)',
    body:       'rgba(0, 0, 0, 0.80)',
    captions:   'rgba(0, 0, 0, 0.72)',
    labels:     'rgba(0, 0, 0, 0.72)',
    finePrint:  'rgba(0, 0, 0, 0.72)',
  },
  permanentWhiteText: {
    display:    'rgba(255, 255, 255, 0.96)',
    heading:    'rgba(255, 255, 255, 0.96)',
    title:      'rgba(255, 255, 255, 0.96)',
    subHeading: 'rgba(255, 255, 255, 0.80)',
    body:       'rgba(255, 255, 255, 0.80)',
    captions:   'rgba(255, 255, 255, 0.72)',
    labels:     'rgba(255, 255, 255, 0.72)',
    finePrint:  'rgba(255, 255, 255, 0.72)',
  },

  highContrast: {
    background: '#000000',
    foreground: '#ffffff',
    primary: '#ffff00',
    secondary: '#00ffff',
    error: '#ff0000',
    success: '#00ff00',
    link: '#ffff00',
    border: '#ffffff',
  },
} as const;
