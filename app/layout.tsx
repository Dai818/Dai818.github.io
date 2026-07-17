import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dai818.github.io"),
  title: "Dai818 — Ideas, code & quiet curiosity",
  description: "The personal homepage of Dai818 — a small corner for code, experiments, and ideas.",
  openGraph: {
    title: "Dai818 — Ideas, code & quiet curiosity",
    description: "A small corner for code, experiments, and ideas.",
    url: "https://dai818.github.io",
    siteName: "Dai818",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Dai818 personal homepage" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dai818 — Ideas, code & quiet curiosity",
    description: "A small corner for code, experiments, and ideas.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/site.css" />
        <link rel="icon" href="https://avatars.githubusercontent.com/Dai818?v=4" />
      </head>
      <body>{children}</body>
    </html>
  );
}
