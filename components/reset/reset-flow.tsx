"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import type { Reset } from "@/lib/resets/types";
import { clearResetProgress, getResetProgress, saveResetProgress } from "@/lib/resets/progress";
import { Completion } from "./completion";
import { ResetFooterActions } from "./reset-footer-actions";
import { ResetNav } from "./reset-nav";
import { StepCard } from "./step-card";
import { Stepper } from "./stepper";

type ResetFlowProps = {
  reset: Reset;
};

export function ResetFlow({ reset }: ResetFlowProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [hasMounted, setHasMounted] = useState(false);
  const [started, setStarted] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [savedStepIndex, setSavedStepIndex] = useState<number | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const totalSteps = reset.steps.length;
  const currentStep = reset.steps[stepIndex];
  const canResume = useMemo(
    () =>
      savedStepIndex !== null &&
      savedStepIndex >= 0 &&
      savedStepIndex < totalSteps,
    [savedStepIndex, totalSteps],
  );
  const shouldAutoResume = searchParams.get("resume") === "1";

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    // Route changes between /reset/[id] can preserve client component state;
    // reset local flow UI state before loading progress for the new reset.
    setStarted(false);
    setStepIndex(0);
    setSavedStepIndex(null);
    setIsComplete(false);
  }, [reset.id]);

  useEffect(() => {
    const saved = getResetProgress(reset.id);
    if (!saved) {
      setSavedStepIndex(null);
      return;
    }

    if (saved.stepIndex >= totalSteps) {
      setSavedStepIndex(null);
      return;
    }

    setSavedStepIndex(saved.stepIndex);
  }, [reset.id, totalSteps]);

  useEffect(() => {
    if (!started || isComplete) return;
    saveResetProgress(reset.id, stepIndex);
  }, [isComplete, reset.id, started, stepIndex]);

  useEffect(() => {
    if (!hasMounted || !shouldAutoResume || started || isComplete) return;
    if (!canResume || savedStepIndex === null) return;

    setStarted(true);
    setStepIndex(savedStepIndex);
    router.replace(`/reset/${reset.id}`);
  }, [
    canResume,
    hasMounted,
    isComplete,
    reset.id,
    router,
    savedStepIndex,
    shouldAutoResume,
    started,
  ]);

  function handleBegin() {
    setStarted(true);
    setIsComplete(false);
    setStepIndex(0);
    saveResetProgress(reset.id, 0);
  }

  function handleResume() {
    if (!canResume || savedStepIndex === null) return;
    setStarted(true);
    setIsComplete(false);
    setStepIndex(savedStepIndex);
  }

  function handleStartOverFromIntroHint() {
    clearResetProgress(reset.id);
    setSavedStepIndex(null);
    setStepIndex(0);
    setStarted(false);
    setIsComplete(false);
  }

  function handleBack() {
    if (!started || isComplete) return;
    setStepIndex((current) => Math.max(0, current - 1));
  }

  function handleNext() {
    if (!started) {
      handleBegin();
      return;
    }

    if (isComplete) return;

    if (stepIndex >= totalSteps - 1) {
      setIsComplete(true);
      saveResetProgress(reset.id, totalSteps);
      return;
    }

    setStepIndex((current) => current + 1);
  }

  function handleDone() {
    clearResetProgress(reset.id);
    router.push("/reset");
  }

  function handleRestart() {
    setIsComplete(false);
    setStarted(true);
    setStepIndex(0);
    setSavedStepIndex(0);
    saveResetProgress(reset.id, 0);
  }

  if (!started && !isComplete) {
    return (
      <div className="space-y-8 md:space-y-10">
        <section className="rounded-2xl border border-stone-200/80 bg-anchor-surface/55 px-5 py-7 md:px-8 md:py-9">
          <div className="space-y-4 md:space-y-5">
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-anchor-text-muted/75">
              {reset.durationLabel}
            </p>
            <h2 className="font-anchor-serif text-2xl md:text-[1.85rem] leading-tight text-anchor-text-main">
              {reset.title}
            </h2>
            <div className="max-w-[60ch] space-y-3 md:space-y-4">
              <p className="font-anchor-sans text-base md:text-[1.0625rem] leading-8 md:leading-[1.8] text-anchor-text-body">
                {reset.whenLine}
              </p>
              <p className="text-sm leading-6 text-anchor-text-muted/90">
                Four short sections: Pause, Orient, Center, Close.
              </p>
            </div>
          </div>
        </section>

        {hasMounted && canResume ? (
          <div className="pt-1">
            <p className="text-sm leading-6 text-anchor-text-muted">
              You left off at Step {savedStepIndex! + 1} of {totalSteps}.{" "}
              <button
                type="button"
                onClick={handleStartOverFromIntroHint}
                className="cursor-pointer rounded-md text-anchor-text-body transition-colors hover:text-anchor-text-main active:text-anchor-text-main focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anchor-primary/40"
              >
                Start over
              </button>
            </p>
          </div>
        ) : null}

        <ResetFooterActions
          leftAction={
            <Link
              href="/reset"
              className="inline-flex h-11 min-w-[92px] cursor-pointer items-center justify-center rounded-xl border border-stone-200 bg-white/70 px-4 text-sm font-medium text-anchor-text-main hover:bg-stone-50 active:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anchor-primary/40"
            >
              Back
            </Link>
          }
          rightAction={
            <button
              type="button"
              onClick={hasMounted && canResume ? handleResume : handleBegin}
              className="inline-flex h-11 min-w-[92px] cursor-pointer items-center justify-center rounded-xl bg-anchor-primary px-5 text-sm font-medium text-white transition-colors hover:bg-anchor-primary-hover active:bg-anchor-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anchor-primary/40"
            >
              {hasMounted && canResume ? "Continue" : "Begin"}
            </button>
          }
        />
      </div>
    );
  }

  if (isComplete) {
    return <Completion onDone={handleDone} onRestart={handleRestart} />;
  }

  return (
    <div className="space-y-8 md:space-y-10">
      <Stepper total={totalSteps} current={stepIndex} />
      {currentStep ? (
        <StepCard step={currentStep} stepNumber={stepIndex + 1} totalSteps={totalSteps} />
      ) : null}
      <ResetNav
        onBack={handleBack}
        onNext={handleNext}
        disableBack={stepIndex === 0}
        nextLabel={stepIndex === totalSteps - 1 ? "Finish" : "Next"}
      />
    </div>
  );
}
