import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curated Portfolios & Archives",
  description:
    "Explore high-end fine art weddings, baby & newborn milestones, high-society galas, and editorial portraits by Miracle Photography Studio in Laurelton, NY.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
