import { Pressable, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../app/navigation/types";
import { resetFlowById } from "../data";
import { resetScreenStyles as s } from "./shared";

type Props = NativeStackScreenProps<RootStackParamList, "ResetComplete">;

export function ResetCompleteScreen({ navigation, route }: Props) {
  const flow = resetFlowById[route.params.resetId];

  return (
    <View style={s.screen}>
      <View style={s.section}>
        <Text style={s.title}>Complete</Text>
        <Text style={s.body}>
          {flow ? `You finished ${flow.title}.` : "You finished this reset."}
        </Text>
        <Text style={s.muted}>
          Placeholder completion screen for the navigation shell phase.
        </Text>
      </View>

      <Pressable
        style={s.primaryButton}
        onPress={() => navigation.popToTop()}
      >
        <Text style={s.primaryButtonText}>Back to resets</Text>
      </Pressable>
    </View>
  );
}
