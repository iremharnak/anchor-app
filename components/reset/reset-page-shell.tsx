import type { ReactNode } from "react";
import { ResetHeader } from "./reset-header";

type ResetPageShellProps = {
  title: string;
  lead: string;
  backHref?: string;
  backLabel?: string;
  shellMaxWidthClassName?: string;
  children: ReactNode;
};

export function ResetPageShell({
  title,
  lead,
  backHref,
  backLabel,
  shellMaxWidthClassName = "md:max-w-[720px]",
  children,
}: ResetPageShellProps) {
  return (
    <main className="min-h-[100svh] bg-[#F7F7F7] text-[#111827] md:flex md:h-screen md:items-center md:justify-center md:overflow-hidden md:px-4 md:py-6">
      <div
        className={`w-full ${shellMaxWidthClassName} md:h-[78vh] md:min-h-[640px] md:rounded-3xl md:border md:border-slate-200 md:bg-[#F7F7F7] md:shadow-[0_10px_30px_-22px_rgba(17,24,39,0.18)] md:overflow-hidden`}
      >
        <div className="flex min-h-[100svh] flex-col md:h-full md:min-h-0">
          <div className="flex-1 overflow-visible md:overflow-y-auto">
            <div className="sticky top-0 z-10 border-b border-slate-200 bg-[#F7F7F7]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F7F7F7]/90">
              <div className="px-5 py-5 md:px-6 md:py-7">
                <ResetHeader
                  title={title}
                  lead={lead}
                  backHref={backHref}
                  backLabel={backLabel}
                />
              </div>
            </div>
            <div className="px-5 py-6 md:px-6 md:py-8">
              <div className="space-y-7 md:space-y-9">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
