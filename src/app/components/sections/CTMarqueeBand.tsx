import { CTMarquee } from "../ct-primitives";

/* ── Marquee band ──────────────────────────────────────────────────── */
export default function CTMarqueeBand() {
  return (
    <section
      style={{
        padding: "20px 0",
        borderTop: "1px solid var(--rule-strong)",
        borderBottom: "1px solid var(--rule-strong)",
        background: "var(--paper)",
      }}
    >
      <CTMarquee
        tone="mono"
        speed={50}
        items={[
          "Termin in 24 Stunden",
          <em key="m1">kostenlos für Geschädigte</em>,
          "Vor Ort in Hamburg",
          <em key="m2">BVSK-Methodik</em>,
          "Ingenieurstechnisch",
          <em key="m3">persönlich · keine Callcenter</em>,
          "Direkt an Versicherer",
        ]}
      />
    </section>
  );
}
