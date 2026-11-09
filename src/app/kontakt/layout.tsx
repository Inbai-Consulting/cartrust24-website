import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – Termin sichern · 24h erreichbar",
  description:
    "Schreiben Sie uns oder rufen Sie an: +49 15567 487073. CARTRUST24 Hamburg – Termin innerhalb 24 Stunden, vor Ort.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
