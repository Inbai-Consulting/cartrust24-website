import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import CTTimeStamp from "../../components/CTTimeStamp";
import {
  CTIcon,
  CTSection,
  CTSectionHead,
} from "../../components/ct-primitives";
import { telHref, CT_BRAND } from "@/lib/cartrust";

export const metadata: Metadata = {
  title: "Leistungsdetails – Gutachten, Bewertung & Ablauf",
  description:
    "Detaillierte Übersicht aller Leistungen von CARTRUST24 in Hamburg: Unfallgutachten, Fahrzeugbewertung, Kostenvoranschlag, Ablauf und erforderliche Unterlagen.",
  alternates: { canonical: "/leistung/detail" },
};

function CTDetailHero() {
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
            <Link href="/leistung" style={{ color: "inherit", textDecoration: "none" }}>
              Leistung
            </Link>{" "}
            &nbsp;·&nbsp; Detailübersicht
          </span>
          <span style={{ marginLeft: "auto" }} className="slash">
            Hamburg &amp; Umland &nbsp;·&nbsp; Vor Ort in 24h
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
          Unsere Leistungen
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
          im Detail erklärt.
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
              maxWidth: "54ch",
              color: "var(--ink)",
            }}
          >
            Vom Schadensgutachten nach einem Unfall über neutral qualifizierte
            Fahrzeugbewertungen bis hin zum schnellen Kostenvoranschlag: Erfahren
            Sie hier alle Details zu unseren Leistungen, Abläufen und Standards.
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
              Termin anfragen{" "}
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

function CTDetailLeistungen() {
  const services = [
    {
      id: "unfallgutachten",
      n: "01",
      title: "Unfallgutachten / Schadensgutachten",
      subtitle: "Umfassende Beweissicherung & gerichtsfeste Schadenskalkulation",
      tag: "Haftpflicht & Kasko",
      intro:
        "Nach einem unverschuldeten Unfall benötigen Sie ein unabhängiges Gutachten, um Ihre Ansprüche gegenüber der gegnerischen Versicherung vollständig und gerichtsfest durchzusetzen.",
      features: [
        "Reparaturkostenkalkulation nach Herstellervorgaben (Audatex / DAT)",
        "Ermittlung der merkantilen Wertminderung nach BVSK-Methodik",
        "Bestimmung des Wiederbeschaffungswertes & Restwertes",
        "Genaue Feststellung der Nutzungsausfallklasse & Ausfalldauer",
        "Lückenlose Fotodokumentation inklusive Karosserie- & Strukturanalyse",
        "Direkte Übermittlung an Versicherung und Anwalt",
      ],
      pricingNote:
        "Kostenfrei für Sie bei einem unverschuldeten Haftpflichtschaden (Kosten trägt die Versicherung des Verursachers).",
    },
    {
      id: "fahrzeugbewertung",
      n: "02",
      title: "Fahrzeugbewertung & Wertgutachten",
      subtitle: "Neutrale Ermittlung des tatsächlichen Marktwertes",
      tag: "Kauf & Verkauf",
      intro:
        "Ob für den An- oder Verkauf eines Gebrauchtwagens, im Rahmen von Erbschaften, Scheidungen, Leasingrückgaben oder für bilanzielle Zwecke – wir ermitteln den exakten Marktwert.",
      features: [
        "Systematische Zustands- und Lackdickenprüfung vor Ort",
        "Abgleich aller Ausstattungsmerkmale & Sonderausstattungen",
        "Bewertung von Vorschäden und Allgemeinzustand",
        "Prüfung nach Schwacke / DAT und aktuellen Marktdatenbanken",
        "Ausführlicher Befundbericht als zertifiziertes PDF-Gutachten",
      ],
      pricingNote: "Ab 280 € Festpreis je nach Fahrzeugtyp und Umfang.",
    },
    {
      id: "kostenvoranschlag",
      n: "03",
      title: "Kostenvoranschlag & Kurzgutachten",
      subtitle: "Schnelle Reparaturkalkulation für Bagatellschäden",
      tag: "Schäden unter 1.000 €",
      intro:
        "Liegt die Schadenshöhe unterhalb der versicherungsrechtlichen Bagatellgrenze (ca. 1.000 €), reicht häufig ein qualifizierter Kostenvoranschlag zur Regulierung aus.",
      features: [
        "Schnelle Erstellung innerhalb von 24 Stunden",
        "Detaillierte Aufschlüsselung von Lohn-, Material- & Lackierkosten",
        "Standardisierte Formatierung für prompte Versicherungsakzeptanz",
        "Digitale Übermittlung direkt in Ihre Mailbox",
      ],
      pricingNote: "Festpreis 89 €.",
    },
  ];

  return (
    <CTSection tone="paper2">
      <CTSectionHead
        num="A"
        name="Leistungsdetails"
        meta="3 Kernbereiche"
        hSmall="Der volle Leistungsumfang auf einen Blick."
      >
        <h2 style={{ maxWidth: "22ch" }}>
          Was gehört zu <em>welcher Leistung?</em>
        </h2>
      </CTSectionHead>

      <div style={{ display: "grid", gap: 48, marginTop: 40 }}>
        {services.map((s) => (
          <article
            key={s.id}
            id={s.id}
            style={{
              padding: "clamp(28px, 4vw, 40px)",
              background: "var(--paper)",
              border: "1px solid var(--rule-strong)",
              display: "grid",
              gap: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid var(--rule)",
                paddingBottom: 16,
              }}
            >
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <span className="mono" style={{ color: "var(--accent)", fontWeight: 700 }}>
                  {s.n}
                </span>
                <span className="slash">{s.subtitle}</span>
              </div>
              <span className="chip">{s.tag}</span>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  letterSpacing: "-0.03em",
                  marginBottom: 12,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--ink)",
                  maxWidth: "68ch",
                }}
              >
                {s.intro}
              </p>
            </div>

            <div>
              <span className="slash" style={{ marginBottom: 12, display: "block" }}>
                Enthaltene Prüfleistungen:
              </span>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 12,
                }}
              >
                {s.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      gap: 10,
                      fontSize: 14,
                      lineHeight: 1.4,
                      color: "var(--ink)",
                      alignItems: "flex-start",
                    }}
                  >
                    <CTIcon name="check" size={16} stroke="var(--accent)" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                paddingTop: 16,
                borderTop: "1px solid var(--rule)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <span className="mono" style={{ fontSize: 13, color: "var(--muted)" }}>
                {s.pricingNote}
              </span>
              <Link href="/kontakt" className="btn btn-ghost btn-sm">
                Jetzt anfragen <CTIcon name="arrow" size={12} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </CTSection>
  );
}

function CTAblauf() {
  const schritte = [
    {
      step: "01",
      title: "Erstkontakt & Terminvereinbarung",
      desc: "Rufen Sie uns an oder schreiben Sie uns per WhatsApp oder E-Mail. Wir vereinbaren sofort einen Vor-Ort-Termin in Hamburg oder Umgebung.",
    },
    {
      step: "02",
      title: "Vor-Ort Schadensaufnahme",
      desc: "Unsere Sachverständigen untersuchen das Fahrzeug am Standort Ihrer Wahl (bei Ihnen zu Hause, am Arbeitsplatz oder in der Werkstatt) und nehmen alle Schäden auf.",
    },
    {
      step: "03",
      title: "Erstellung des Gutachtens",
      desc: "Wir berechnen die Reparaturkosten, ermitteln Wertminderung sowie Nutzungsausfall und fertigen das fertige Gutachten mit Fotodokumentation an.",
    },
    {
      step: "04",
      title: "Versand & Abrechnung",
      desc: "Das fertige Gutachten geht direkt an die gegnerische Versicherung (oder Ihren Anwalt). Bei Haftpflichtschäden rechnen wir direkt mit der Versicherung ab.",
    },
  ];

  return (
    <CTSection>
      <CTSectionHead
        num="B"
        name="Ablauf"
        meta="4 Schritte zum fertigen Gutachten"
        hSmall="Transparent & unkompliziert."
      >
        <h2 style={{ maxWidth: "20ch" }}>
          In 4 Schritten <em>zur Schadensregulierung.</em>
        </h2>
      </CTSectionHead>

      <div
        className="grid-4"
        style={{ borderTop: "1px solid var(--rule-strong)", marginTop: 32 }}
      >
        {schritte.map((st, i) => (
          <div
            key={st.step}
            style={{
              padding: "clamp(24px, 3vw, 36px) clamp(16px, 2vw, 24px) clamp(24px, 3vw, 36px) 0",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              borderRight: i < 3 ? "1px solid var(--rule)" : "none",
              paddingLeft: i === 0 ? 0 : "clamp(16px, 2vw, 24px)",
              borderBottom: "1px solid var(--rule-strong)",
            }}
          >
            <span className="mono" style={{ color: "var(--accent)", fontWeight: 700 }}>
              Schritt {st.step}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: 20,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              {st.title}
            </h3>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.55 }}>
              {st.desc}
            </p>
          </div>
        ))}
      </div>
    </CTSection>
  );
}

function CTUnterlagenCheckliste() {
  const unterlagen = [
    { title: "Zulassungsbescheinigung Teil I (Fahrzeugschein)", req: "Erforderlich" },
    { title: "Unfalldaten (Datum, Ort, gegnerisches Kennzeichen)", req: "Erforderlich" },
    { title: "Schadennummer der gegnerischen Versicherung", req: "Falls bereits vorhanden" },
    { title: "Polizeiliches Aktenzeichen", req: "Falls Polizei vor Ort war" },
    { title: "Vorreparaturunterlagen / Serviceheft", req: "Hilfreich bei Wertermittlung" },
  ];

  return (
    <CTSection tone="dark">
      <CTSectionHead
        num="C"
        name="Unterlagen"
        meta="Vorbereitung"
        hSmall="Welche Dokumente helfen beim Vor-Ort-Termin?"
      >
        <h2 style={{ maxWidth: "20ch", color: "var(--paper)" }}>
          Checkliste für <em>Ihren Termin.</em>
        </h2>
      </CTSectionHead>

      <div className="split-wide-left" style={{ gap: "clamp(28px, 5vw, 64px)", marginTop: 32 }}>
        <div>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--paper)", marginBottom: 24 }}>
            Um die Begutachtung so schnell wie möglich durchführen zu können, ist es ideal,
            wenn Sie die folgenden Unterlagen zum Besichtigungstermin bereithalten.
            Sollte etwas fehlen, unterstützen wir Sie selbstverständlich beim Einholen der Daten.
          </p>
          <div style={{ display: "grid", gap: 12 }}>
            {unterlagen.map((u) => (
              <div
                key={u.title}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 20px",
                  background: "#ffffff10",
                  border: "1px solid #ffffff20",
                }}
              >
                <span style={{ fontSize: 15, color: "var(--paper)" }}>{u.title}</span>
                <span className="mono" style={{ fontSize: 11, color: "var(--accent)" }}>
                  {u.req}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: "var(--paper)",
            color: "var(--ink)",
            padding: "clamp(24px, 3vw, 36px)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 24,
            border: "1px solid var(--rule-strong)",
          }}
        >
          <div>
            <span className="slash">Noch Fragen?</span>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: 24,
                letterSpacing: "-0.02em",
                marginTop: 12,
                marginBottom: 12,
              }}
            >
              Wir beraten Sie gerne vorab telefonisch.
            </h3>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.5 }}>
              Unsere Sachverständigen Walid Mohtasebzada und Elias Azizi stehen Ihnen für eine
              erste unverbindliche Einschätzung zur Verfügung.
            </p>
          </div>

          <div style={{ display: "grid", gap: 10 }}>
            <a href={telHref} className="btn btn-accent btn-md" style={{ justifyContent: "center" }}>
              <CTIcon name="phone" size={14} stroke="var(--paper)" /> {CT_BRAND.phone}
            </a>
            <Link href="/kontakt" className="btn btn-ghost btn-md" style={{ justifyContent: "center" }}>
              Alle Kontaktwege
            </Link>
          </div>
        </div>
      </div>
    </CTSection>
  );
}

export default function LeistungDetailPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-fade">
        <CTDetailHero />
        <CTDetailLeistungen />
        <CTAblauf />
        <CTUnterlagenCheckliste />
      </main>
      <SiteFooter />
      <CTTimeStamp />
    </>
  );
}
