"use client";

import { useEffect, useId, useRef, useState } from "react";

const MAILERLITE_ACTION =
  "https://assets.mailerlite.com/jsonp/2031056/forms/176313741641516643/subscribe";

export default function AnchorSignupForm() {
  const formId = useId();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      setShowSuccess(true);
    };

    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      <iframe
        ref={iframeRef}
        name={`ml_hidden_iframe_${formId}`}
        id={`ml_hidden_iframe_${formId}`}
        className="hidden"
        title="hidden"
      />

      <form
        className="flex flex-col gap-4 items-stretch"
        method="POST"
        action={MAILERLITE_ACTION}
        target={`ml_hidden_iframe_${formId}`}
        onSubmit={() => setShowSuccess(false)}
      >
        <label
          className="text-sm text-anchor-text-main text-left"
          htmlFor={`cta-email-${formId}`}
        >
          Where should I send it?
        </label>

        <input
          id={`cta-email-${formId}`}
          name="fields[email]"
          required
          className="w-full h-16 rounded-xl border border-gray-200 bg-anchor-surface px-4 text-lg placeholder:text-gray-400 focus:border-anchor-primary focus:ring-1 focus:ring-anchor-primary focus:outline-none transition-all shadow-inner"
          placeholder="you@example.com"
          type="email"
          autoComplete="email"
        />

        <input type="hidden" name="ml-submit" value="1" />
        <input type="hidden" name="anticsrf" value="true" />

        <button
          className="h-16 w-full rounded-xl bg-[#2C2825] hover:bg-[#1a1614] text-white font-medium text-lg transition-colors flex items-center justify-center"
          type="submit"
        >
          <span>Send it to me</span>
        </button>

        {showSuccess ? (
          <p className="text-sm text-anchor-text-body mt-1">
            Check your inbox for the email (and your spam/promotions folder just in
            case).
          </p>
        ) : null}
      </form>
    </>
  );
}
