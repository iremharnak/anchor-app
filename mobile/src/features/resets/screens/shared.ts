import { StyleSheet } from "react-native";
import { colors, radii, spacing, typography } from "@anchor/design-tokens/native";

export const resetScreenStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.anchor.canvas,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
  },
  card: {
    backgroundColor: colors.anchor.surface,
    borderRadius: radii.xl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.anchor.highlight,
    gap: spacing.sm,
  },
  title: {
    color: colors.anchor.textMain,
    fontSize: typography.titleMd.fontSize,
    lineHeight: typography.titleMd.lineHeight,
    fontWeight: typography.titleMd.fontWeight,
  },
  body: {
    color: colors.anchor.textBody,
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight,
    fontWeight: typography.body.fontWeight,
  },
  muted: {
    color: colors.anchor.textMuted,
    fontSize: typography.bodySm.fontSize,
    lineHeight: typography.bodySm.lineHeight,
    fontWeight: typography.bodySm.fontWeight,
  },
  primaryButton: {
    backgroundColor: colors.anchor.primary,
    borderRadius: radii.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryButton: {
    backgroundColor: colors.anchor.canvas,
    borderRadius: radii.lg,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.anchor.highlight,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight,
    fontWeight: "600",
  },
  secondaryButtonText: {
    color: colors.anchor.textMain,
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight,
    fontWeight: "600",
  },
  section: {
    gap: spacing.lg,
  },
  row: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  rowGrow: {
    flexDirection: "row",
    gap: spacing.sm,
    alignItems: "center",
  },
});
