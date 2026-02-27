import { Pressable, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../app/navigation/types";
import { resetFlowById } from "../data";
import { resetScreenStyles as s } from "./shared";

type Props = NativeStackScreenProps<RootStackParamList, "ResetRead">;

export function ResetReadScreen({ navigation, route }: Props) {
  const flow = resetFlowById[route.params.resetId];

  if (!flow) {
    return (
      <View style={s.screen}>
        <Text style={s.title}>Reset not found</Text>
      </View>
    );
  }

  const step = flow.steps[route.params.stepIndex];
  const isLast = route.params.stepIndex >= flow.steps.length - 1;

  if (!step) {
    return (
      <View style={s.screen}>
        <Text style={s.title}>Step not found</Text>
        <Pressable
          style={s.primaryButton}
          onPress={() => navigation.replace("ResetComplete", { resetId: flow.id })}
        >
          <Text style={s.primaryButtonText}>Continue</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={s.screen}>
      <View style={s.section}>
        <Text style={s.muted}>
          Step {route.params.stepIndex + 1} of {flow.steps.length}
        </Text>
        <View style={s.card}>
          <Text style={s.title}>{step.title ?? "Reset step"}</Text>
          <Text style={s.body}>{step.body}</Text>
        </View>
      </View>

      <View style={s.row}>
        <Pressable style={[s.secondaryButton, { flex: 1 }]} onPress={() => navigation.goBack()}>
          <Text style={s.secondaryButtonText}>Back</Text>
        </Pressable>
        <Pressable
          style={[s.primaryButton, { flex: 1 }]}
          onPress={() => {
            if (isLast) {
              navigation.replace("ResetComplete", { resetId: flow.id });
              return;
            }
            navigation.push("ResetRead", {
              resetId: flow.id,
              stepIndex: route.params.stepIndex + 1,
            });
          }}
        >
          <Text style={s.primaryButtonText}>{isLast ? "Finish" : "Next"}</Text>
        </Pressable>
      </View>
    </View>
  );
}
