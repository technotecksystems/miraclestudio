import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Client Vault & Portal",
  description:
    "Secure proofing gallery access and high-resolution digital print downloads for Miracle Photography Studio patrons.",
};

export default function ClientPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
