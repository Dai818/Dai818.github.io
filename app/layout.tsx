import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dai818.github.io"),
  title: "Yalun Dai — Researcher in Artificial Intelligence",
  description: "Academic homepage of Yalun Dai: data-centric machine learning, efficient learning, computer vision, and 3D scene understanding.",
  openGraph: { title: "Yalun Dai — Researcher in Artificial Intelligence", description: "Data-centric machine learning · Efficient AI · Computer vision · 3D scene understanding", url: "https://dai818.github.io", siteName: "Yalun Dai", images: [{ url: "/og-academic.png", width: 1536, height: 1024, alt: "Yalun Dai academic homepage" }], type: "website" },
  twitter: { card: "summary_large_image", title: "Yalun Dai — Researcher in Artificial Intelligence", description: "Data-centric machine learning · Efficient AI · Computer vision · 3D scene understanding", images: ["/og-academic.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="stylesheet" href="/site.css" /><link rel="icon" href="https://avatars.githubusercontent.com/Dai818?v=4" /></head><body>{children}</body></html>;
}
