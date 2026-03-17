"use client";

import posthog from "posthog-js";

let isInitialized = false;

function getConfig() {
  return {
    key: process.env.NEXT_PUBLIC_POSTHOG_KEY?.trim(),
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST?.trim(),
  };
}

export function initPostHog() {
  if (typeof window === "undefined") return;
  if (isInitialized) return;

  const { key, host } = getConfig();
  if (!key || !host) return;

  posthog.init(key, {
    api_host: host,
    autocapture: false,
    capture_pageview: false,
    capture_pageleave: true,
    persistence: "localStorage+cookie",
    person_profiles: "identified_only",
  });

  isInitialized = true;
}

export function captureEvent(
  eventName: string,
  properties?: Record<string, string | number | boolean | null | undefined>,
) {
  if (typeof window === "undefined") return;
  initPostHog();
  if (!isInitialized) return;
  posthog.capture(eventName, properties);
}

export function capturePageview(
  properties?: Record<string, string | number | boolean | null | undefined>,
) {
  if (typeof window === "undefined") return;
  initPostHog();
  if (!isInitialized) return;
  posthog.capture("$pageview", properties);
}
