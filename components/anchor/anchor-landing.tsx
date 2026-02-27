import { Lora, Manrope } from "next/font/google";
import { Check, X } from "lucide-react";
import AnchorSignupForm from "@/components/anchor/anchor-signup-form";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-anchor-lora",
});

// Match the live landing page Google Fonts include (300–600)
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-anchor-manrope",
});

export default function AnchorLanding() {
  return (
    <main
      className={`anchor-landing ${lora.variable} ${manrope.variable} min-h-[max(884px,100dvh)] bg-anchor-canvas font-anchor-sans text-anchor-text-main antialiased selection:bg-anchor-primary/20 selection:text-anchor-primary`}
    >
      <div className="relative flex h-auto min-h-screen w-full max-w-md md:max-w-[880px] lg:max-w-[980px] mx-auto flex-col overflow-x-hidden border-x border-stone-200 shadow-[0_0_40px_-10px_rgba(0,0,0,0.05)] md:border-x-0 md:bg-anchor-canvas md:rounded-2xl md:my-10 md:border md:border-stone-200 md:shadow-[0_0_40px_-10px_rgba(0,0,0,0.05)]">
        <header className="px-6 pt-6 md:pt-10">
          <div className="flex items-center justify-between gap-4">
            <div className="text-sm font-medium tracking-wide text-anchor-text-body text-left">
              Anchor
            </div>
          </div>
          <div className="text-xs font-medium tracking-widest text-anchor-text-muted mt-3 mb-3">
            PRIVATE RESET · 3 MINUTES · NO JOURNALING
          </div>
        </header>

        <section className="px-6 pt-6 pb-6 flex flex-col gap-5 md:pt-6 md:pb-8 md:gap-6">
          <h1 className="anchor-h1">
            Come back to yourself in 3 quiet minutes.
          </h1>

          <div className="space-y-2">
            <h2 className="text-lg font-light text-anchor-text-body leading-relaxed max-w-[52rem]">
              A short email you use when your mind won’t stop replaying a draining conversation.
              No journaling. No talking. No explaining.
            </h2>
            <p className="text-sm md:text-base text-anchor-text-body leading-relaxed max-w-[52rem]">
              Use this in the 3 minutes after a draining call or visit, when your thoughts keep looping and you just want to feel like yourself again.
            </p>
          </div>

          <div>
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-xl bg-[#2C2825] hover:bg-[#1a1614] text-white font-medium text-sm px-4 h-10 transition-colors"
            >
              Send it to me
            </a>
          </div>

          <div className="relative mt-2 rounded-2xl border border-stone-200/70 bg-gradient-to-br from-anchor-surface/40 to-anchor-highlight/30 overflow-hidden">
            <div className="h-[3px] bg-anchor-primary/25"></div>

            <div className="p-5 md:p-6 space-y-3 md:space-y-4">
              <div>
                <p className="text-base md:text-lg font-semibold text-anchor-text-main leading-snug">
                  Built by someone who is often the strong one.
                </p>
              </div>

              <div className="h-px bg-stone-200/50"></div>

              <div>
                <p className="text-base md:text-lg text-anchor-text-body leading-relaxed">
                  The one who holds space, stays calm, and keeps going.
                </p>
              </div>

              <div className="h-px bg-stone-200/50"></div>

              <div>
                <p className="text-base md:text-lg font-medium text-anchor-text-main leading-relaxed">
                  The next draining conversation is coming. Have this ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-4 flex flex-col gap-6 md:pt-4 md:pb-6 md:gap-7">
          <div className="flex flex-col gap-1">
            <p className="text-sm md:text-base text-anchor-text-body leading-relaxed">
              You&apos;ll read two simple questions.
            </p>
            <p className="text-sm md:text-base text-anchor-text-body leading-relaxed">
              You won&apos;t need to reply or write anything.
            </p>
            <p className="text-sm md:text-base text-anchor-text-body leading-relaxed">
              By the time you&apos;re done, you&apos;ll feel a little more like yourself.
            </p>
            <p className="text-sm md:text-base text-anchor-text-body leading-relaxed">
              Most people notice their thoughts slow down and the intensity of the memory drop by the end of the 3 minutes.
            </p>
          </div>

          <h3 className="text-base font-bold leading-relaxed text-anchor-text-main mt-2">
            This is for you if:
          </h3>

          <ul className="list-disc list-inside space-y-2 text-base font-anchor-sans leading-relaxed text-anchor-text-body">
            <li>
              You replay conversations in your head long after they’re over
            </li>
            <li>
              You are usually the steady one, even when it costs you energy
            </li>
            <li>
              You want relief without having to explain, write, or process out loud
            </li>
          </ul>
        </section>

        <section className="px-6 py-8 md:py-10">
          <p className="text-sm italic text-anchor-text-muted opacity-90 mb-6">
            Just a moment of internal support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:items-stretch">
            <div className="rounded-2xl bg-[#EEF1F6] p-8 h-full flex flex-col">
              <h3 className="font-anchor-sans text-xs font-bold uppercase tracking-widest text-anchor-primary opacity-80 mb-6">
                What this is
              </h3>

              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-start">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-50 text-anchor-primary mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-anchor-text-main">
                    A private reset you can do anywhere
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-50 text-anchor-primary mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-anchor-text-main">
                    Takes about <strong>3 minutes</strong>
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-50 text-anchor-primary mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-anchor-text-main">
                    Nothing to write
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-50 text-anchor-primary mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-anchor-text-main">
                    Nothing to fix
                  </p>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-50 text-anchor-primary mt-0.5">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base text-anchor-text-main">
                    Two quiet questions to help you re orient
                  </p>
                </div>
              </div>

              <div className="mt-auto"></div>
            </div>

            <div className="rounded-2xl bg-anchor-surface p-8 h-full flex flex-col">
              <h3 className="font-anchor-sans text-xs font-bold uppercase tracking-widest text-anchor-text-muted opacity-80 mb-6">
                What this is not
              </h3>

              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-start opacity-75">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-anchor-text-muted mt-0.5">
                    <X className="h-4 w-4" />
                  </div>
                  <p className="text-base text-anchor-text-main">
                    Not therapy
                  </p>
                </div>

                <div className="flex gap-4 items-start opacity-75">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-anchor-text-muted mt-0.5">
                    <X className="h-4 w-4" />
                  </div>
                  <p className="text-base text-anchor-text-main">
                    Not journaling
                  </p>
                </div>

                <div className="flex gap-4 items-start opacity-75">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-anchor-text-muted mt-0.5">
                    <X className="h-4 w-4" />
                  </div>
                  <p className="text-base text-anchor-text-main">
                    Not habit building
                  </p>
                </div>

                <div className="flex gap-4 items-start opacity-75">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-anchor-text-muted mt-0.5">
                    <X className="h-4 w-4" />
                  </div>
                  <p className="text-base text-anchor-text-main">
                    Not a commitment
                  </p>
                </div>

                <div className="flex gap-4 items-start opacity-75">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-anchor-text-muted mt-0.5">
                    <X className="h-4 w-4" />
                  </div>
                  <p className="text-base text-anchor-text-main">
                    Not something you need to keep up with
                  </p>
                </div>
              </div>

              <div className="mt-auto"></div>
            </div>
          </div>
        </section>

        <div className="grow"></div>

        <section
          id="cta"
          className="px-6 py-10 md:py-12 bg-anchor-canvas mt-8 md:mt-10 border-t border-stone-100"
        >
          <div className="max-w-[520px] mx-auto text-center space-y-4">
            <h4 className="text-xl font-semibold text-anchor-text-main">
              Try the quiet 3 minute reset
            </h4>
            <p className="text-sm text-anchor-text-muted">
              For when you have been around family and feel disconnected from
              yourself.
            </p>

            <div className="mt-6 mb-3 text-left">
              <p className="text-sm font-medium text-anchor-text-main">
                What you&apos;ll receive
              </p>
              <p className="text-sm text-anchor-text-body leading-relaxed">
                A short email with two grounding questions you can use immediately.
                No reply required.
              </p>
            </div>

            <AnchorSignupForm />

            <p className="text-xs text-anchor-text-muted mt-2">
              We respect your inbox. No spam. Unsubscribe anytime.
            </p>
            <p className="text-[11px] text-anchor-text-muted mt-1">
              This is not therapy or medical care.
            </p>
          </div>
        </section>

        <p className="px-6 mt-2 pb-4 text-xs text-anchor-text-muted text-center">
          This experience is part of Anchor. Quiet mental support for emotionally
          demanding moments.
        </p>

        <footer className="p-6 text-center border-t border-gray-100">
          <p className="text-xs text-anchor-text-muted font-medium">
            © 2026 Anchor. Quiet mental support for emotionally demanding moments.
          </p>
        </footer>
      </div>
    </main>
  );
}
