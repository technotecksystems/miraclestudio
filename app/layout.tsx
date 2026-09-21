import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Miracle Photography Studio | Fine Art Wedding & Portrait Photography NY",
    template: "%s | Miracle Photography Studio",
  },
  description:
    "Miracle Photography Studio (227-12A Merrick Blvd, Laurelton, NY 11413) provides Awwwards-caliber fine art wedding photography, serene newborn portraits, and high-society event coverage in New York.",
  keywords: [
    "Miracle Photography Studio",
    "Laurelton NY photographer",
    "Queens wedding photographer",
    "Long Island luxury wedding photography",
    "newborn baby portraits NYC",
    "fine art portrait studio Merrick Blvd",
    "event photography 11413",
  ],
  authors: [{ name: "Miracle Photography Studio" }],
  creator: "Miracle Photography Studio",
  metadataBase: new URL("https://miraclestudiony.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://miraclestudiony.com",
    siteName: "Miracle Photography Studio",
    title: "Miracle Photography Studio | Editorial Wedding & Portrait Photography",
    description:
      "A boutique photography atelier in Laurelton, NY preserving love stories, milestone portraits, and editorial commissions with timeless reverence.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Miracle Photography Studio Fine Art Wedding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miracle Photography Studio | Laurelton, NY",
    description:
      "Fine art wedding photojournalism, newborn portraits, and milestone event photography in New York.",
    images: ["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-blue-600 selection:text-white min-h-screen bg-stone-950 text-stone-100">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
