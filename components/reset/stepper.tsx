type StepperProps = {
  total: number;
  current: number;
};

export function Stepper({ total, current }: StepperProps) {
  const ratio = total > 0 ? ((current + 1) / total) * 100 : 0;

  return (
    <div className="space-y-4 md:space-y-5" aria-label={`Step ${current + 1} of ${total}`}>
      <div className="flex items-center justify-between text-[10px] md:text-[11px] tracking-[0.16em] uppercase text-anchor-text-muted/75">
        <span>Step {current + 1} of {total}</span>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {Array.from({ length: total }).map((_, index) => (
            <span
              key={index}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                index <= current ? "bg-anchor-primary/60" : "bg-anchor-highlight/80"
              }`}
            />
          ))}
        </div>
      </div>
      <div
        className="h-[2px] w-full overflow-hidden rounded-full bg-anchor-highlight/60"
        aria-hidden="true"
      >
        <div
          className="h-full bg-anchor-primary/70 transition-all duration-300"
          style={{ width: `${ratio}%` }}
        />
      </div>
    </div>
  );
}
