import Link from "next/link";

type ResetNavChipProps = {
  href: string;
  children: React.ReactNode;
};

export function ResetNavChip({ href, children }: ResetNavChipProps) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-10 items-center rounded-full bg-[#2563EB] px-4 py-2 text-sm font-medium text-white no-underline transition-all duration-150 hover:bg-[#1D4ED8] active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD]"
    >
      {children}
    </Link>
  );
}
