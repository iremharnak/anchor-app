import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "@anchor/design-tokens/native";
import type { RootStackParamList } from "./types";
import { HomeScreen } from "../../features/resets/screens/HomeScreen";
import { ResetCompleteScreen } from "../../features/resets/screens/ResetCompleteScreen";
import { ResetIntroScreen } from "../../features/resets/screens/ResetIntroScreen";
import { ResetReadScreen } from "../../features/resets/screens/ResetReadScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.anchor.canvas,
        },
        headerTintColor: colors.anchor.textMain,
        headerTitleStyle: {
          color: colors.anchor.textMain,
          fontWeight: "600",
        },
        contentStyle: {
          backgroundColor: colors.anchor.canvas,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Anchor" }}
      />
      <Stack.Screen
        name="ResetIntro"
        component={ResetIntroScreen}
        options={{ title: "Reset" }}
      />
      <Stack.Screen
        name="ResetRead"
        component={ResetReadScreen}
        options={{ title: "Reset" }}
      />
      <Stack.Screen
        name="ResetComplete"
        component={ResetCompleteScreen}
        options={{ title: "Complete" }}
      />
    </Stack.Navigator>
  );
}
