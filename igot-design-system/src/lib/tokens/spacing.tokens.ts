/**
 * Spacing Design Tokens
 *
 * Based on a 4px grid system.
 * Numeric scale preserved for Tailwind compatibility;
 * named tokens from igot_design_data_knowledge/Auto_Layout_Size.
 */

export const SPACING_TOKENS = {
  0: '0',
  0.5: '0.125rem', //   2px
  1: '0.25rem', //   4px
  1.5: '0.375rem', //   6px
  2: '0.5rem', //   8px
  2.5: '0.625rem', //  10px
  3: '0.75rem', //  12px
  3.5: '0.875rem', //  14px
  4: '1rem', //  16px
  5: '1.25rem', //  20px
  6: '1.5rem', //  24px
  7: '1.75rem', //  28px
  8: '2rem', //  32px
  9: '2.25rem', //  36px
  10: '2.5rem', //  40px
  11: '2.75rem', //  44px
  12: '3rem', //  48px
  14: '3.5rem', //  56px
  16: '4rem', //  64px
  20: '5rem', //  80px
  24: '6rem', //  96px
  28: '7rem', // 112px
  32: '8rem', // 128px
  36: '9rem', // 144px
  40: '10rem', // 160px
} as const;

/**
 * Named layout spacing tokens from Auto_Layout_Size.
 * Consistent across all breakpoints.
 *
 * Used for padding, gap, and margin in auto-layout containers.
 */
export const LAYOUT_SPACING = {
  none: 0,    //  0px — No_Padding / No_Gap
  xs: 4,      //  4px — XS_Padding / XS_Gap
  s: 8,       //  8px — S_Padding / S_Gap
  m: 12,      // 12px — M_Padding / M_Gap
  l: 16,      // 16px — L_Padding / L_Gap
  xl: 20,     // 20px — XL_Padding / XL_Gap
  xxl: 24,    // 24px — XXL_Padding / XXL_Gap
  xxxl: 32,   // 32px — XXXL_Padding / XXXL_Gap
} as const;

/**
 * Border Radius tokens from Radius_Size
 */
export const RADIUS_TOKENS = {
  sm: 4,      //  4px
  md: 8,      //  8px
  lg: 12,     // 12px
  xl: 16,     // 16px
  full: 999,  // pill / circle
} as const;

/**
 * Stroke / Border Width tokens from Stroke_Size
 */
export const STROKE_TOKENS = {
  thin: 1,    //  1px
  thick: 2,   //  2px
} as const;

/**
 * Icon Size tokens from Icon_Size
 */
export const ICON_SIZE_TOKENS = {
  xs: 16,     // 16px
  sm: 24,     // 24px
  md: 32,     // 32px
  lg: 40,     // 40px
} as const;
