"use client";

import { useState } from "react";
import { CTIcon, CTSection, CTSectionHead } from "../components/ct-primitives";
import { CT_BRAND, telHref } from "@/lib/cartrust";

type CaseKey = "haftpflicht" | "kasko" | "bagatell";

const CT_CASES: Record<
  CaseKey,
  {
    title: string;
    sub: string;
    color: string;
    pays: string;
    deductible: string;
    rec: string;
    list: [string, string][];
    when: string[];
  }
> = {
  haftpflicht: {
    title: "Haftpflichtschaden",
    sub: "Sie sind unverschuldet in einen Unfall geraten — die gegnerische Versicherung haftet.",
    color: "var(--accent)",
    pays: "Gegnerische Haftpflicht",
    deductible: "0 €",
    rec: "Vollgutachten ab ~1.000 €",
    list: [
      [
        "Sie wählen den Gutachter",
        "Freie Sachverständigenwahl ist gesetzlich verankert. Lassen Sie sich keinen Gutachter aufdrängen.",
      ],
      [
        "Kosten trägt der Gegner",
        "Gutachterkosten gehören zu den notwendigen Wiederherstellungskosten — voll erstattungsfähig.",
      ],
      [
        "Anwaltskosten erstattet",
        "Ein spezialisierter Anwalt wird bei unverschuldetem Unfall ebenfalls vom Gegner gezahlt.",
      ],
      [
        "Nutzungsausfall",
        "Für jeden Tag ohne Fahrzeug gibt es eine pauschale Entschädigung — nach Fahrzeugklasse.",
      ],
      [
        "Wertminderung",
        "Merkantiler Minderwert wird beim Wiederverkauf relevant — wir berechnen nach BVSK.",
      ],
    ],
    when: [
      "Sie sind klar nicht schuld",
      "Schaden über ca. 1.000 €",
      "Mehrere Schadenpositionen vermutet",
    ],
  },
  kasko: {
    title: "Kaskoschaden",
    sub: "Sie haben den Schaden selbst verursacht oder es war ein Wildunfall — Ihre eigene Versicherung reguliert.",
    color: "var(--gold)",
    pays: "Eigene Kaskoversicherung",
    deductible: "lt. Police (150–500 €)",
    rec: "Häufig Gutachter vom Versicherer",
    list: [
      [
        "Versicherung kontaktieren",
        "Schaden zuerst Ihrer Versicherung melden — Frist meist 7 Tage. Wir helfen bei der Meldung.",
      ],
      [
        "Zweitgutachten möglich",
        "Wenn die Schätzung der Versicherung zu niedrig wirkt, ist eine unabhängige Zweitmeinung Ihr Recht.",
      ],
      [
        "Selbstbeteiligung",
        "Diese wird immer abgezogen — auch wenn das Gutachten höher ausfällt.",
      ],
      [
        "Wildschaden besonders",
        "Bestätigung der Polizei / des Försters nötig — sonst zahlt die Kasko ggf. nicht.",
      ],
      [
        "Hochstufung beachten",
        "Schadenfreiheitsklasse kann steigen — vorab abwägen, ob sich die Meldung lohnt.",
      ],
    ],
    when: [
      "Sie sind selbst schuld",
      "Wildunfall, Vandalismus, Hagel",
      "Schaden über Selbstbeteiligung",
    ],
  },
  bagatell: {
    title: "Bagatellschaden",
    sub: "Kleiner Schaden, meist unter 1.000 € — hier reicht in der Regel ein Kostenvoranschlag.",
    color: "var(--muted)",
    pays: "Je nach Verschuldensfrage",
    deductible: "—",
    rec: "Kostenvoranschlag statt Gutachten",
    list: [
      [
        "Kostenvoranschlag genügt",
        "Eine Werkstatt-Kalkulation reicht — günstiger und schneller als ein Gutachten.",
      ],
      [
        "Nur KVA-Kosten erstattet",
        "Gutachterkosten werden bei Bagatellschäden i. d. R. nicht voll erstattet.",
      ],
      [
        "Trotzdem dokumentieren",
        "Fotos vom Schaden und Unfallort — auch ein KVA braucht eine Grundlage.",
      ],
      [
        "Grenze ist fließend",
        "Bei Verdacht auf verdeckte Schäden lohnt sich trotzdem ein Gutachten.",
      ],
      [
        "Wir beraten ehrlich",
        "Wenn ein Gutachten Geldverschwendung wäre, sagen wir das. Vertrauen vor Umsatz.",
      ],
    ],
    when: [
      "Schaden unter ~1.000 €",
      "Kein Personenschaden",
      "Schaden gut sichtbar, keine versteckten Strukturschäden",
    ],
  },
};

export default function HaftpflichtToggle() {
  const [tab, setTab] = useState<CaseKey>("haftpflicht");
  const data = CT_CASES[tab];
  const tabKeys: CaseKey[] = ["haftpflicht", "kasko", "bagatell"];
  return (
    <CTSection>
      <CTSectionHead
        num="A"
        name="Schadenart wählen"
        meta="Interaktiv"
        hSmall="Die Antwort entscheidet alles weitere."
      >
        <h2 style={{ maxWidth: "20ch" }}>
          Welche Art von Schaden <em>haben Sie?</em>
        </h2>
      </CTSectionHead>

      <div
        role="tablist"
        className="grid-3"
        style={{
          borderTop: "1px solid var(--rule-strong)",
          borderBottom: "1px solid var(--rule-strong)",
          marginBottom: 40,
        }}
      >
        {tabKeys.map((key, i) => {
          const c = CT_CASES[key];
          const active = key === tab;
          return (
            <button
              key={key}
              role="tab"
              aria-selected={active}
              onClick={() => setTab(key)}
              style={{
                padding: "clamp(20px, 3vw, 32px) clamp(18px, 2.6vw, 28px)",
                textAlign: "left",
                background: active ? "var(--ink)" : "transparent",
                color: active ? "var(--paper)" : "var(--ink)",
                border: "none",
                borderRight: i < 2 ? "1px solid var(--rule)" : "none",
                display: "grid",
                gap: 10,
                transition: "background .2s, color .2s",
              }}
            >
              <span
                className="slash"
                style={{ color: active ? "var(--accent)" : c.color }}
              >
                Fall {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 800,
                  fontSize: "clamp(22px, 3vw, 32px)",
                  letterSpacing: "-0.03em",
                }}
              >
                {c.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className="page-fade" key={tab}>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 26,
            lineHeight: 1.3,
            maxWidth: "60ch",
            color: "var(--ink)",
            marginBottom: 56,
          }}
        >
          {data.sub}
        </p>

        <div
          className="grid-3"
          style={{
            borderTop: "1px solid var(--rule-strong)",
            borderBottom: "1px solid var(--rule-strong)",
            marginBottom: 56,
          }}
        >
          {(
            [
              ["Wer zahlt?", data.pays],
              ["Selbstbeteiligung", data.deductible],
              ["Empfehlung", data.rec],
            ] as [string, string][]
          ).map(([k, v], i) => (
            <div
              key={k}
              style={{
                padding: "clamp(20px, 2.8vw, 28px) clamp(20px, 3vw, 32px)",
                borderRight: i < 2 ? "1px solid var(--rule)" : "none",
              }}
            >
              <div className="slash" style={{ marginBottom: 12 }}>
                {k}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "clamp(20px, 2.4vw, 26px)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>

        <div className="split-wide-left">
          <div>
            <span className="slash">Was Sie wissen müssen</span>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                marginTop: 24,
                display: "grid",
                gap: 0,
                borderTop: "1px solid var(--rule)",
              }}
            >
              {data.list.map(([h, d], i) => (
                <li
                  key={h}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "40px 1fr",
                    gap: 16,
                    padding: "20px 0",
                    borderBottom: "1px solid var(--rule)",
                  }}
                >
                  <span
                    className="mono"
                    style={{ color: data.color, paddingTop: 4 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontWeight: 700,
                        fontSize: 18,
                        margin: 0,
                        marginBottom: 6,
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {h}
                    </h4>
                    <p
                      style={{
                        fontSize: 14,
                        color: "var(--muted)",
                        lineHeight: 1.55,
                      }}
                    >
                      {d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="slash">Trifft auf Sie zu, wenn …</span>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                marginTop: 24,
                display: "grid",
                gap: 14,
              }}
            >
              {data.when.map((w) => (
                <li
                  key={w}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    fontSize: 16,
                    lineHeight: 1.45,
                  }}
                >
                  <CTIcon name="check" size={18} stroke={data.color} /> {w}
                </li>
              ))}
            </ul>
            <div
              style={{
                marginTop: 32,
                padding: "clamp(22px, 2.6vw, 28px)",
                background: "var(--ink)",
                color: "var(--paper)",
              }}
            >
              <span className="slash" style={{ color: "var(--accent)" }}>
                Nächster Schritt
              </span>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 800,
                  fontSize: "clamp(22px, 2.8vw, 28px)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.05,
                  marginTop: 12,
                  marginBottom: 20,
                }}
              >
                Wir prüfen Ihren Fall in 5 Minuten.
              </p>
              <a href={telHref} className="btn btn-accent">
                <CTIcon name="phone" size={14} stroke="var(--paper)" />{" "}
                {CT_BRAND.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </CTSection>
  );
}
