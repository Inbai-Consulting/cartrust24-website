import Link from "next/link";
import { CTIcon, CTSection, CTSectionHead } from "../ct-primitives";

/* ── Soforthilfe ───────────────────────────────────────────────────── */
export default function CTSoforthilfe() {
  const steps = [
    {
      n: "01",
      t: "Sichern",
      d: "Warnblinker. Warnweste. Warndreieck 50–150 m hinter dem Fahrzeug. Insassen aus der Gefahrenzone.",
    },
    {
      n: "02",
      t: "Helfen",
      d: "Verletzten Erste Hilfe. 112 bei Personenschaden. 110 ab Sachschaden ~1.500 €.",
    },
    {
      n: "03",
      t: "Dokumentieren",
      d: "Fotos aus mehreren Winkeln. Bremsspuren. Schilder. Zeugen JETZT — nicht später.",
    },
    {
      n: "04",
      t: "Daten tauschen",
      d: "Name, Anschrift, Kennzeichen, Versicherung. Niemals Schuld eingestehen — auch nicht aus Höflichkeit.",
    },
    {
      n: "05",
      t: "Anrufen",
      d: "Schaden über Bagatellgrenze: unabhängigen Gutachter rufen. Nicht den vom Gegner empfohlenen.",
    },
  ];
  return (
    <CTSection>
      <CTSectionHead
        num="01"
        name="Soforthilfe"
        meta="Checkliste am Unfallort"
        hSmall="Was Sie jetzt brauchen."
      >
        <h2 style={{ maxWidth: "16ch" }}>
          Die ersten 15 <em>Minuten entscheiden alles.</em>
        </h2>
      </CTSectionHead>

      <div
        className="grid-5"
        style={{ borderTop: "1px solid var(--rule-strong)" }}
      >
        {steps.map((s) => (
          <article
            key={s.n}
            className="card-pad-sm"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              borderRight: s.n !== "05" ? "1px solid var(--rule)" : "none",
              borderBottom: "1px solid var(--rule-strong)",
            }}
          >
            <span className="slash" style={{ color: "var(--accent)" }}>
              Schritt {s.n}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: "clamp(24px, 2.6vw, 32px)",
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
              }}
            >
              {s.t}
            </h3>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.55,
                color: "var(--muted)",
                marginTop: "auto",
              }}
            >
              {s.d}
            </p>
          </article>
        ))}
      </div>

      <div
        style={{
          marginTop: 32,
          padding: "clamp(18px, 2.4vw, 24px) clamp(20px, 2.6vw, 28px)",
          border: "1px solid var(--rule-strong)",
          display: "flex",
          gap: 18,
          alignItems: "center",
          flexWrap: "wrap",
          background: "var(--paper-2)",
        }}
      >
        <span className="chip accent">
          <CTIcon name="warn" size={12} stroke="var(--accent)" /> Wichtig
        </span>
        <p style={{ fontSize: 15, maxWidth: "70ch", lineHeight: 1.55 }}>
          Sie wählen den Sachverständigen <em className="ital">frei</em>.
          Lassen Sie sich keinen Gutachter von der gegnerischen Versicherung
          aufdrängen — dieser arbeitet auch für die Versicherung.
        </p>
        <Link
          href="/faq"
          className="btn btn-ghost"
          style={{ marginLeft: "auto" }}
        >
          FAQ ansehen{" "}
          <span className="arr">
            <CTIcon name="arrow-up-r" size={14} />
          </span>
        </Link>
      </div>
    </CTSection>
  );
}
