import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { colors } from "@anchor/design-tokens/native";
import { RootNavigator } from "./navigation/root-navigator";

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.anchor.canvas,
    card: colors.anchor.canvas,
    text: colors.anchor.textMain,
    border: colors.anchor.highlight,
    primary: colors.anchor.primary,
    notification: colors.anchor.primary,
  },
} as const;

export function AppRoot() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <StatusBar style="dark" />
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
