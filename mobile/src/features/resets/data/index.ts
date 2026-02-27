import type { ResetFlow } from "../types";

function makeReset(id: string, title: string, description: string): ResetFlow {
  return {
    id,
    title,
    description,
    durationLabel: "3-5 min",
    steps: [
      {
        id: `${id}-step-1`,
        title: "Pause",
        body: "Settle in and let your attention land on this moment.",
      },
      {
        id: `${id}-step-2`,
        title: "Read",
        body: "Read slowly. No need to force insight. Just stay with the words.",
      },
      {
        id: `${id}-step-3`,
        title: "Close",
        body: "Take one breath and choose a smaller next action than you planned.",
      },
    ],
  };
}

export const resetFlows: ResetFlow[] = [
  makeReset("reset-1", "Morning Reset", "A grounded start for busy mornings."),
  makeReset("reset-2", "Midday Reset", "A brief reset to unclench and refocus."),
  makeReset("reset-3", "Stress Reset", "A calm pause when your body feels tight."),
  makeReset("reset-4", "Work Transition", "Close one mode before the next begins."),
  makeReset("reset-5", "Evening Reset", "Let the day settle before the night."),
  makeReset("reset-6", "Sleep Wind-Down", "Quiet your pace and soften attention."),
];

export const resetFlowById = Object.fromEntries(
  resetFlows.map((flow) => [flow.id, flow]),
) as Record<string, ResetFlow>;
