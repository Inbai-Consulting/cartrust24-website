import Link from "next/link";
import { CTIcon, CTSection, CTSectionHead } from "../ct-primitives";
import { telHref, waHref } from "@/lib/cartrust";

/* ── Ablauf ────────────────────────────────────────────────────────── */
export default function CTAblauf() {
  const steps = [
    { n: "01", t: "Kontakt", meta: "< 5 MIN" },
    {
      n: "02",
      t: "Termin vereinbart",
      org: "Vor Ort bei Ihnen, in der Werkstatt oder am Standort",
      meta: "< 24 H",
    },
    {
      n: "03",
      t: "Schadensaufnahme",
      org: "Fotos · Messungen · OBD-Diagnose · Lackdicke",
      meta: "~ 1 STD",
    },
    {
      n: "04",
      t: "Gutachten erstellt",
      org: "Reparaturkalkulation · Wertminderung · PDF",
      meta: "2–3 WERKTAGE",
    },
    {
      n: "05",
      t: "Regulierung begleitet",
      org: "Versand an Versicherer · Rückfragen geklärt",
      meta: "BIS ZUR ZAHLUNG",
    },
  ];
  return (
    <CTSection>
      <CTSectionHead
        num="04"
        name="Ablauf"
        meta="Vom Anruf bis zur Auszahlung"
        hSmall="Linear. Dokumentiert."
      >
        <h2 style={{ maxWidth: "18ch" }}>
          Fünf Schritte. <em>Mehr braucht es nicht.</em>
        </h2>
      </CTSectionHead>

      <div style={{ borderTop: "1px solid var(--rule-strong)" }}>
        {steps.map((s) => (
          <article
            key={s.n}
            className="row-grid row-ablauf"
            style={{
              gap: 32,
              padding: "36px 0",
              borderBottom: "1px solid var(--rule)",
              alignItems: "center",
            }}
          >
            <span
              className="mono"
              style={{ color: "var(--accent)", fontSize: 14 }}
            >
              {s.n}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 56px)",
                letterSpacing: "-0.035em",
                lineHeight: 0.95,
              }}
            >
              {s.t}
            </h3>
            {s.n === "01" ? (
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <a href={telHref} className="btn btn-ghost">
                  <CTIcon name="phone" size={14} /> Telefon
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-ghost"
                >
                  <CTIcon name="wa" size={14} /> WhatsApp
                </a>
                <Link href="/kontakt" className="btn btn-ghost">
                  Kontakt <CTIcon name="arrow-up-r" size={12} />
                </Link>
              </div>
            ) : (
              <p
                style={{
                  fontSize: 16,
                  color: "var(--muted)",
                  lineHeight: 1.5,
                }}
              >
                {s.org}
              </p>
            )}
            <span
              className="mono"
              style={{
                color: "var(--ink)",
                justifySelf: "end",
                textAlign: "right",
              }}
            >
              {s.meta}
            </span>
          </article>
        ))}
      </div>
    </CTSection>
  );
}
