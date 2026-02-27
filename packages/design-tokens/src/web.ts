import { colors, fonts, radii } from "./tokens";

export const anchorTailwindColors = {
  canvas: colors.anchor.canvas,
  "canvas-dark": colors.anchor.canvasDark,
  primary: colors.anchor.primary,
  "primary-hover": colors.anchor.primaryHover,
  surface: colors.anchor.surface,
  "surface-dark": colors.anchor.surfaceDark,
  highlight: colors.anchor.highlight,
  "highlight-dark": colors.anchor.highlightDark,
  "text-main": colors.anchor.textMain,
  "text-body": colors.anchor.textBody,
  "text-muted": colors.anchor.textMuted,
} as const;

export const anchorTailwindFontFamily = {
  "anchor-sans": [...fonts.anchorSans.web],
  "anchor-serif": [...fonts.anchorSerif.web],
} as const;

export const anchorTailwindRadii = {
  xl: `${radii.xl / 16}rem`,
  "2xl": `${radii["2xl"] / 16}rem`,
} as const;
