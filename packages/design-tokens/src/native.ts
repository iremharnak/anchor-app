import { colors, designTokens, fonts, radii, spacing, typography } from "./tokens";

export { colors, designTokens, fonts, radii, spacing, typography };

export const nativeTheme = {
  colors: {
    background: colors.anchor.canvas,
    surface: colors.anchor.surface,
    primary: colors.anchor.primary,
    primaryPressed: colors.anchor.primaryHover,
    text: colors.anchor.textMain,
    textBody: colors.anchor.textBody,
    textMuted: colors.anchor.textMuted,
    border: colors.anchor.highlight,
  },
  spacing,
  radii,
  typography,
  fonts: {
    sans: fonts.anchorSans.native,
    serif: fonts.anchorSerif.native,
  },
} as const;
