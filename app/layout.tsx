import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import GoogleAnalyticsPageview from "@/components/analytics/google-analytics-pageview";
import type { Metadata } from "next";
import { Lora, Manrope } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "../components/provider";
import "./globals.css";

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

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-8G0N6WDBEE";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.anchorreset.com"),
  title: "Anchor, a 3-minute mental reset for people who are usually the strong one.",
  description:
    "Come back to yourself in 3 quiet minutes. A private reset you can do anywhere. No journaling. No talking. No explaining.",
  alternates: {
    canonical: "https://www.anchorreset.com/",
  },
  openGraph: {
    title: "Anchor",
    description:
      "Come back to yourself in 3 quiet minutes. A private reset you can do anywhere. No journaling. No talking. No explaining.",
    url: "https://www.anchorreset.com/",
    siteName: "Anchor",
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="m-0 p-0 scroll-smooth">
      <body
        className={`${lora.variable} ${manrope.variable} font-anchor-sans antialiased m-0 p-0`}
        style={{
          backgroundColor: "rgb(253 251 247 / var(--tw-bg-opacity, 1))",
          colorScheme: "light",
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Analytics />
          <Suspense fallback={null}>
            <GoogleAnalyticsPageview measurementId={GA_MEASUREMENT_ID} />
          </Suspense>
        </ThemeProvider>

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
      </body>
    </html>
  );
}
