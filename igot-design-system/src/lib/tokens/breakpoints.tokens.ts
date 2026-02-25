/**
 * Breakpoint Design Tokens
 *
 * Sourced from igot_design_data_knowledge/Screen_Size & Source_Number/Screen_Width.
 *
 * ┌──────────────────────────┬───────────────┬───────────────┐
 * │  Breakpoint              │  Min Width    │  Max Width    │
 * ├──────────────────────────┼───────────────┼───────────────┤
 * │  Mobile                  │   320px       │   425px       │
 * │  Tablet Portrait         │   426px       │  1023px       │
 * │  Tablet Landscape        │   649px       │  1365px       │
 * │  Small Desktop           │  1024px       │  1339px       │
 * │  Large Desktop           │  1440px       │  1919px       │
 * │  Extra Large Desktop     │  1920px       │  beyond       │
 * └──────────────────────────┴───────────────┴───────────────┘
 */

export const BREAKPOINT_TOKENS = {
  mobile: {
    min: 320,
    max: 425,
    label: 'Mobile',
    tailwindKey: 'xs',
  },
  tabletPortrait: {
    min: 426,
    max: 1023,
    label: 'Tablet Portrait',
    tailwindKey: 'sm',
  },
  tabletLandscape: {
    min: 649,
    max: 1365,
    label: 'Tablet Landscape',
    tailwindKey: 'md',
  },
  smallDesktop: {
    min: 1024,
    max: 1339,
    label: 'Small Desktop',
    tailwindKey: 'lg',
  },
  largeDesktop: {
    min: 1440,
    max: 1919,
    label: 'Large Desktop',
    tailwindKey: 'xl',
  },
  extraLargeDesktop: {
    min: 1920,
    max: Infinity,
    label: 'Extra Large Desktop',
    tailwindKey: '2xl',
  },
} as const;

/** Screen width values from Source_Number/Screen_Width */
export const SCREEN_WIDTHS = {
  M_320: 320,
  M_425: 425,
  TP_426: 426,
  TP_1023: 1023,
  TL_649: 649,
  TL_1365: 1365,
  SD_1024: 1024,
  SD_1339: 1339,
  LD_1440: 1440,
  LD_1919: 1919,
  XLD_1920: 1920,
  XLD_99999: 99999,
} as const;

/** Grid system configuration per breakpoint */
export const GRID_SYSTEM = {
  mobile: {
    columns: 4,
    gutter: 20,   // px
    margin: 20,   // px
  },
  tabletPortrait: {
    columns: 8,
    gutter: 16,
    margin: 16,
  },
  tabletLandscape: {
    columns: 8,
    gutter: 16,
    margin: 16,
  },
  smallDesktop: {
    columns: 12,
    gutter: 16,
    margin: 16,
  },
  largeDesktop: {
    columns: 12,
    gutter: 16,
    margin: 16,
  },
  extraLargeDesktop: {
    columns: 12,
    gutter: 16,
    margin: 16,
  },
} as const;

/** Navbar width variants from Source_Number */
export const NAVBAR_WIDTHS = {
  opened: {
    mobile: 320,
    tabletPortrait: 426,
    smallDesktop: 1024,
    largeDesktop: 1440,
    extraLargeDesktop: 1920,
    tabletLandscape: 649,
  },
  closed: {
    mobile: 320,
    tabletPortrait: 426,
    smallDesktop: 1024,
    largeDesktop: 1440,
    extraLargeDesktop: 1920,
    tabletLandscape: 649,
  },
} as const;
