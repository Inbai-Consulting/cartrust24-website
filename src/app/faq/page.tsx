import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import CTTimeStamp from "../components/CTTimeStamp";
import { CTIcon, CTSection } from "../components/ct-primitives";
import { CT_BRAND, telHref, waHref } from "@/lib/cartrust";
import FaqList from "./FaqList";
import { CT_FAQ } from "./faq-data";

export const metadata: Metadata = {
  title: "FAQ – Häufige Fragen zu Kfz-Gutachten in Hamburg",
  description:
    "Wer zahlt das Gutachten? Wann reicht ein Kostenvoranschlag? Was passiert bei Totalschaden? Antworten in Klartext – CARTRUST24 Hamburg.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://cartrust24.de/faq#faqpage",
  mainEntity: CT_FAQ.flatMap((group) =>
    group.qs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  ),
};

function CTFaqHero() {
  return (
    <section style={{ paddingTop: 48, paddingBottom: 96 }}>
      <div className="wrap">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 24,
            paddingBottom: 32,
            marginBottom: 56,
            borderBottom: "1px solid var(--rule)",
          }}
        >
          <span className="slash">FAQ &nbsp;·&nbsp; Häufige Fragen</span>
          <span style={{ marginLeft: "auto" }} className="slash">
            12 Antworten · 4 Kapitel
          </span>
        </div>

        <h1
          className="display"
          style={{
            fontSize: "var(--t-h1)",
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            fontWeight: 900,
          }}
        >
          Die Fragen,
        </h1>
        <h1
          className="display"
          style={{
            fontSize: "var(--t-h1)",
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            fontWeight: 900,
          }}
        >
          die Geschädigte uns
        </h1>
        <h1
          className="display"
          style={{
            fontSize: "var(--t-h1)",
            lineHeight: 0.9,
            letterSpacing: "-0.045em",
            fontWeight: 500,
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            marginTop: 8,
          }}
        >
          tatsächlich stellen.
        </h1>

        <p
          style={{
            marginTop: "clamp(32px, 5vw, 64px)",
            fontSize: "clamp(17px, 1.6vw, 20px)",
            lineHeight: 1.5,
            maxWidth: "56ch",
            color: "var(--muted)",
          }}
        >
          Keine Sortierung nach SEO. Sortiert nach dem, was Menschen direkt
          nach einem Unfall{" "}
          <em className="ital">wirklich wissen wollen.</em> Antworten in
          Klartext.
        </p>
      </div>
    </section>
  );
}

function CTFaqCTA() {
  return (
    <CTSection tone="dark">
      <div
        className="split-wide-left"
        style={{ gap: "clamp(24px, 4vw, 48px)", alignItems: "center" }}
      >
        <div>
          <span className="slash" style={{ color: "var(--accent)" }}>
            Ihre Frage nicht dabei?
          </span>
          <h2
            style={{
              color: "var(--paper)",
              marginTop: 20,
              fontSize: "clamp(40px, 6vw, 96px)",
              maxWidth: "14ch",
            }}
          >
            Rufen Sie an.{" "}
            <em>Schneller als jede Suche.</em>
          </h2>
        </div>
        <div style={{ display: "grid", gap: 12, justifyItems: "start" }}>
          <a href={telHref} className="btn btn-accent btn-lg">
            <CTIcon name="phone" size={16} stroke="var(--paper)" />{" "}
            {CT_BRAND.phone}
          </a>
          <a
            href={waHref}
            className="btn btn-md"
            style={{
              borderColor: "#ffffff44",
              color: "var(--paper)",
            }}
          >
            <CTIcon name="wa" size={16} /> WhatsApp-Chat
          </a>
        </div>
      </div>
    </CTSection>
  );
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <main className="page-fade">
        <CTFaqHero />
        <FaqList />
        <CTFaqCTA />
      </main>
      <SiteFooter />
      <CTTimeStamp />
    </>
  );
}
