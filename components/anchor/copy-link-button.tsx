"use client";

import { useState } from "react";

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center justify-center rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-anchor-text-main font-medium text-sm px-4 h-9 transition-colors"
    >
      {copied ? "Link copied" : "Copy link"}
    </button>
  );
}
