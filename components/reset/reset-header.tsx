import { ResetNavChip } from "./reset-nav-chip";

type ResetHeaderProps = {
  title: string;
  lead: string;
  backHref?: string;
  backLabel?: string;
};

export function ResetHeader({
  title,
  lead,
  backHref = "/",
  backLabel = "Back to Anchor",
}: ResetHeaderProps) {
  return (
    <header className="space-y-7">
      <div className="flex items-center justify-between gap-3">
        <div className="font-anchor-serif text-base md:text-lg leading-none text-anchor-text-main/85">
          Anchor
        </div>
        <ResetNavChip href={backHref}>{backLabel}</ResetNavChip>
      </div>
      <div className="space-y-3 md:space-y-4">
        <h1 className="font-anchor-serif text-3xl md:text-[2.15rem] leading-tight text-anchor-text-main">
          {title}
        </h1>
        <p className="font-anchor-sans text-sm md:text-base leading-7 md:leading-8 text-anchor-text-body max-w-[50ch]">
          {lead}
        </p>
      </div>
    </header>
  );
}
