import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dai818.github.io"),
  title: "Yalun Dai",
  description: "Yalun Dai is a PhD student at NTU working on Data-centric AI and Embodied AI.",
  openGraph: {
    title: "Yalun Dai",
    description: "PhD student at NTU · Data-centric AI · Embodied AI",
    url: "https://dai818.github.io",
    siteName: "Yalun Dai",
    images: [{ url: "/og-v2.png", width: 1536, height: 1024, alt: "Yalun Dai — Data-centric AI and Embodied AI" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Yalun Dai", description: "PhD student at NTU · Data-centric AI · Embodied AI", images: ["/og-v2.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/site.css" />
        <script data-goatcounter="https://yalun.goatcounter.com/count" async src="https://gc.zgo.at/count.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
