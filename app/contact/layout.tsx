import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Atelier & Laurelton Studio",
  description:
    "Visit Miracle Photography Studio at 227-12A Merrick Blvd, Laurelton, NY 11413. Call (718) 341-7376 or reserve your bespoke wedding and portrait commission.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
