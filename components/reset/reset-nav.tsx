import { ResetFooterActions } from "./reset-footer-actions";

type ResetNavProps = {
  onBack: () => void;
  onNext: () => void;
  disableBack?: boolean;
  nextLabel: string;
};

export function ResetNav({
  onBack,
  onNext,
  disableBack = false,
  nextLabel,
}: ResetNavProps) {
  return (
    <ResetFooterActions
      leftAction={!disableBack ? (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex h-11 min-w-[92px] cursor-pointer items-center justify-center rounded-xl border border-stone-200 bg-white/70 px-4 text-sm font-medium text-anchor-text-main transition-colors hover:bg-stone-50 active:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anchor-primary/40"
        >
          Back
        </button>
      ) : undefined}
      rightAction={
        <button
          type="button"
          onClick={onNext}
          className="inline-flex h-11 min-w-[92px] cursor-pointer items-center justify-center rounded-xl bg-anchor-primary px-5 text-sm font-medium text-white transition-colors hover:bg-anchor-primary-hover active:bg-anchor-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anchor-primary/40"
        >
          {nextLabel}
        </button>
      }
    />
  );
}
