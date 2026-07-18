import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dai818.github.io"),
  title: "Yalun Dai",
  description: "Academic homepage of Yalun Dai — data-centric machine learning, spatial intelligence, and efficient computer vision.",
  openGraph: {
    title: "Yalun Dai",
    description: "Data-centric machine learning · Spatial intelligence · Efficient computer vision",
    url: "https://dai818.github.io",
    siteName: "Yalun Dai",
    images: [{ url: "https://avatars.githubusercontent.com/Dai818?v=4", alt: "Yalun Dai" }],
    type: "website",
  },
  twitter: { card: "summary", title: "Yalun Dai", description: "Academic homepage of Yalun Dai" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="stylesheet" href="/site.css" /><link rel="icon" href="https://avatars.githubusercontent.com/Dai818?v=4" /></head><body>{children}</body></html>;
}
