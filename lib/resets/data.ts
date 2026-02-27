import type { Reset } from "./types";

export const resets: Reset[] = [
  {
    id: "after-a-call",
    title: "After a call",
    whenLine: "When you keep replaying the conversation.",
    durationLabel: "3 minutes",
    steps: [
      {
        key: "pause",
        title: "Pause",
        body: `Let your shoulders drop one inch.
You don’t need to replay the conversation. This is a pause, not a review.`,
      },
      {
        key: "orient",
        title: "Orient",
        body: `Where are you right now?
Silently name three things you can see in this space.`,
      },
      {
        key: "center",
        title: "Center",
        body: `If it feels okay, notice one place your body is being supported (chair, floor, bed).
What can you let stay here, instead of carrying it into the rest of your day?`,
      },
      {
        key: "close",
        title: "Close",
        body: `The call is over. You don’t have to hold it anymore.
If nothing feels different yet, that’s okay. You still gave your body a pause.
It’s okay if this comes back later. You can pause again.`,
      },
    ],
  },
  {
    id: "after-a-visit",
    title: "After a visit",
    whenLine: "When you come home and feel heavy.",
    durationLabel: "3 minutes",
    steps: [
      {
        key: "pause",
        title: "Pause",
        body: `Take one slow breath out, longer than your inhale.
You’re back in your own space now. Nothing needs to be decided.`,
      },
      {
        key: "orient",
        title: "Orient",
        body: `Look around and find one solid thing that clearly belongs to your life.
Let your eyes rest on it for a moment.`,
      },
      {
        key: "center",
        title: "Center",
        body: `What feels heavier than it needs to right now?
If it helps, imagine setting that weight down beside you, just for this moment.`,
      },
      {
        key: "close",
        title: "Close",
        body: `You’re allowed to just be home now.
You can put that weight down. This moment is enough.`,
      },
    ],
  },
  {
    id: "before-a-call-or-visit",
    title: "Before a call or visit",
    whenLine: "When you’re bracing yourself.",
    durationLabel: "3 minutes",
    steps: [
      {
        key: "pause",
        title: "Pause",
        body: `You don’t need to prepare perfectly.
Take one easy breath and just arrive here first.`,
      },
      {
        key: "orient",
        title: "Orient",
        body: `Feel your feet.
Gently press them into the floor once, like you’re saying, “I’m here.”`,
      },
      {
        key: "center",
        title: "Center",
        body: `If you like, choose one thing you want to stay connected to, no matter how the interaction goes.
If that feels hard, just place a hand on your chest or arm and feel the contact.`,
      },
      {
        key: "close",
        title: "Close",
        body: `You can enter this as yourself.
You don’t have to disappear to keep things calm.`,
      },
    ],
  },
  {
    id: "after-criticism",
    title: "After criticism",
    whenLine: "When someone’s words linger in your body.",
    durationLabel: "3 minutes",
    steps: [
      {
        key: "pause",
        title: "Pause",
        body: `You don’t need to correct, explain, or defend anything right now.
Let your jaw loosen and your tongue rest away from the roof of your mouth.`,
      },
      {
        key: "orient",
        title: "Orient",
        body: `Where do you feel the impact of those words in your body?
Gently notice that place without trying to change it.`,
      },
      {
        key: "center",
        title: "Center",
        body: `If it feels okay, name one thing you know about yourself that doesn’t need permission.
If nothing comes, that’s alright—just feel your breath coming in and going out.`,
      },
      {
        key: "close",
        title: "Close",
        body: `That comment doesn’t define you. You’re allowed to stay intact.
If it still stings, it makes sense. You’re allowed to be on your own side.`,
      },
    ],
  },
  {
    id: "emotionally-drained",
    title: "When you feel emotionally drained",
    whenLine: "When there’s nothing left to give.",
    durationLabel: "3 minutes",
    steps: [
      {
        key: "pause",
        title: "Pause",
        body: `You don’t need to fix the feeling. Just let it be here.
Exhale slowly, like you’re letting some of the effort leak out.`,
      },
      {
        key: "orient",
        title: "Orient",
        body: `Notice something steady that hasn’t changed today—a piece of furniture, a sound, the way the floor feels.
Let your attention rest there for a few seconds.`,
      },
      {
        key: "center",
        title: "Center",
        body: `If it feels safe, uncross something (arms, legs) or lean back a little, as if you had just a bit more room.
What would it be like to take up slightly more space than you are right now?`,
      },
      {
        key: "close",
        title: "Close",
        body: `You don’t owe your energy to anyone in this moment.
Rest is allowed, even if nothing is “finished.”`,
      },
    ],
  },
  {
    id: "something-still-stuck",
    title: "When something is still stuck",
    whenLine: "When you can’t stop circling the same thing.",
    durationLabel: "3 minutes",
    steps: [
      {
        key: "pause",
        title: "Pause",
        body: `You don’t need closure or clarity right now.
Take one gentle breath and let your shoulders soften, even a little.`,
      },
      {
        key: "orient",
        title: "Orient",
        body: `Name one thing you can see.
Name one thing you can feel physically (texture, temperature, pressure).`,
      },
      {
        key: "center",
        title: "Center",
        body: `If it feels okay, ask: What part of this can I leave unfinished, without abandoning myself?
If that’s too much, simply notice the support under your body.`,
      },
      {
        key: "close",
        title: "Close",
        body: `You can return to this later. For now, you’re allowed to move on.
If it still feels sticky, that’s human. You don’t have to solve it in this moment.`,
      },
    ],
  },
];

export const resetsById = Object.fromEntries(
  resets.map((reset) => [reset.id, reset]),
) as Record<string, Reset>;

