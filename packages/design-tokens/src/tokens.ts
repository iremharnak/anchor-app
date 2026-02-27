export const colors = {
  anchor: {
    canvas: "#FDFBF7",
    canvasDark: "#1A1A1A",
    primary: "#4A5D5E",
    primaryHover: "#364546",
    surface: "#F2F0E9",
    surfaceDark: "#262626",
    highlight: "#E3EDE6",
    highlightDark: "#1F2E2E",
    textMain: "#2C2825",
    textBody: "#595552",
    textMuted: "#8C8885",
  },
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  "2xl": 32,
  "3xl": 40,
} as const;

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 16,
  "2xl": 24,
  pill: 999,
} as const;

export const fonts = {
  anchorSans: {
    web: [
      "var(--font-anchor-manrope)",
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "Noto Sans",
      "sans-serif",
    ] as const,
    native: {
      regular: "System",
      medium: "System",
      semibold: "System",
      bold: "System",
    },
  },
  anchorSerif: {
    web: [
      "var(--font-anchor-lora)",
      "ui-serif",
      "Georgia",
      "Cambria",
      "Times New Roman",
      "Times",
      "serif",
    ] as const,
    native: {
      regular: "Georgia",
      semibold: "Georgia",
    },
  },
} as const;

export const typography = {
  titleLg: {
    fontSize: 32,
    lineHeight: 36,
    letterSpacing: -0.4,
    fontWeight: "700",
  },
  titleMd: {
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: -0.25,
    fontWeight: "700",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    fontWeight: "400",
  },
  bodySm: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0,
    fontWeight: "400",
  },
  label: {
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 0.2,
    fontWeight: "600",
  },
} as const;

export const designTokens = {
  colors,
  spacing,
  radii,
  fonts,
  typography,
} as const;

export type DesignTokens = typeof designTokens;
