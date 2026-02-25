/**
 * Typography Design Tokens
 *
 * Sourced from igot_design_data_knowledge/Typography_Size &
 * Source_Number/Tarento.tokens.json
 *
 * Responsive typography system with named roles that map to
 * different pixel sizes per breakpoint.
 *
 * ┌──────────────────┬───────┬──────┬──────┬──────┬──────┬──────┐
 * │  Role            │Mobile │  TP  │  TL  │  SD  │  LD  │  XLD │
 * ├──────────────────┼───────┼──────┼──────┼──────┼──────┼──────┤
 * │  Fine Print      │  12   │  12  │  12  │  12  │  12  │  12  │
 * │  Label           │  12   │  12  │  12  │  12  │  12  │  12  │
 * │  Caption         │  12   │  12  │  12  │  12  │  12  │  12  │
 * │  Button 2        │  14   │  14  │  14  │  14  │  14  │  14  │
 * │  Button 1        │  16   │  16  │  16  │  16  │  16  │  16  │
 * │  Body 2          │  14   │  14  │  14  │  14  │  14  │  14  │
 * │  Body 1          │  16   │  16  │  16  │  16  │  16  │  16  │
 * │  Sub Heading 2   │  14   │  14  │  14  │  14  │  16  │  16  │
 * │  Sub Heading 1   │  16   │  16  │  16  │  16  │  18  │  18  │
 * │  Title 2         │  16   │  16  │  16  │  16  │  20  │  20  │
 * │  Title 1         │  18   │  18  │  18  │  18  │  24  │  24  │
 * │  Heading 2       │  20   │  20  │  20  │  20  │  28  │  28  │
 * │  Heading 1       │  24   │  24  │  24  │  24  │  32  │  32  │
 * │  Display 2       │  28   │  28  │  28  │  28  │  40  │  40  │
 * │  Display 1       │  30   │  30  │  30  │  30  │  48  │  48  │
 * └──────────────────┴───────┴──────┴──────┴──────┴──────┴──────┘
 */

export const TYPOGRAPHY_TOKENS = {
  fontFamily: {
    primary:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    monospace: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
  },

  /** Raw font size scale (px → rem) */
  fontSize: {
    '12': '0.75rem',   // 12px
    '14': '0.875rem',  // 14px
    '16': '1rem',      // 16px
    '18': '1.125rem',  // 18px
    '20': '1.25rem',   // 20px
    '24': '1.5rem',    // 24px
    '28': '1.75rem',   // 28px
    '30': '1.875rem',  // 30px
    '32': '2rem',      // 32px
    '40': '2.5rem',    // 40px
    '48': '3rem',      // 48px
  },

  /**
   * Font weights from Source_Number
   * 100–900 scale
   */
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },

  /**
   * Line height values from Source_Number
   * Available: 1,2,4,6,8,10,12,14,16,20,24,28,32,36,40,44,48,64,128,256
   */
  lineHeight: {
    1: '1px',
    2: '2px',
    4: '4px',
    6: '6px',
    8: '8px',
    10: '10px',
    12: '12px',
    14: '14px',
    16: '16px',
    20: '20px',
    24: '24px',
    28: '28px',
    32: '32px',
    36: '36px',
    40: '40px',
    44: '44px',
    48: '48px',
    64: '64px',
    128: '128px',
    256: '256px',
  },

  /**
   * Letter spacing values from Source_Number
   * Available: 1,2,4,6,8,10,12,14,16
   */
  letterSpacing: {
    1: '1px',
    2: '2px',
    4: '4px',
    6: '6px',
    8: '8px',
    10: '10px',
    12: '12px',
    14: '14px',
    16: '16px',
  },
} as const;

/**
 * Named typography roles with responsive sizes and weights.
 *
 * Keys: mobile (320-1339px), desktop (1440px+)
 */
export const TYPOGRAPHY_ROLES = {
  finePrint: {
    mobile: { size: 12, weight: 400 },
    desktop: { size: 12, weight: 400 },
  },
  label: {
    mobile: { size: 12, weight: 500 },
    desktop: { size: 12, weight: 500 },
  },
  caption: {
    mobile: { size: 12, weight: 600 },
    desktop: { size: 12, weight: 600 },
  },
  button2: {
    mobile: { size: 14, weight: 400 },
    desktop: { size: 14, weight: 400 },
  },
  button1: {
    mobile: { size: 16, weight: 400 },
    desktop: { size: 16, weight: 400 },
  },
  body2: {
    mobile: { size: 14, weight: 400 },
    desktop: { size: 14, weight: 400 },
  },
  body1: {
    mobile: { size: 16, weight: 400 },
    desktop: { size: 16, weight: 400 },
  },
  subHeading2: {
    mobile: { size: 14, weight: 500 },
    desktop: { size: 16, weight: 500 },
  },
  subHeading1: {
    mobile: { size: 16, weight: 500 },
    desktop: { size: 18, weight: 500 },
  },
  title2: {
    mobile: { size: 16, weight: 600 },
    desktop: { size: 20, weight: 600 },
  },
  title1: {
    mobile: { size: 18, weight: 600 },
    desktop: { size: 24, weight: 600 },
  },
  heading2: {
    mobile: { size: 20, weight: 600 },
    desktop: { size: 28, weight: 600 },
  },
  heading1: {
    mobile: { size: 24, weight: 600 },
    desktop: { size: 32, weight: 600 },
  },
  display2: {
    mobile: { size: 28, weight: 700 },
    desktop: { size: 40, weight: 700 },
  },
  display1: {
    mobile: { size: 30, weight: 700 },
    desktop: { size: 48, weight: 700 },
  },
} as const;
