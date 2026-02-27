import { ResetFooterActions } from "./reset-footer-actions";

type CompletionProps = {
  onDone: () => void;
  onRestart: () => void;
};

export function Completion({ onDone, onRestart }: CompletionProps) {
  return (
    <section
      aria-labelledby="reset-complete-title"
      className="rounded-2xl border border-stone-200/80 bg-anchor-surface/55 px-5 py-7 md:px-8 md:py-9 space-y-7 md:space-y-8"
    >
      <div className="space-y-3 md:space-y-4">
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-anchor-text-muted/70">
          Complete
        </p>
        <h2
          id="reset-complete-title"
          className="font-anchor-serif text-2xl md:text-[1.85rem] leading-tight text-anchor-text-main"
        >
          You&apos;re done.
        </h2>
        <div className="max-w-[60ch]">
          <p className="font-anchor-sans text-base md:text-[1.0625rem] leading-8 md:leading-[1.8] text-anchor-text-body">
            Take a moment before you move on. Nothing else is required.
          </p>
        </div>
      </div>

      <div className="pt-1 md:pt-2">
        <ResetFooterActions
        leftAction={
          <button
            type="button"
            onClick={onRestart}
            className="inline-flex h-11 min-w-[92px] cursor-pointer items-center justify-center rounded-xl border border-stone-200 bg-white/70 px-4 text-sm font-medium text-anchor-text-main transition-colors hover:bg-white active:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anchor-primary/40"
          >
            Repeat this reset
          </button>
        }
        rightAction={
          <button
            type="button"
            onClick={onDone}
            className="inline-flex h-11 min-w-[92px] cursor-pointer items-center justify-center rounded-xl bg-anchor-primary px-5 text-sm font-medium text-white transition-colors hover:bg-anchor-primary-hover active:bg-anchor-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anchor-primary/40"
          >
            Done
          </button>
        }
        />
      </div>

    </section>
  );
}
