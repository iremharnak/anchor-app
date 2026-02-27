"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getResetProgress } from "@/lib/resets/progress";
import type { Reset } from "@/lib/resets/types";

type ResetListProps = {
  resets: Reset[];
};

export function ResetList({ resets }: ResetListProps) {
  const [resumeIds, setResumeIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const ids = new Set<string>();
    for (const reset of resets) {
      const progress = getResetProgress(reset.id);
      if (progress && progress.stepIndex >= 0 && progress.stepIndex < reset.steps.length) {
        ids.add(reset.id);
      }
    }
    setResumeIds(ids);
  }, [resets]);

  return (
    <div>
      <ul aria-label="Reset list" className="space-y-2.5 md:space-y-2">
        {resets.map((reset) => (
          <li
            key={reset.id}
            className="overflow-hidden rounded-xl border border-anchor-highlight/20 bg-anchor-surface/65"
          >
            <Link
              href={`/reset/${reset.id}`}
              className="group block px-4 py-5 transition-all duration-150 hover:bg-anchor-surface active:scale-[0.995] active:bg-anchor-highlight/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-anchor-primary/45 md:px-5 md:py-6"
              aria-label={`${reset.title}. ${reset.whenLine}. ${reset.durationLabel}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h2 className="font-anchor-serif text-lg md:text-xl leading-tight text-anchor-text-main">
                    {reset.title}
                  </h2>
                  <p className="mt-2 font-anchor-sans text-sm leading-6 md:leading-7 text-anchor-text-body">
                    {reset.whenLine}
                  </p>
                </div>
                <div className="shrink-0 flex flex-col items-end gap-1 pt-0.5 text-anchor-text-muted/90">
                  {resumeIds.has(reset.id) ? (
                    <span className="rounded-full border border-anchor-highlight/30 bg-anchor-canvas/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-anchor-text-muted">
                      Resume
                    </span>
                  ) : null}
                  <div className="flex items-center gap-2">
                    <span className="text-xs md:text-sm">{reset.durationLabel}</span>
                    <span
                      className="text-sm opacity-75 transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      ›
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
