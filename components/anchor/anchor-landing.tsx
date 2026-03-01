import { Lora, Manrope } from "next/font/google";
import AnchorSignupForm from "@/components/anchor/anchor-signup-form";
import CopyLinkButton from "@/components/anchor/copy-link-button";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-anchor-lora",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-anchor-manrope",
});

const FEEDBACK_URL = "https://tally.so/r/5BdvAN";

export default function AnchorLanding() {
  return (
    <main
      className={`anchor-landing ${lora.variable} ${manrope.variable} min-h-[max(884px,100dvh)] bg-anchor-canvas font-anchor-sans text-anchor-text-main antialiased selection:bg-anchor-primary/20 selection:text-anchor-primary`}
    >
      <div className="relative flex h-auto min-h-screen w-full max-w-md md:max-w-[880px] lg:max-w-[980px] mx-auto flex-col overflow-x-hidden border-x border-stone-200 shadow-[0_0_40px_-10px_rgba(0,0,0,0.05)] md:border-x-0 md:bg-anchor-canvas md:rounded-2xl md:my-10 md:border md:border-stone-200 md:shadow-[0_0_40px_-10px_rgba(0,0,0,0.05)]">

        {/* Header */}
        <header className="px-6 pt-6 md:pt-10">
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm font-medium tracking-wide text-anchor-text-body text-left">
              Anchor
            </div>
          </div>
          <div className="text-xs font-medium tracking-widest text-anchor-text-muted mt-3 mb-3">
            6 RESETS &middot; 3 MINUTES EACH &middot; NO JOURNALING
          </div>
        </header>

        {/* Hero */}
        <section className="px-6 pt-6 pb-8 flex flex-col gap-5 md:pt-6 md:pb-10 md:gap-6">
          <h1 className="anchor-h1">
            Come back to yourself in 3 quiet minutes.
          </h1>

          <p className="text-lg font-light text-anchor-text-body leading-relaxed max-w-[52rem]">
            Anchor is a small web app for the minutes after a hard conversation,
            when your thoughts won&apos;t stop.
          </p>

          <p className="text-sm md:text-base font-medium text-anchor-text-muted">
            In those moments, Anchor gives you one small place to land.
          </p>

          <div className="flex flex-col items-start gap-3">
            <a
              href="#email-capture"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-[#2C2825] px-5 text-sm font-medium text-white transition-colors hover:bg-[#1a1614]"
            >
              Get the private link
            </a>
            <div className="flex flex-col items-start">
              <a
                href="#feedback"
                className="inline-flex h-10 items-center justify-center rounded-xl border border-stone-200 bg-white/70 px-5 text-sm font-medium text-anchor-text-main transition-colors hover:bg-stone-50 active:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-anchor-primary/40"
              >
                Share feedback
              </a>
              <p className="mt-1 text-xs text-anchor-text-muted">
                Already tried it?
              </p>
            </div>
          </div>
        </section>

        {/* You'll recognize the moment */}
        <section className="px-6 py-8 md:py-10 border-t border-stone-100 flex flex-col gap-6">
          <h2 className="text-xl md:text-2xl font-semibold text-anchor-text-main leading-snug">
            You&apos;ll recognize the moment.
          </h2>

          <div className="space-y-3">
            <p className="text-sm md:text-base text-anchor-text-body">
              Open Anchor when:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm md:text-base font-anchor-sans leading-relaxed text-anchor-text-body">
              <li>You&apos;ve just hung up after a hard call and keep replaying it.</li>
              <li>You&apos;ve come home from a visit and feel heavier than when you left.</li>
              <li>You&apos;re bracing yourself before seeing or calling someone.</li>
              <li>Someone&apos;s words are still echoing in your body.</li>
              <li>You feel emotionally drained and there&apos;s nothing left to give.</li>
              <li>You can&apos;t stop circling the same thing in your mind.</li>
            </ul>
          </div>

        </section>

        {/* What Happens Inside */}
        <section className="px-6 py-8 md:py-10 border-t border-stone-100 flex flex-col gap-6">
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-semibold text-anchor-text-main leading-snug">
              What happens inside a reset.
            </h2>
            <p className="text-sm md:text-base text-anchor-text-body">
              Each reset walks you through four quiet steps. That&apos;s it.
            </p>
          </div>

          <p className="text-sm font-medium text-anchor-text-main">
            Pause &middot; Orient &middot; Center &middot; Close
          </p>

          <blockquote className="border-l-2 border-stone-200 pl-4">
            <p className="text-sm md:text-base italic text-anchor-text-body leading-relaxed">
              &ldquo;The call is over. You don&apos;t have to hold it anymore.&rdquo;
            </p>
          </blockquote>
        </section>

        {/* Built By */}
        <section className="px-6 py-8 md:py-10 border-t border-stone-100">
          <div className="relative rounded-2xl border border-stone-200/70 bg-gradient-to-br from-anchor-surface/40 to-anchor-highlight/30 overflow-hidden">
            <div className="h-[3px] bg-anchor-primary/25" />
            <div className="p-5 md:p-6 space-y-3 md:space-y-4">
              <p className="text-base md:text-lg font-semibold text-anchor-text-main leading-snug">
                Built by someone who is often the strong one.
              </p>
              <div className="h-px bg-stone-200/50" />
              <p className="text-base md:text-lg text-anchor-text-body leading-relaxed">
                The one who holds space, stays calm, and keeps going. Anchor was
                built for that version of you, the one who does not always feel
                allowed to fall apart.
              </p>
            </div>
          </div>
        </section>

        {/* This Is For You If */}
        <section className="px-6 py-8 md:py-10 border-t border-stone-100 flex flex-col gap-5">
          <h2 className="text-base font-bold leading-relaxed text-anchor-text-main">
            This is for you if:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base font-anchor-sans leading-relaxed text-anchor-text-body">
            <li>You replay conversations in your head long after they are over.</li>
            <li>You are usually the steady one, even when it costs you energy.</li>
            <li>You want relief without having to explain, write, or process out loud.</li>
          </ul>
        </section>

        <div className="grow" />

        {/* Email Capture */}
        <section
          id="email-capture"
          className="px-6 py-10 md:py-12 bg-anchor-canvas border-t border-stone-100"
        >
          <div className="max-w-[520px] mx-auto text-center space-y-4">
            <h2 className="text-xl font-semibold text-anchor-text-main">
              Get the private link.
            </h2>
            <div className="space-y-1">
              <p className="text-sm md:text-base text-anchor-text-body">
                Anchor is free to use.
              </p>
              <p className="text-sm md:text-base text-anchor-text-body leading-relaxed">
                I’ll send you a private link to the 6 resets. Only meaningful
                updates after that.
              </p>
            </div>
            <div className="mt-6 text-left">
              <AnchorSignupForm />
            </div>
            <p className="text-xs text-anchor-text-muted mt-2">
              One email for access. Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* Feedback */}
        <section
          id="feedback"
          className="px-6 py-10 md:py-12 border-t border-stone-100"
        >
          <div className="max-w-[520px] mx-auto text-center space-y-4">
            <h2 className="text-xl font-semibold text-anchor-text-main">
              Tell me how it felt.
            </h2>
            <p className="text-sm md:text-base text-anchor-text-body leading-relaxed">
              Anchor just launched. If you try a reset and have a
              reaction, even one sentence, I&apos;d love to hear it.
            </p>
            <div className="mt-6">
              <a
                href={FEEDBACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-anchor-text-main font-medium text-sm px-5 h-10 transition-colors"
              >
                Share feedback
              </a>
            </div>
            <p className="text-xs text-anchor-text-muted mt-2">
              This is not therapy or medical care.
            </p>
          </div>
        </section>

        {/* Share Nudge */}
        <div className="px-6 py-8 border-t border-stone-100 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-anchor-text-muted">
            Know someone who holds a lot for others? Send them this.
          </p>
          <CopyLinkButton />
        </div>

        {/* Footer */}
        <footer className="p-6 text-center border-t border-gray-100">
          <p className="text-xs text-anchor-text-muted font-medium">
            &copy; 2026 Anchor. Quiet mental support for emotionally demanding moments.
          </p>
        </footer>

      </div>
    </main>
  );
}
