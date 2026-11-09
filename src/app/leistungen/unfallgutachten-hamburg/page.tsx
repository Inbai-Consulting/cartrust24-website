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

const pageUrl = "https://cartrust24.de/leistungen/unfallgutachten-hamburg";
const ctaPhone = "+49 15567 487073";
const ctaPhoneRaw = "+4915567487073";
const ctaTelHref = `tel:${ctaPhoneRaw}`;
const ctaWaHref = `https://wa.me/${ctaPhoneRaw.replace("+", "")}`;

export const metadata: Metadata = {
  title: {
    absolute: "Unfallgutachten Hamburg | Termin in 24 h – CARTRUST24",
  },
  description:
    "Unabhängiges Unfallgutachten in Hamburg nach unverschuldetem Unfall – beweissicher, in 24 h vor Ort. Die gegnerische Versicherung zahlt. Jetzt anrufen.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Unfallgutachten Hamburg – Termin in 24 Stunden | CARTRUST24",
    description:
      "Beweissicheres Unfallgutachten in Hamburg & Umland. Vor Ort, ingenieurstechnisch, in der Sprache der Versicherer.",
    url: pageUrl,
    siteName: "CARTRUST24",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unfallgutachten Hamburg – Termin in 24 Stunden | CARTRUST24",
    description:
      "Beweissicheres Unfallgutachten in Hamburg & Umland. Vor Ort, ingenieurstechnisch, in der Sprache der Versicherer.",
  },
};

const reportContents = [
  {
    title: "Reparaturkostenkalkulation",
    text: "Vollständige Wiederherstellungskosten, auf Wunsch auch fiktiv abrechenbar",
  },
  {
    title: "Wertminderung",
    text: "Merkantiler Minderwert nach BVSK-Methodik",
  },
  {
    title: "Wiederbeschaffungs- und Restwert",
    text: "Auf Basis von Schwacke/DAT und regionalen Restwertangeboten",
  },
  {
    title: "Nutzungsausfall",
    text: "Pauschale Entschädigung je Tag ohne Fahrzeug",
  },
  {
    title: "Foto- und Schadendokumentation",
    text: "Beweissicher für die Regulierung",
  },
  {
    title: "Versand an den Versicherer",
    text: "Im aufbereiteten Format",
  },
];

const processSteps = [
  {
    title: "Kontakt",
    text: "Telefon, WhatsApp oder E-Mail. Falleinschätzung in unter 5 Minuten.",
  },
  {
    title: "Termin",
    text: "Vor Ort bei Ihnen, in der Werkstatt oder am Fahrzeugstandort, meist innerhalb von 24 Stunden.",
  },
  {
    title: "Schadensaufnahme",
    text: "Fotos, Messungen, OBD-Diagnose und Lackdickenmessung.",
  },
  {
    title: "Gutachten",
    text: "Reparaturkalkulation, Wertminderung und Bewertung als PDF, in der Regel in 2–3 Werktagen.",
  },
  {
    title: "Regulierung",
    text: "Versand an den Versicherer; Rückfragen klären wir direkt.",
  },
];

const faqItems = [
  {
    question: "Was kostet ein Unfallgutachten in Hamburg?",
    answer:
      "Bei einem unverschuldeten Unfall trägt die gegnerische Haftpflichtversicherung die Gutachterkosten – für Sie ist es dann kostenfrei. Müssen Sie selbst zahlen (z. B. bei Teilschuld), nennen wir Ihnen den Preis vorab transparent.",
  },
  {
    question: "Wie schnell bekomme ich einen Termin?",
    answer:
      "In der Regel innerhalb von 24 Stunden nach Ihrem Anruf. Eine erste Falleinschätzung geben wir direkt am Telefon – meist in unter fünf Minuten.",
  },
  {
    question: "Darf ich den Gutachter nach einem Unfall frei wählen?",
    answer:
      "Ja. Die freie Sachverständigenwahl ist gesetzlich verankert. Sie müssen keinen Gutachter der gegnerischen Versicherung akzeptieren.",
  },
  {
    question: "Ab welchem Schaden lohnt sich ein Vollgutachten?",
    answer:
      "Faustregel: ab etwa 1.000 € Schaden. Darunter reicht oft ein Kostenvoranschlag – wir sagen Ihnen ehrlich, was sinnvoll ist.",
  },
  {
    question: "Bekomme ich auch Wertminderung und Nutzungsausfall erstattet?",
    answer:
      "Bei einem Haftpflichtschaden in der Regel ja. Beides gehört zu den Positionen, die wir im Gutachten ausweisen und gegenüber dem Versicherer begründen.",
  },
  {
    question: "Was bringe ich zum Termin mit?",
    answer:
      "Fahrzeugschein, Ihre Kontaktdaten, die Unfalldaten der Gegenseite (Kennzeichen, Versicherung) und – falls vorhanden – eigene Unfallfotos.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: faqItems.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
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
          <span className="slash">Unfallgutachten · Hamburg</span>
          <span style={{ marginLeft: "auto" }} className="slash">
            Vor Ort · 24 h
          </span>
        </div>

        <h1
          className="display"
          style={{
            fontSize: "clamp(36px, 9vw, 144px)",
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            fontWeight: 900,
            maxWidth: "15ch",
          }}
        >
          Unfallgutachten in Hamburg
        </h1>

        <div
          className="split-narrow split-end"
          style={{
            marginTop: "clamp(40px, 6vw, 80px)",
            gap: "clamp(28px, 5vw, 80px)",
          }}
        >
          <div style={{ display: "grid", gap: 24 }}>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(21px, 3vw, 40px)",
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                maxWidth: "32ch",
              }}
            >
              Beweissicher dokumentiert, ingenieurstechnisch geprüft – damit
              die Versicherung zahlt, was Ihnen zusteht.
            </p>
            <p
              style={{
                fontSize: "clamp(16px, 1.5vw, 19px)",
                lineHeight: 1.65,
                maxWidth: "66ch",
                color: "var(--muted)",
              }}
            >
              Nach einem unverschuldeten Unfall entscheidet die Dokumentation,
              wie viel Sie am Ende erstattet bekommen. Als unabhängige
              Kfz-Sachverständige in Hamburg nehmen wir Ihren Schaden vor Ort
              auf – meist innerhalb von 24 Stunden, beweissicher und in der
              Sprache, die Versicherer verstehen. Den Gutachter wählen Sie
              frei. Bei einem Haftpflichtschaden trägt die gegnerische
              Versicherung die Kosten; für Sie ist das Gutachten dann
              kostenfrei.
            </p>
          </div>
          <div style={{ display: "grid", gap: 12, justifyItems: "start" }}>
            <a href={ctaTelHref} className="btn btn-accent btn-lg">
              <CTIcon name="phone" size={16} stroke="var(--paper)" /> Jetzt
              anrufen
            </a>
            <a href={ctaWaHref} className="btn btn-ghost btn-md">
              <CTIcon name="wa" size={16} /> WhatsApp-Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function NeedReportSection() {
  return (
    <CTSection tone="paper2">
      <CTSectionHead
        num="01"
        name="Wann Sie ein Unfallgutachten brauchen"
        meta="Ehrliche Falleinschätzung"
        hSmall="Nicht jeder Schaden braucht ein Vollgutachten – aber jeder Schaden braucht eine ehrliche Einschätzung."
      >
        <h2>
          Die Schadenshöhe gibt die <em>Richtung vor.</em>
        </h2>
      </CTSectionHead>

      <div className="grid-2" style={{ gap: 20 }}>
        <article
          style={{
            padding: "clamp(24px, 4vw, 40px)",
            background: "var(--paper)",
            border: "1px solid var(--rule-strong)",
          }}
        >
          <span className="slash" style={{ color: "var(--accent)" }}>
            Über ca. 1.000 € Schaden
          </span>
          <h3 style={{ fontSize: 28, marginTop: 16, marginBottom: 12 }}>
            Ein Vollgutachten lohnt sich fast immer.
          </h3>
          <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
            Es sichert Reparaturkosten, Wertminderung und weitere Positionen,
            die in einem Kostenvoranschlag fehlen.
          </p>
        </article>
        <article
          style={{
            padding: "clamp(24px, 4vw, 40px)",
            background: "var(--paper)",
            border: "1px solid var(--rule-strong)",
          }}
        >
          <span className="slash">Unter ca. 1.000 € Schaden</span>
          <h3 style={{ fontSize: 28, marginTop: 16, marginBottom: 12 }}>
            Häufig genügt ein Kostenvoranschlag.
          </h3>
          <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
            Das ist schneller und günstiger. Wir sagen Ihnen ehrlich, was in
            Ihrem Fall sinnvoll ist.
          </p>
        </article>
      </div>

      <div
        style={{
          marginTop: 24,
          padding: "24px clamp(24px, 4vw, 40px)",
          background: "var(--ink)",
          color: "var(--paper)",
          display: "flex",
          gap: 16,
          alignItems: "flex-start",
        }}
      >
        <CTIcon name="warn" size={22} stroke="var(--accent)" />
        <p style={{ lineHeight: 1.6, maxWidth: "88ch" }}>
          <strong>Wichtig:</strong> Lassen Sie sich keinen Gutachter von der
          gegnerischen Versicherung aufdrängen. Deren Sachverständiger arbeitet
          auch für die Versicherung – Sie haben das Recht auf einen eigenen,
          unabhängigen Gutachter.
        </p>
      </div>
    </CTSection>
  );
}

function ReportContentsSection() {
  return (
    <CTSection>
      <CTSectionHead
        num="02"
        name="Was in Ihrem Gutachten steht"
        meta="Vollständige Dokumentation"
        hSmall="Mehr als eine reine Reparaturkalkulation."
      >
        <h2>
          Wir prüfen, berechnen und <em>dokumentieren.</em>
        </h2>
      </CTSectionHead>

      <div className="grid-3" style={{ gap: 16 }}>
        {reportContents.map((item) => (
          <article
            key={item.title}
            style={{
              padding: 28,
              border: "1px solid var(--rule)",
              display: "grid",
              gap: 12,
              alignContent: "start",
            }}
          >
            <CTIcon name="check" size={18} stroke="var(--accent)" />
            <h3 style={{ fontSize: 19 }}>{item.title}</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.55, fontSize: 14 }}>
              {item.text}
            </p>
          </article>
        ))}
      </div>

      <p
        style={{
          marginTop: 32,
          paddingTop: 24,
          borderTop: "1px solid var(--rule-strong)",
          fontSize: "clamp(16px, 1.5vw, 19px)",
          lineHeight: 1.65,
          maxWidth: "76ch",
        }}
      >
        Die technische Prüfung – Karosserie- und Strukturschäden,
        Fahrzeugelektronik, Reparaturwege nach Herstellervorgabe – verantwortet
        ein Ingenieur (B.Eng. Fahrzeugtechnik), bevor das Gutachten das Haus
        verlässt.
      </p>
    </CTSection>
  );
}

function ProcessSection() {
  return (
    <CTSection tone="paper2">
      <CTSectionHead
        num="03"
        name="Ablauf – vom Anruf bis zur Regulierung"
        meta="Fünf klare Schritte"
        hSmall="Persönlich begleitet, transparent umgesetzt."
      >
        <h2>
          So entsteht Ihr <em>Unfallgutachten.</em>
        </h2>
      </CTSectionHead>

      <div style={{ borderTop: "1px solid var(--rule-strong)" }}>
        {processSteps.map((step, index) => (
          <article
            key={step.title}
            className="row-grid row-team"
            style={{
              gap: "clamp(16px, 4vw, 56px)",
              padding: "28px 0",
              borderBottom: "1px solid var(--rule)",
              alignItems: "baseline",
            }}
          >
            <span className="mono" style={{ color: "var(--accent)" }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 style={{ fontSize: 22 }}>{step.title}</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>
              {step.text}
            </p>
          </article>
        ))}
      </div>
    </CTSection>
  );
}

function CostsSection() {
  return (
    <CTSection>
      <CTSectionHead
        num="04"
        name="Wer zahlt das Gutachten?"
        meta="Haftpflicht, Kasko, Bagatellschaden"
        hSmall="Die Kosten hängen von der Schadenart ab."
      >
        <h2>
          Klarheit, bevor Sie uns <em>beauftragen.</em>
        </h2>
      </CTSectionHead>

      <div className="grid-2" style={{ gap: 24 }}>
        <article style={{ padding: 32, borderLeft: "4px solid var(--accent)" }}>
          <span className="slash" style={{ color: "var(--accent)" }}>
            Unverschuldeter Unfall
          </span>
          <p style={{ marginTop: 16, lineHeight: 1.7, fontSize: 17 }}>
            Bei einem unverschuldeten Unfall (Haftpflichtschaden) zählen die
            Gutachterkosten zu den notwendigen Wiederherstellungskosten – die
            gegnerische Versicherung trägt sie. Für Sie entstehen keine Kosten,
            sofern der Schaden über der Bagatellgrenze liegt.
          </p>
        </article>
        <article style={{ padding: 32, borderLeft: "4px solid var(--rule-strong)" }}>
          <span className="slash">Kasko oder Bagatellschaden</span>
          <p style={{ marginTop: 16, lineHeight: 1.7, fontSize: 17 }}>
            Bei Kaskoschäden stimmen wir das Vorgehen mit Ihrer Versicherung ab;
            oft ist eine unabhängige Zweitmeinung sinnvoll. Bei Bagatellschäden
            beraten wir Sie neutral, ob ein Kostenvoranschlag ausreicht.
          </p>
        </article>
      </div>
    </CTSection>
  );
}

function LocalSection() {
  const locations = [
    "Wandsbek",
    "Bergedorf",
    "Harburg",
    "Altona",
    "Eimsbüttel",
    "Norderstedt",
    "Ahrensburg",
    "Pinneberg",
    "Reinbek",
  ];

  return (
    <CTSection tone="dark">
      <CTSectionHead
        num="05"
        name="Unabhängig, persönlich, vor Ort"
        meta="Hamburg & Umland"
        hSmall="Sie bleiben, wo Sie sind – wir kommen zum Fahrzeug."
      >
        <h2 style={{ color: "var(--paper)" }}>
          Direkt mit den Gutachtern. <em>Ohne Umwege.</em>
        </h2>
      </CTSectionHead>

      <div className="split-wide-left" style={{ gap: 48 }}>
        <div style={{ display: "grid", gap: 20 }}>
          <p style={{ color: "var(--paper)", lineHeight: 1.7, fontSize: 17 }}>
            Wir arbeiten ausschließlich für Sie – keine Provisionsverträge mit
            Werkstätten oder Versicherern, kein Callcenter, keine
            Subunternehmer. Sie sprechen direkt mit den Gutachtern.
          </p>
          <p style={{ color: "var(--paper)", lineHeight: 1.7, fontSize: 17 }}>
            Wir kommen in ganz Hamburg und im Umland zu Ihnen. Sie bleiben, wo
            Sie sind – wir kommen zum Fahrzeug.
          </p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignContent: "start" }}>
          {locations.map((location) => (
            <span
              key={location}
              className="chip"
              style={{ color: "var(--paper)", borderColor: "#ffffff44" }}
            >
              {location}
            </span>
          ))}
        </div>
      </div>
    </CTSection>
  );
}

function FaqSection() {
  return (
    <CTSection tone="paper2">
      <CTSectionHead
        num="FAQ"
        name="Häufige Fragen"
        meta="Sechs Antworten"
        hSmall="Kurz und verständlich beantwortet."
      >
        <h2>
          Was Geschädigte <em>wissen möchten.</em>
        </h2>
      </CTSectionHead>

      <div style={{ borderTop: "1px solid var(--rule-strong)" }}>
        {faqItems.map((item, index) => (
          <article
            key={item.question}
            className="row-grid row-team"
            style={{
              gap: "clamp(16px, 4vw, 48px)",
              padding: "28px 0",
              borderBottom: "1px solid var(--rule)",
            }}
          >
            <span className="mono" style={{ color: "var(--accent)" }}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 style={{ fontSize: 20, lineHeight: 1.3 }}>{item.question}</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
              {item.answer}
            </p>
          </article>
        ))}
      </div>
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

export default function UnfallgutachtenHamburgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <main className="page-fade">
        <PageHero />
        <NeedReportSection />
        <ReportContentsSection />
        <ProcessSection />
        <CostsSection />
        <LocalSection />
        <FaqSection />
        <FinalCta />
      </main>
      <SiteFooter />
      <CTTimeStamp />
    </>
  );
}
