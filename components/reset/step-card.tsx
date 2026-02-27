import type { ResetStep } from "@/lib/resets/types";

type StepCardProps = {
  step: ResetStep;
  stepNumber: number;
  totalSteps: number;
};

export function StepCard({ step, stepNumber, totalSteps }: StepCardProps) {
  return (
    <section
      aria-labelledby={`step-title-${step.key}`}
      className="rounded-2xl border border-slate-200 bg-white px-5 py-7 md:px-8 md:py-9"
    >
      <div className="space-y-6 md:space-y-7">
        <div className="space-y-3 md:space-y-4">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#6B7280]/80">
            {step.key}
          </p>
          <h2
            id={`step-title-${step.key}`}
            className="font-anchor-serif text-2xl md:text-[1.85rem] leading-tight text-[#111827]"
          >
            {step.title}
          </h2>
          <p className="sr-only">
            Step {stepNumber} of {totalSteps}
          </p>
        </div>

        <div className="max-w-[60ch]">
          <p className="whitespace-pre-line font-anchor-sans text-base md:text-[1.0625rem] leading-8 md:leading-[1.85] text-[#111827]">
            {step.body}
          </p>
        </div>
      </div>
    </section>
  );
}
