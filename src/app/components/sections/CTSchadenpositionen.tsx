import { CTSection, CTSectionHead } from "../ct-primitives";

/* ── Schadenpositionen ─────────────────────────────────────────────── */
export default function CTSchadenpositionen() {
  const rows: [string, string, string, string][] = [
    [
      "01",
      "Reparaturkosten",
      "Vollständige Wiederherstellungskosten — auch fiktiv abrechenbar",
      "Werkstatt-Stundensatz × Aufwand",
    ],
    [
      "02",
      "Wertminderung",
      "Merkantiler Minderwert nach Reparatur",
      "BVSK / Halbgewachs",
    ],
    [
      "03",
      "Wiederbeschaffungswert",
      "Marktwert eines gleichwertigen Fahrzeugs",
      "Schwacke / DAT",
    ],
    [
      "04",
      "Restwert",
      "Wert des beschädigten Fahrzeugs",
      "3 regionale Angebote",
    ],
    [
      "05",
      "Nutzungsausfall",
      "Pauschale je Tag ohne Fahrzeug",
      "Sanden/Danner/Küppersbusch",
    ],
    [
      "06",
      "Mietwagenkosten",
      "Alternative bei tatsächlicher Anmietung",
      "Schwacke-Mietpreisspiegel",
    ],
    [
      "07",
      "Abschlepp- & Bergungskosten",
      "Soweit erforderlich",
      "Reale Rechnung",
    ],
    [
      "08",
      "Unkostenpauschale",
      "Telefon, Porto, Fahrten",
      "25–30 € (BGH)",
    ],
  ];
  return (
    <CTSection>
      <CTSectionHead
        num="06"
        name="Schadenpositionen"
        meta="Was Ihnen zusteht"
        hSmall="Ein Gutachten ist mehr als nur die Reparaturkosten."
      >
        <h2 style={{ maxWidth: "20ch" }}>
          Acht Positionen,{" "}
          <em>die Versicherer gerne übersehen.</em>
        </h2>
      </CTSectionHead>

      <div style={{ borderTop: "1px solid var(--rule-strong)" }}>
        {rows.map((r) => (
          <div
            key={r[0]}
            className="row-grid row-positionen"
            style={{
              gap: 32,
              padding: "24px 0",
              borderBottom: "1px solid var(--rule)",
            }}
          >
            <span className="mono" style={{ color: "var(--accent)" }}>
              {r[0]}
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "clamp(18px, 2vw, 22px)",
                letterSpacing: "-0.02em",
              }}
            >
              {r[1]}
            </span>
            <span
              style={{
                fontSize: 15,
                color: "var(--muted)",
                lineHeight: 1.5,
              }}
            >
              {r[2]}
            </span>
            <span
              className="mono"
              style={{
                color: "var(--ink)",
                justifySelf: "end",
                textAlign: "right",
              }}
            >
              {r[3]}
            </span>
          </div>
        ))}
      </div>
    </CTSection>
  );
}
