import { Pressable, ScrollView, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../../../app/navigation/types";
import { resetFlows } from "../data";
import { resetScreenStyles as s } from "./shared";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export function HomeScreen({ navigation }: Props) {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={s.screen}>
        <View style={s.section}>
          <Text style={s.title}>Resets</Text>
          <Text style={s.body}>
            Six local reset flows bundled in-app for the MVP.
          </Text>
        </View>

        <View style={s.section}>
          {resetFlows.map((flow) => (
            <Pressable
              key={flow.id}
              style={s.card}
              onPress={() =>
                navigation.navigate("ResetIntro", { resetId: flow.id })
              }
            >
              <Text style={s.title}>{flow.title}</Text>
              <Text style={s.body}>{flow.description}</Text>
              <Text style={s.muted}>{flow.durationLabel}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
