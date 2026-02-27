export type ResetStepKey = "pause" | "orient" | "center" | "close";

export type ResetStep = {
  key: ResetStepKey;
  title: string;
  body: string;
};

export type Reset = {
  id: string;
  title: string;
  whenLine: string;
  durationLabel: string;
  steps: ResetStep[];
};

