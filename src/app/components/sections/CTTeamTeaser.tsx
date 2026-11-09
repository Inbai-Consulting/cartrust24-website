import Link from "next/link";
import { CTIcon, CTSection, CTSectionHead } from "../ct-primitives";

/* ── Team teaser ───────────────────────────────────────────────────── */
export default function CTTeamTeaser() {
  const team = [
    {
      name: "Walid Mohtasebzada",
      titel: "Ingenieur · B.Eng.",
      spec: "Schadenskalkulation · Strukturanalyse · OBD-Diagnose",
    },
    {
      name: "Elias Azizi",
      titel: "Geschäftsführer · Sachverständiger",
      spec: "Schadenregulierung · Fahrzeugbewertung · Kaufprüfung",
    },
  ];
  return (
    <CTSection tone="paper2">
      <CTSectionHead
        num="07"
        name="Expertise"
        meta="Hinter jedem Gutachten"
        hSmall="Keine Callcenter. Keine Subunternehmer."
      >
        <h2 style={{ maxWidth: "16ch" }}>
          Zwei Köpfe. <em>Ein Versprechen.</em>
        </h2>
      </CTSectionHead>

      <div style={{ borderTop: "1px solid var(--rule-strong)" }}>
        {team.map((p, i) => (
          <article
            key={p.name}
            className="row-grid row-team"
            style={{
              gap: 32,
              padding: "40px 0",
              borderBottom: "1px solid var(--rule)",
            }}
          >
            <span className="mono" style={{ color: "var(--accent)" }}>
              0{i + 1}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: "clamp(40px, 5vw, 72px)",
                letterSpacing: "-0.04em",
                lineHeight: 0.92,
              }}
            >
              {p.name}
            </h3>
            <div style={{ display: "grid", gap: 6 }}>
              <span className="slash">{p.titel}</span>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--muted)",
                  marginTop: 8,
                }}
              >
                {p.spec}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div style={{ marginTop: 32, textAlign: "right" }}>
        <Link href="/expertise" className="btn btn-ghost">
          Vollständige Expertise ansehen{" "}
          <span className="arr">
            <CTIcon name="arrow-up-r" size={14} />
          </span>
        </Link>
      </div>
    </CTSection>
  );
}
