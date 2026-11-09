import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import CTTimeStamp from "../../components/CTTimeStamp";
import {
  CTIcon,
  CTSection,
  CTSectionHead,
} from "../../components/ct-primitives";
import { mailHref } from "@/lib/cartrust";

const pageUrl = "https://cartrust24.de/leistungen/fahrzeugbewertung-hamburg";
const ctaPhone = "+49 15567 487073";
const ctaPhoneRaw = "+4915567487073";
const ctaTelHref = `tel:${ctaPhoneRaw}`;
const ctaWaHref = `https://wa.me/${ctaPhoneRaw.replace("+", "")}`;

const assessmentOccasions = [
  {
    kennung: "ANLASS 01",
    title: "Verkauf und Ankauf",
    text: "Sie verkaufen privat oder verhandeln mit einem Händler. Ein neutraler Wert nimmt dem Gegenüber das wichtigste Argument aus der Hand: die Behauptung, das Fahrzeug sei weniger wert. Wir ermitteln Händlereinkaufswert und Marktwert getrennt, damit Sie genau wissen, wo Ihre Verhandlungsspanne beginnt und wo sie endet.",
  },
  {
    kennung: "ANLASS 02",
    title: "Erbfall, Scheidung, Steuer",
    text: "Nachlass, Zugewinnausgleich, Betriebsvermögen, Entnahme aus dem Betriebsvermögen: Hier zählt ein Wert zu einem bestimmten Stichtag, mit sauberer Herleitung. Wir bewerten auf den geforderten Stichtag und liefern ein Gutachten in einer Form, mit der Anwälte, Notare und Finanzämter arbeiten können.",
  },
  {
    kennung: "ANLASS 03",
    title: "Oldtimer und Youngtimer",
    text: "Für das H-Kennzeichen, den Versicherungswert oder den Verkauf. Wir vergeben eine Zustandsnote von 1 bis 5, dokumentieren Originalität, Restaurierungsstand und Historie und ermitteln Markt- und Wiederbeschaffungswert. Bei Klassikern ist der Zustand wichtiger als das Baujahr — und der lässt sich nur am Fahrzeug beurteilen.",
  },
  {
    kennung: "ANLASS 04",
    title: "Leasingrückgabe und Minderwert",
    text: "Vor der Rückgabe wissen, was auf Sie zukommt — oder eine bereits gestellte Nachforderung prüfen lassen. Wir dokumentieren den Zustand vor der Übergabe und bewerten, welche Spuren als normale Gebrauchsspuren gelten und welche darüber hinausgehen. Das ist die Grundlage, auf der sich diskutieren lässt.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Fahrzeugbewertung Hamburg | PDF-Gutachten – CARTRUST24",
  },
  description:
    "Professionelle Fahrzeugbewertung in Hamburg ab 280 €. Belegt, begründet und nachvollziehbar für Verkauf, Erbfall, Scheidung oder Oldtimer.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Fahrzeugbewertung Hamburg | CARTRUST24",
    description:
      "Was Ihr Auto wirklich wert ist — belegt, begründet, nachvollziehbar. PDF-Gutachten in der Regel innerhalb von 48 Stunden.",
    url: pageUrl,
    siteName: "CARTRUST24",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahrzeugbewertung Hamburg | CARTRUST24",
    description:
      "Was Ihr Auto wirklich wert ist — belegt, begründet, nachvollziehbar. PDF-Gutachten in der Regel innerhalb von 48 Stunden.",
  },
};

function PageHero() {
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
            flexWrap: "wrap",
          }}
        >
          <span className="slash">
            FAHRZEUGBEWERTUNG <span style={{ color: "var(--accent)" }}>·</span> HAMBURG
          </span>
          <span style={{ marginLeft: "auto" }} className="slash">
            AB 280 € <span style={{ color: "var(--accent)" }}>·</span> PDF-GUTACHTEN
          </span>
        </div>

        <h1
          className="display"
          style={{
            fontSize: "var(--t-h1)",
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            fontWeight: 900,
            maxWidth: "18ch",
            color: "var(--ink)",
          }}
        >
          Fahrzeugbewertung in Hamburg
        </h1>

        <div style={{ marginTop: 24, display: "grid", gap: 24 }}>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "var(--t-h3)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: "36ch",
              color: "var(--ink)",
            }}
          >
            Was Ihr Auto wirklich wert ist — belegt, begründet, nachvollziehbar.
          </p>
          <p
            style={{
              fontSize: "var(--t-body)",
              lineHeight: 1.65,
              maxWidth: "66ch",
              color: "var(--ink)",
            }}
          >
            Ob Verkauf, Erbfall, Scheidung oder Oldtimer: Ein Wert ohne Begründung
            ist nur eine Behauptung. Wir nehmen Ihr Fahrzeug vor Ort auf,
            dokumentieren Zustand und Ausstattung und leiten den Wert aus dem
            tatsächlichen Marktgeschehen ab — nachvollziehbar für Käufer, Anwälte,
            Gerichte und Finanzämter. Sie erhalten ein vollständiges PDF-Gutachten,
            in der Regel innerhalb von 48 Stunden nach dem Termin.
          </p>
        </div>

        <div className="hero-cta-group">
          <a href={ctaTelHref} className="btn btn-accent btn-md">
            <CTIcon name="phone" size={16} stroke="var(--paper)" /> Jetzt anrufen
          </a>
          <a href={ctaWaHref} className="btn btn-ghost btn-md">
            <CTIcon name="wa" size={16} /> WhatsApp-Chat
          </a>
          <a href="/kontakt" className="slash" style={{ padding: "8px 0" }}>
            Bewertung anfragen <CTIcon name="arrow-up-r" size={14} />
          </a>
        </div>

        <style>{`
          .hero-cta-group {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 16px;
            flex-wrap: wrap;
            margin-top: 32px;
          }
          @media (max-width: 720px) {
            .hero-cta-group {
              flex-direction: column;
              align-items: stretch;
            }
            .hero-cta-group .btn {
              justify-content: center;
              width: 100%;
            }
            .hero-cta-group .slash {
              justify-content: center;
              width: 100%;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

function AssessmentOccasionsSection() {
  return (
    <CTSection tone="paper2">
      <CTSectionHead
        num="01"
        name="WANN SIE EINE BEWERTUNG BRAUCHEN"
        meta="VIER TYPISCHE ANLÄSSE"
        hSmall="Der Anlass entscheidet, welcher Wert ermittelt wird."
      >
        <h2>
          Vier Gründe, das <em>schwarz auf weiß</em> zu haben.
        </h2>
      </CTSectionHead>

      <div className="grid-2" style={{ gap: 20 }}>
        {assessmentOccasions.map((item) => (
          <article
            key={item.kennung}
            style={{
              padding: "clamp(24px, 4vw, 40px)",
              background: "var(--paper)",
              border: "1px solid var(--rule)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <span
              className="mono"
              style={{ color: "var(--muted)", fontSize: "var(--t-mono)" }}
            >
              {item.kennung}
            </span>
            <h3
              style={{
                fontSize: "var(--t-h3)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                margin: 0,
                color: "var(--ink)",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "var(--t-body)",
                color: "var(--ink)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {item.text}
            </p>
          </article>
        ))}
      </div>
    </CTSection>
  );
}

const valueDefinitions = [
  {
    num: "01",
    title: "Händlereinkaufswert",
    description:
      "Was ein Händler Ihnen für das Fahrzeug zahlen würde. Von den fünf Werten immer der niedrigste.",
    relevantFor: "Inzahlungnahme, Verhandlung",
  },
  {
    num: "02",
    title: "Händlerverkaufswert",
    description:
      "Was dasselbe Fahrzeug beim Händler kosten würde, einschließlich Aufbereitung und Gewährleistung.",
    relevantFor: "Markteinordnung, Vergleich",
  },
  {
    num: "03",
    title: "Marktwert oder Zeitwert",
    description:
      "Der realistisch erzielbare Preis im Privatverkauf, bezogen auf den Bewertungsstichtag.",
    relevantFor: "Verkauf, Erbfall, Scheidung, Steuer",
  },
  {
    num: "04",
    title: "Wiederbeschaffungswert",
    description:
      "Was Sie zahlen müssten, um ein gleichwertiges Fahrzeug bei einem seriösen Händler zu bekommen.",
    relevantFor: "Versicherung, Totalschaden",
  },
  {
    num: "05",
    title: "Restwert",
    description:
      "Was das Fahrzeug im beschädigten oder nicht fahrbereiten Zustand am Markt noch erzielt.",
    relevantFor: "Totalschaden, Unfallfahrzeug",
  },
];

function ValueDefinitionsSection() {
  return (
    <CTSection>
      <CTSectionHead
        num="02"
        name="WELCHER WERT GILT WANN?"
        meta="FÜNF BEGRIFFE, FÜNF BEDEUTUNGEN"
        hSmall="Der häufigste Streitpunkt ist nicht die Zahl, sondern welche Zahl gemeint ist."
      >
        <h2>
          Nicht jeder Wert ist <em>derselbe Wert.</em>
        </h2>
      </CTSectionHead>

      <div style={{ borderTop: "1px solid var(--rule-strong)" }}>
        {valueDefinitions.map((item) => (
          <article key={item.num} className="value-row">
            <span className="mono value-num">{item.num}</span>
            <div className="value-main">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="value-meta">
              Relevant bei: {item.relevantFor}
            </div>
          </article>
        ))}
      </div>

      <p
        style={{
          marginTop: "clamp(32px, 5vw, 48px)",
          fontSize: "var(--t-body)",
          lineHeight: 1.65,
          color: "var(--ink)",
        }}
      >
        Sie wissen nicht, welchen Wert Sie brauchen? Nennen Sie uns den Anlass
        — die Zuordnung übernehmen wir.
      </p>

      <style>{`
        .value-row {
          display: grid;
          grid-template-columns: 48px 1fr 280px;
          gap: 24px;
          align-items: baseline;
          padding: 28px 0;
          border-bottom: 1px solid var(--rule);
        }
        .value-num {
          color: var(--muted);
          font-size: var(--t-mono);
        }
        .value-main {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .value-main h3 {
          font-size: clamp(20px, 2.2vw, 28px);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: var(--ink);
          margin: 0;
        }
        .value-main p {
          font-size: var(--t-body);
          line-height: 1.6;
          color: var(--ink);
          margin: 0;
        }
        .value-meta {
          color: var(--muted);
          font-size: var(--t-small);
          line-height: 1.5;
          text-align: right;
          justify-self: end;
        }
        @media (max-width: 880px) {
          .value-row {
            grid-template-columns: 36px 1fr;
            gap: 12px 16px;
            padding: 20px 0;
          }
          .value-meta {
            grid-column: 2;
            text-align: left;
            justify-self: start;
          }
        }
      `}</style>
    </CTSection>
  );
}

const reportContents = [
  {
    num: "01",
    title: "Fahrzeug- und Ausstattungsaufnahme",
    text: "Identifikation über die Fahrzeug-Identifizierungsnummer, vollständige Ausstattungsliste, Laufleistung, Anzahl der Vorbesitzer, Schlüssel und Papiere.",
  },
  {
    num: "02",
    title: "Zustandsbewertung",
    text: "Karosserie, Lack, Innenraum, Technik und Reifen. Dokumentiert mit Fotos, nicht mit Adjektiven.",
  },
  {
    num: "03",
    title: "Vorschäden und Lackschichtmessung",
    text: "Wir messen die Lackstärke an allen relevanten Stellen. Nachlackierungen und reparierte Vorschäden beeinflussen den Wert erheblich — und fallen jedem aufmerksamen Käufer ohnehin auf.",
  },
  {
    num: "04",
    title: "Marktrecherche",
    text: "Vergleichsangebote aus dem realen Markt, ergänzt um die Bewertungssysteme Schwacke und DAT als Referenz. Beides wird im Gutachten offengelegt und ist nachprüfbar.",
  },
  {
    num: "05",
    title: "Wertansatz mit Begründung",
    text: "Die ermittelten Werte, jeweils mit der vollständigen Herleitung. Eine Zahl ohne Begründung hält keiner Diskussion stand.",
  },
  {
    num: "06",
    title: "PDF-Gutachten mit Fotodokumentation",
    text: "Das vollständige Gutachten als PDF, auf Wunsch zusätzlich gedruckt und unterschrieben.",
  },
];

function ReportContentsSection() {
  return (
    <CTSection tone="paper2">
      <CTSectionHead
        num="03"
        name="WAS IM GUTACHTEN STEHT"
        meta="SECHS BESTANDTEILE"
        hSmall="Kein Schätzwert aus einer Online-Maske."
      >
        <h2>
          Was Sie am Ende <em>in der Hand halten.</em>
        </h2>
      </CTSectionHead>

      <div className="grid-3" style={{ gap: 20 }}>
        {reportContents.map((item) => (
          <article
            key={item.num}
            style={{
              padding: "clamp(24px, 4vw, 40px)",
              background: "var(--paper)",
              border: "1px solid var(--rule)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <span
              className="mono"
              style={{ color: "var(--muted)", fontSize: "var(--t-mono)" }}
            >
              {item.num}
            </span>
            <h3
              style={{
                fontSize: "var(--t-h3)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.025em",
                margin: 0,
                color: "var(--ink)",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "var(--t-body)",
                color: "var(--ink)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {item.text}
            </p>
          </article>
        ))}
      </div>

      <p
        style={{
          marginTop: "clamp(32px, 5vw, 48px)",
          paddingTop: 24,
          borderTop: "1px solid var(--rule)",
          fontSize: "var(--t-body)",
          lineHeight: 1.65,
          color: "var(--ink)",
        }}
      >
        Auf Wunsch bewerten wir auf einen zurückliegenden Stichtag. Bei
        Erbfällen und beim Zugewinnausgleich ist das notwendig, nicht optional.
      </p>
    </CTSection>
  );
}

function FinalCta() {
  return (
    <CTSection tone="dark">
      <div className="split-wide-left" style={{ gap: 48, alignItems: "end" }}>
        <div>
          <span className="slash" style={{ color: "var(--accent)" }}>
            Unfall gehabt?
          </span>
          <h2
            style={{
              color: "var(--paper)",
              marginTop: 20,
              fontSize: "clamp(44px, 7vw, 104px)",
              maxWidth: "12ch",
            }}
          >
            Jede Stunde <em>zählt.</em>
          </h2>
          <p
            style={{
              color: "var(--paper)",
              marginTop: 24,
              lineHeight: 1.65,
              fontSize: 17,
              maxWidth: "58ch",
            }}
          >
            Rufen Sie an – 24 h erreichbar, Termin meist innerhalb eines Tages.
            Wir prüfen Ihren Fall, sagen Ihnen ehrlich, ob Sie ein Gutachten
            brauchen, und sichern Ihre Ansprüche.
          </p>
        </div>
        <div style={{ display: "grid", gap: 12 }}>
          <a href={ctaTelHref} className="btn btn-accent btn-lg">
            <CTIcon name="phone" size={16} stroke="var(--paper)" /> {ctaPhone}
          </a>
          <a
            href={ctaWaHref}
            className="btn btn-md"
            style={{ borderColor: "#ffffff44", color: "var(--paper)" }}
          >
            <CTIcon name="wa" size={16} /> WhatsApp-Chat
          </a>
          <a
            href={mailHref}
            className="btn btn-md"
            style={{ borderColor: "#ffffff44", color: "var(--paper)" }}
          >
            <CTIcon name="mail" size={16} /> E-Mail schreiben
          </a>
        </div>
      </div>
    </CTSection>
  );
}

export default function FahrzeugbewertungHamburgPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-fade">
        <PageHero />
        <AssessmentOccasionsSection />
        <ValueDefinitionsSection />
        <ReportContentsSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <CTTimeStamp />
    </>
  );
}
