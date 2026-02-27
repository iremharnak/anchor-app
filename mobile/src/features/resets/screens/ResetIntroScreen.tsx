import { Pressable, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../app/navigation/types";
import { resetFlowById } from "../data";
import { resetScreenStyles as s } from "./shared";

type Props = NativeStackScreenProps<RootStackParamList, "ResetIntro">;

export function ResetIntroScreen({ navigation, route }: Props) {
  const flow = resetFlowById[route.params.resetId];

  if (!flow) {
    return (
      <View style={s.screen}>
        <Text style={s.title}>Reset not found</Text>
      </View>
    );
  }

  return (
    <View style={s.screen}>
      <View style={s.section}>
        <Text style={s.title}>{flow.title}</Text>
        <Text style={s.body}>{flow.description}</Text>
        <Text style={s.muted}>
          {flow.durationLabel} • {flow.steps.length} steps
        </Text>
      </View>

      <View style={s.card}>
        <Text style={s.body}>
          Placeholder intro screen for Phase 2. Next phase will add the final
          Anchor layout and stepper UI.
        </Text>
      </View>

      <Pressable
        style={s.primaryButton}
        onPress={() =>
          navigation.navigate("ResetRead", {
            resetId: flow.id,
            stepIndex: 0,
          })
        }
      >
        <Text style={s.primaryButtonText}>Begin reset</Text>
      </Pressable>
    </View>
  );
}
