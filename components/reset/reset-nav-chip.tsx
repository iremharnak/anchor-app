import Link from "next/link";

type ResetNavChipProps = {
  href: string;
  children: React.ReactNode;
};

export function ResetNavChip({ href, children }: ResetNavChipProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center rounded-full bg-anchor-surface/60 px-4 py-2 text-sm text-anchor-text-body no-underline transition-all duration-150 hover:bg-anchor-surface hover:text-anchor-text-main active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anchor-primary/40"
    >
      {children}
    </Link>
  );
}

