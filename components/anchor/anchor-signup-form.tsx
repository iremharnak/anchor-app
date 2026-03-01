"use client";

import { useEffect, useId, useRef, useState } from "react";

const MAILERLITE_ACTION =
  "https://assets.mailerlite.com/jsonp/2031056/forms/176313741641516643/subscribe";

export default function AnchorSignupForm() {
  const formId = useId();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  // Track whether a submission has been made to avoid false-positive on initial iframe load
  const submittedRef = useRef(false);
  const hasHandledSubmitRef = useRef(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      if (!submittedRef.current) return;
      if (hasHandledSubmitRef.current) return;
      hasHandledSubmitRef.current = true;
      submittedRef.current = false;
      setShowSuccess(true);
    };

    iframe.addEventListener("load", handleLoad);
    return () => iframe.removeEventListener("load", handleLoad);
  }, []);

  function handleSubmit() {
    submittedRef.current = true;
    hasHandledSubmitRef.current = false;
    setShowSuccess(false);
  }

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
        onSubmit={handleSubmit}
      >
        <label
          className="text-sm text-anchor-text-main text-left"
          htmlFor={`cta-email-${formId}`}
        >
          Your email address
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
          className="h-16 w-full cursor-pointer rounded-xl bg-[#2C2825] hover:bg-[#1a1614] text-white font-medium text-lg transition-colors flex items-center justify-center"
          type="submit"
        >
          <span>Get access to the resets</span>
        </button>

        {showSuccess ? (
          <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">
            Check your inbox for your private link. If it does not show up in a
            few minutes, check spam or promotions.
          </p>
        ) : null}
      </form>
    </>
  );
}
