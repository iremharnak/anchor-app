import Link from "next/link";

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
      <div className="space-y-3 md:space-y-4">
        <div className="font-anchor-serif text-base md:text-lg leading-none text-[#111827]/90">
          Anchor
        </div>
        <div>
          <Link
            href={backHref}
            className="inline-flex h-11 min-w-[92px] cursor-pointer items-center justify-center rounded-xl bg-[#2C2825] px-4 text-sm font-medium text-white transition-all duration-150 hover:bg-[#1a1614] active:scale-[0.985] active:bg-[#120f0d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anchor-primary/40"
          >
            {backLabel}
          </Link>
        </div>
      </div>
      <div className="space-y-3 md:space-y-4">
        <h1 className="font-anchor-serif text-3xl md:text-[2.15rem] leading-tight text-[#111827]">
          {title}
        </h1>
        <p className="font-anchor-sans text-sm md:text-base leading-7 md:leading-8 text-[#374151] max-w-[50ch]">
          {lead}
        </p>
      </div>
    </header>
  );
}
