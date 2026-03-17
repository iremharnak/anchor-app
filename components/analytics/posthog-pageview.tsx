"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { capturePageview } from "@/lib/analytics/posthog";

function readQueryParam(searchParams: URLSearchParams, key: string) {
  const value = searchParams.get(key);
  return value && value.trim() ? value : undefined;
}

export default function PostHogPageview() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const search = searchParams.toString();
    const pathnameWithSearch = search ? `${pathname}?${search}` : pathname;

    capturePageview({
      $current_url: window.location.href,
      $pathname: pathname,
      $host: window.location.host,
      $referrer: document.referrer || undefined,
      page_path: pathnameWithSearch,
      utm_source: readQueryParam(searchParams, "utm_source"),
      utm_medium: readQueryParam(searchParams, "utm_medium"),
      utm_campaign: readQueryParam(searchParams, "utm_campaign"),
      utm_content: readQueryParam(searchParams, "utm_content"),
      utm_term: readQueryParam(searchParams, "utm_term"),
    });
  }, [pathname, searchParams]);

  return null;
}
