import { ResetFooterActions } from "./reset-footer-actions";

type CompletionProps = {
  onDone: () => void;
  onRestart: () => void;
};

export function Completion({ onDone, onRestart }: CompletionProps) {
  return (
    <section
      aria-labelledby="reset-complete-title"
      className="rounded-2xl border border-slate-200 bg-white px-5 py-7 md:px-8 md:py-9 space-y-7 md:space-y-8"
    >
      <div className="space-y-3 md:space-y-4">
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-[#6B7280]/80">
          Complete
        </p>
        <h2
          id="reset-complete-title"
          className="font-anchor-serif text-2xl md:text-[1.85rem] leading-tight text-[#111827]"
        >
          You&apos;re done.
        </h2>
        <div className="max-w-[60ch]">
          <p className="font-anchor-sans text-base md:text-[1.0625rem] leading-8 md:leading-[1.8] text-[#374151]">
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
            className="inline-flex h-11 min-w-[92px] cursor-pointer items-center justify-center rounded-xl border border-stone-200 bg-white/70 px-4 text-sm font-medium text-anchor-text-main transition-colors hover:bg-stone-50 active:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anchor-primary/40"
          >
            Repeat this reset
          </button>
        }
        rightAction={
          <button
            type="button"
            onClick={onDone}
            className="inline-flex h-11 min-w-[92px] cursor-pointer items-center justify-center rounded-xl bg-[#2C2825] px-5 text-sm font-medium text-white transition-all duration-150 hover:-translate-y-px hover:bg-[#1a1614] active:translate-y-0 active:scale-[0.985] active:bg-[#120f0d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anchor-primary/40"
          >
            Done
          </button>
        }
        />
      </div>

    </section>
  );
}
