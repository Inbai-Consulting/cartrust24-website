import Link from "next/link";
import { CTIcon, CTSection } from "../ct-primitives";

/* ── FAQ teaser ────────────────────────────────────────────────────── */
export default function CTFaqTeaser() {
  const qs = [
    "Wer zahlt das Gutachten?",
    "Darf ich den Gutachter frei wählen?",
    "Wann reicht ein Kostenvoranschlag?",
    "Wie lange dauert das Gutachten?",
    "Was passiert bei Totalschaden?",
    "Brauche ich einen Anwalt?",
  ];
  return (
    <CTSection tone="paper2">
      <div className="split-wide-right" style={{ gap: "clamp(28px, 5vw, 80px)" }}>
        <div>
          <span className="slash">/ 08 · FAQ</span>
          <h2 style={{ marginTop: 24, maxWidth: "14ch" }}>
            Häufige Fragen <em>direkt nach dem Unfall.</em>
          </h2>
          <p
            style={{
              marginTop: 20,
              color: "var(--muted)",
              fontSize: 16,
              maxWidth: "36ch",
            }}
          >
            Keine Sortierung nach SEO. Sortiert nach dem, was Menschen
            tatsächlich fragen.
          </p>
          <div style={{ marginTop: 32 }}>
            <Link href="/faq" className="btn btn-primary">
              Alle Fragen ansehen{" "}
              <span className="arr">
                <CTIcon name="arrow-up-r" size={14} />
              </span>
            </Link>
          </div>
        </div>
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            borderTop: "1px solid var(--rule-strong)",
          }}
        >
          {qs.map((q, i) => (
            <li key={q}>
              <Link
                href="/faq"
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 1fr 40px",
                  gap: 24,
                  alignItems: "baseline",
                  padding: "24px 0",
                  borderBottom: "1px solid var(--rule)",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: 24,
                  letterSpacing: "-0.02em",
                }}
              >
                <span className="mono" style={{ color: "var(--accent)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{q}</span>
                <CTIcon
                  name="arrow-up-r"
                  size={16}
                  stroke="var(--ink)"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </CTSection>
  );
}
