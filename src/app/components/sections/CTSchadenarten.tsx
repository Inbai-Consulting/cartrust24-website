import { CTSection, CTSectionHead } from "../ct-primitives";

/* ── Schadenarten ──────────────────────────────────────────────────── */
export default function CTSchadenarten() {
  const arten = [
    {
      tag: "HAFTPFLICHT",
      n: "01",
      head: "Nicht meine Schuld",
      accent: "var(--accent)",
      body: "Die gegnerische Versicherung trägt alles — auch Ihr Gutachten. Sie wählen den Sachverständigen frei. Ab ~1.000 € Schaden lohnt sich ein Vollgutachten praktisch immer.",
      bullet: [
        "Gutachterkosten vom Gegner getragen",
        "Freie Sachverständigen-Wahl",
        "Wertminderung & Nutzungsausfall",
      ],
    },
    {
      tag: "KASKO",
      n: "02",
      head: "Eigener Versicherer",
      accent: "var(--gold)",
      body: "Bei Vollkasko wenden Sie sich an Ihre Versicherung. Häufig stellt sie selbst einen Gutachter — Sie haben Recht auf eine unabhängige Zweitmeinung.",
      bullet: [
        "Abstimmung mit Versicherer nötig",
        "Selbstbeteiligung beachten",
        "Zweitgutachten oft sinnvoll",
      ],
    },
    {
      tag: "BAGATELL",
      n: "03",
      head: "Bis ca. 1.000 €",
      accent: "var(--muted)",
      body: "Für kleine Schäden genügt meist ein Kostenvoranschlag — günstiger und schneller. Wir sagen ehrlich, wann sich ein Gutachten lohnt.",
      bullet: [
        "Kostenvoranschlag statt Gutachten",
        "Reine Reparaturkalkulation",
        "Wir beraten neutral",
      ],
    },
  ];
  return (
    <CTSection tone="paper2">
      <CTSectionHead
        num="05"
        name="Schadenarten"
        meta="Wer zahlt? Drei Antworten"
        hSmall="Nicht jeder Unfall braucht ein Gutachten."
      >
        <h2 style={{ maxWidth: "22ch" }}>
          Aber jeder Unfall braucht{" "}
          <em>eine ehrliche Einschätzung.</em>
        </h2>
      </CTSectionHead>

      <div
        className="grid-3"
        style={{ borderTop: "1px solid var(--rule-strong)" }}
      >
        {arten.map((a, i) => (
          <article
            key={a.tag}
            className="card-pad-md"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
              borderRight: i < 2 ? "1px solid var(--rule)" : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <span className="slash" style={{ color: a.accent }}>
                {a.tag}
              </span>
              <span className="mono" style={{ color: "var(--muted)" }}>
                {a.n}/03
              </span>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: "clamp(32px, 3.5vw, 44px)",
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
                marginTop: 8,
              }}
            >
              {a.head}
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.6,
              }}
            >
              {a.body}
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "auto 0 0",
                display: "grid",
                gap: 10,
                paddingTop: 16,
                borderTop: "1px solid var(--rule)",
              }}
            >
              {a.bullet.map((b) => (
                <li
                  key={b}
                  style={{
                    display: "flex",
                    gap: 10,
                    fontSize: 13,
                    lineHeight: 1.45,
                  }}
                >
                  <span
                    style={{
                      color: a.accent,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    +
                  </span>{" "}
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </CTSection>
  );
}
