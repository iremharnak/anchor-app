export type RootStackParamList = {
  Home: undefined;
  ResetIntro: { resetId: string };
  ResetRead: { resetId: string; stepIndex: number };
  ResetComplete: { resetId: string };
};
