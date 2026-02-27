export type ResetStep = {
  id: string;
  title?: string;
  body: string;
};

export type ResetFlow = {
  id: string;
  title: string;
  description: string;
  durationLabel: string;
  steps: ResetStep[];
};
