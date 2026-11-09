import Link from "next/link";
import { CTIcon, CTSection, CTSectionHead } from "../ct-primitives";

/* ── Leistungen ────────────────────────────────────────────────────── */
export default function CTLeistungen() {
  const items = [
    {
      n: "01",
      eyebrow: "KERNLEISTUNG",
      t: "Unfallgutachten",
      d: "Beweissicheres Vollgutachten nach unverschuldetem Unfall. Gerichtsfest dokumentiert, in der Sprache der Versicherer.",
      tools: [
        "Reparaturkostenkalkulation",
        "Wertminderung nach BVSK",
        "Wiederbeschaffungs- & Restwert",
        "Foto-Dokumentation",
        "Versand an Versicherer",
      ],
    },
    {
      n: "02",
      eyebrow: "WERTERMITTLUNG",
      t: "Fahrzeugbewertung",
      d: "Neutrale Marktwert-Ermittlung mit Begründung — für Verkauf, Erbfall, Scheidung oder Steuer.",
      tools: [
        "Händlereinkaufswert",
        "Marktwert / Zeitwert",
        "Wiederbeschaffungswert",
        "Schwacke / DAT Datenbasis",
        "PDF-Gutachten in 2 Werktagen",
      ],
    },
    {
      n: "03",
      eyebrow: "SCHNELL & GÜNSTIG",
      t: "Kostenvoranschlag",
      d: "Für kleine Schäden — schnelle Reparaturkalkulation ohne Vollgutachten.",
      tools: [
        "Werkstatt-konforme Kalkulation",
        "Material & Lohn",
        "Lackier-/Karosseriearbeiten",
        "Innerhalb 24 h",
        "Festpreis 89 €",
      ],
    },
  ];
  return (
    <CTSection tone="paper2">
      <CTSectionHead
        num="03"
        name="Leistungen"
        meta="Drei Bausteine"
        hSmall="Was wir am besten können?"
      >
        <h2 style={{ maxWidth: "20ch" }}>
          Ingenieurstechnische Begutachtung.{" "}
          <em>Für jede Lebenslage Ihres Fahrzeugs.</em>
        </h2>
      </CTSectionHead>

      <div
        className="grid-3"
        style={{ borderTop: "1px solid var(--rule-strong)" }}
      >
        {items.map((it, i) => (
          <article
            key={it.n}
            className="card-pad-lg"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
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
              <span className="slash">{it.eyebrow}</span>
              <span className="mono" style={{ color: "var(--muted)" }}>
                {it.n} / 03
              </span>
            </div>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: "clamp(40px, 5vw, 64px)",
                letterSpacing: "-0.035em",
                lineHeight: 0.95,
              }}
            >
              <span style={{ color: "var(--accent)" }}>{it.n}.</span> {it.t}
            </h3>
            <p
              style={{
                fontSize: 16,
                color: "var(--ink)",
                lineHeight: 1.55,
                maxWidth: "46ch",
              }}
            >
              {it.d}
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "auto 0 0",
                display: "grid",
                gap: 8,
                paddingTop: 18,
              }}
            >
              {it.tools.map((tool) => (
                <li
                  key={tool}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "center",
                    fontSize: 14,
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
                  {tool}
                </li>
              ))}
            </ul>
            <Link
              href="/leistung"
              className="btn btn-ghost"
              style={{ alignSelf: "flex-start" }}
            >
              Mehr erfahren{" "}
              <span className="arr">
                <CTIcon name="arrow-up-r" size={14} />
              </span>
            </Link>
          </article>
        ))}
      </div>
    </CTSection>
  );
}
