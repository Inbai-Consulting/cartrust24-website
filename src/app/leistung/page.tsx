import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import CTTimeStamp from "../components/CTTimeStamp";
import {
  CTIcon,
  CTSection,
  CTSectionHead,
} from "../components/ct-primitives";
import { telHref } from "@/lib/cartrust";
import { ASSET_BLUR_DATA_URL, assetUrl } from "@/lib/assets";
import HaftpflichtToggle from "./HaftpflichtToggle";

export const metadata: Metadata = {
  title: "Leistungen – Unfallgutachten, Fahrzeugbewertung, Kaufprüfung",
  description:
    "Unfallgutachten, Fahrzeugbewertung, Kauf- & Verkaufsprüfung und Kostenvoranschlag in Hamburg. BVSK-Methodik, Festpreise, Vor-Ort-Termin in 24 Stunden.",
  alternates: { canonical: "/leistung" },
};

function CTLeistungHero() {
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
          <span className="slash">
            Leistung &nbsp;·&nbsp; Unfallgutachten
          </span>
          <span style={{ marginLeft: "auto" }} className="slash">
            Hamburg &nbsp;·&nbsp; Festpreis 89 €
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
          Schaden dokumentieren,
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
          Ansprüche durchsetzen.
        </h1>

        <div
          className="split-narrow split-end"
          style={{
            marginTop: "clamp(40px, 6vw, 80px)",
            gap: "clamp(28px, 5vw, 80px)",
          }}
        >
          <p
            style={{
              fontSize: "clamp(17px, 1.6vw, 20px)",
              lineHeight: 1.45,
              maxWidth: "52ch",
              color: "var(--ink)",
            }}
          >
            Das Unfallgutachten ist die Grundlage für jede Schadenregulierung.
            Wir erstellen es ingenieurstechnisch, rechtssicher — und in der
            Sprache, die{" "}
            <em className="ital">Versicherer verstehen.</em>
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <a href={telHref} className="btn btn-accent btn-md">
              <CTIcon name="phone" size={14} stroke="var(--paper)" /> Anrufen
            </a>
            <Link href="/kontakt" className="btn btn-ghost btn-md">
              Termin sichern{" "}
              <span className="arr">
                <CTIcon name="arrow-up-r" size={14} />
              </span>
            </Link>
            <Link href="/leistung/detail" className="btn btn-ghost btn-md">
              Details ansehen{" "}
              <span className="arr">
                <CTIcon name="arrow-up-r" size={14} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTLeistungBlocks() {
  const blocks = [
    {
      n: "01",
      t: "Unfallgutachten",
      id: undefined,
      eyebrow: "KERNLEISTUNG",
      d: "Vollwertiges Schadensgutachten — beweissicher, gerichtsfest, in der Sprache der Versicherer.",
      bullets: [
        "Reparaturkostenkalkulation",
        "Wertminderung nach BVSK",
        "Wiederbeschaffungs- & Restwert",
        "Foto- und Schadendokumentation",
        "Versand an Versicherer",
      ],
      preis: "ab 450 €*",
      href: "/leistungen/unfallgutachten-hamburg",
      label: "Unfallgutachten im Detail",
    },
    {
      n: "02",
      t: "Fahrzeugbewertung",
      id: "bewertung",
      eyebrow: "WERTERMITTLUNG",
      d: "Neutrale Wertermittlung mit Marktbegründung — für Verkauf, Erbfall, Scheidung, Steuer.",
      bullets: [
        "Händlereinkaufswert",
        "Marktwert / Zeitwert",
        "Wiederbeschaffungswert",
        "Begründung mit Schwacke / DAT",
        "PDF-Gutachten",
      ],
      preis: "ab 280 €",
      href: "/leistungen/fahrzeugbewertung-hamburg",
      label: "Fahrzeugbewertung im Detail",
    },
    {
      n: "03",
      t: "Kostenvoranschlag",
      id: "kostenvoranschlag",
      eyebrow: "SCHNELL & GÜNSTIG",
      d: "Für kleine Schäden — schnelle Reparaturkalkulation ohne Gutachten.",
      bullets: [
        "Werkstatt-konforme Kalkulation",
        "Material & Lohn",
        "Lackier-/Karosseriearbeiten",
        "Innerhalb 24 h",
        "Festpreis",
      ],
      preis: "Festpreis 89 €",
      href: undefined,
    },
  ];
  return (
    <CTSection tone="paper2">
      <CTSectionHead
        num="B"
        name="Leistungskatalog"
        meta="Drei Bausteine"
        hSmall="Im Detail. Was Sie jeweils bekommen."
      >
        <h2 style={{ maxWidth: "20ch" }}>
          Drei Leistungen. <em>Transparente Preise.</em>
        </h2>
      </CTSectionHead>

      <div style={{ borderTop: "1px solid var(--rule-strong)" }}>
        {blocks.map((b) => (
          <article
            id={b.id}
            key={b.n}
            className="row-grid row-leistung"
            style={{
              gap: 32,
              padding: "40px 0",
              borderBottom: "1px solid var(--rule)",
            }}
          >
            <div style={{ display: "grid", gap: 8 }}>
              <span className="slash" style={{ color: "var(--accent)" }}>
                {b.eyebrow}
              </span>
              <span className="mono" style={{ color: "var(--muted)" }}>
                {b.n} / 03
              </span>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: "clamp(36px, 4vw, 56px)",
                letterSpacing: "-0.035em",
                lineHeight: 0.95,
              }}
            >
              <span style={{ color: "var(--accent)" }}>{b.n}.</span> {b.t}
            </h3>
            <div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.55,
                  color: "var(--ink)",
                  marginBottom: 14,
                }}
              >
                {b.d}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: 6,
                }}
              >
                {b.bullets.map((bl) => (
                  <li
                    key={bl}
                    style={{
                      display: "flex",
                      gap: 10,
                      fontSize: 13,
                      alignItems: "center",
                      color: "var(--muted)",
                    }}
                  >
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        background: "var(--ink)",
                        borderRadius: "50%",
                      }}
                    />{" "}
                    {bl}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                display: "grid",
                gap: 12,
                justifyItems: "end",
                textAlign: "right",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: 20,
                  letterSpacing: "-0.02em",
                }}
              >
                {b.preis}
              </span>
              {b.href && (
                <Link href={b.href} className="btn btn-ghost btn-sm">
                  {b.label} <CTIcon name="arrow" size={12} />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
      <p
        className="mono"
        style={{ marginTop: 18, color: "var(--muted)", fontSize: 11 }}
      >
        * Honorar richtet sich nach Schadenhöhe gemäß BVSK-Honorarbefragung. Bei
        unverschuldetem Haftpflichtschaden trägt die gegnerische Versicherung
        die Kosten — für Sie 0 €.
      </p>

      <div
        style={{
          marginTop: 40,
          padding: "24px 32px",
          background: "var(--paper)",
          border: "1px solid var(--rule-strong)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>
          <span className="slash" style={{ color: "var(--accent)" }}>
            Ausführlicher Katalog
          </span>
          <h4
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 800,
              fontSize: 20,
              marginTop: 4,
            }}
          >
            Möchten Sie alle Details, Abläufe und Checklisten sehen?
          </h4>
        </div>
        <Link href="/leistung/detail" className="btn btn-accent btn-md">
          Zur Detailseite <CTIcon name="arrow" size={14} stroke="var(--paper)" />
        </Link>
      </div>
    </CTSection>
  );
}

function CTServicegebiet() {
  const orte = [
    "Hamburg-Mitte",
    "Altona",
    "Eimsbüttel",
    "Wandsbek",
    "Bergedorf",
    "Harburg",
    "Nord",
    "Norderstedt",
    "Pinneberg",
    "Ahrensburg",
    "Reinbek",
    "Buchholz",
  ];
  return (
    <CTSection>
      <CTSectionHead
        num="C"
        name="Servicegebiet"
        meta="Hamburg & Umland"
        hSmall="Sie bleiben, wo Sie sind."
      >
        <h2 style={{ maxWidth: "20ch" }}>
          Mobile Begutachtung.{" "}
          <em>In 24 Stunden vor Ort.</em>
        </h2>
      </CTSectionHead>

      <div className="split-wide-left" style={{ gap: 24 }}>
        <figure
          style={{
            margin: 0,
            position: "relative",
            aspectRatio: "16 / 9",
            border: "1px solid var(--rule-strong)",
            overflow: "hidden",
            background: "var(--paper-2)",
          }}
        >
          <Image
            src={assetUrl("hamburg-map.png")}
            alt="Karte von Hamburg mit Service-Radius"
            fill
            sizes="(max-width: 880px) 100vw, 60vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            placeholder="blur"
            blurDataURL={ASSET_BLUR_DATA_URL}
          />
        </figure>
        <div
          style={{
            padding: "clamp(24px, 3vw, 32px)",
            background: "var(--ink)",
            color: "var(--paper)",
          }}
        >
          <span className="slash" style={{ color: "var(--accent)" }}>
            Wir kommen zu Ihnen
          </span>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 24,
              lineHeight: 1.3,
              marginTop: 18,
              color: "var(--paper)",
            }}
          >
            Bei Ihnen, in der Werkstatt oder am Standort des Fahrzeugs.
          </p>
          <div
            style={{
              marginTop: 28,
              paddingTop: 24,
              borderTop: "1px solid #ffffff20",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 10,
            }}
          >
            {orte.map((o) => (
              <div
                key={o}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "var(--paper)",
                  display: "flex",
                  gap: 8,
                  letterSpacing: "0.04em",
                }}
              >
                <span style={{ color: "var(--accent)" }}>+</span> {o}
              </div>
            ))}
          </div>
        </div>
      </div>
    </CTSection>
  );
}

export default function LeistungPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-fade">
        <CTLeistungHero />
        <HaftpflichtToggle />
        <CTLeistungBlocks />
        <CTServicegebiet />
      </main>
      <SiteFooter />
      <CTTimeStamp />
    </>
  );
}
