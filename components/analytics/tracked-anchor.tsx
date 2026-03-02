"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { captureEvent } from "@/lib/analytics/posthog";

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName: string;
  properties?: Record<string, string | number | boolean | null | undefined>;
};

export default function TrackedAnchor({
  children,
  eventName,
  onClick,
  properties,
  ...props
}: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        captureEvent(eventName, properties);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}

