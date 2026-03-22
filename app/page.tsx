import type { Metadata } from "next";
import AnchorLanding from "@/components/anchor/anchor-landing";

export const metadata: Metadata = {
  title: "Anchor – 3-minute resets for after hard conversations",
  description:
    "Anchor is a small web app with 3-minute resets for the minutes after hard conversations, when your mind keeps replaying the interaction.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Anchor – 3-minute resets for after hard conversations",
    description:
      "Anchor is a small web app with 3-minute resets for the minutes after hard conversations, when your mind keeps replaying the interaction.",
    url: "/",
    siteName: "Anchor",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anchor – 3-minute resets for after hard conversations",
    description:
      "Anchor is a small web app with 3-minute resets for the minutes after hard conversations, when your mind keeps replaying the interaction.",
  },
};

export default function Home() {
  return <AnchorLanding />;
}
