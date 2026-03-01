"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type GoogleAnalyticsPageviewProps = {
  measurementId: string;
};

export default function GoogleAnalyticsPageview({
  measurementId,
}: GoogleAnalyticsPageviewProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!measurementId) return;
    if (typeof window === "undefined") return;
    if (typeof window.gtag !== "function") return;

    const search = searchParams.toString();
    const page_path = search ? `${pathname}?${search}` : pathname;

    window.gtag("config", measurementId, {
      page_path,
    });
  }, [measurementId, pathname, searchParams]);

  return null;
}
