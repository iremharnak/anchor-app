"use client";

const STORAGE_KEY = "anchor-reset-progress-v1";
const LAST_OPENED_KEY = "anchor-reset-last-opened-v1";

export type ResetProgress = {
  resetId: string;
  stepIndex: number;
  updatedAt: number;
};

type ProgressMap = Record<string, ResetProgress>;

function isBrowser() {
  return typeof window !== "undefined";
}

function readMap(): ProgressMap {
  if (!isBrowser()) return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    return parsed as ProgressMap;
  } catch {
    return {};
  }
}

function writeMap(value: ProgressMap) {
  if (!isBrowser()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

export function getResetProgress(resetId: string): ResetProgress | null {
  const map = readMap();
  return map[resetId] ?? null;
}

export function saveResetProgress(resetId: string, stepIndex: number) {
  const map = readMap();
  map[resetId] = {
    resetId,
    stepIndex,
    updatedAt: Date.now(),
  };
  writeMap(map);
  if (isBrowser()) {
    window.localStorage.setItem(LAST_OPENED_KEY, resetId);
  }
}

export function clearResetProgress(resetId: string) {
  const map = readMap();
  delete map[resetId];
  writeMap(map);
}

export function getLastOpenedResetId(): string | null {
  if (!isBrowser()) return null;
  return window.localStorage.getItem(LAST_OPENED_KEY);
}
