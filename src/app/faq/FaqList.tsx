"use client";

import { useState } from "react";
import { CTIcon, CTSection } from "../components/ct-primitives";
import { CT_FAQ } from "./faq-data";

function FaqAccordion({
  q,
  a,
  num,
  open,
  onToggle,
}: {
  q: string;
  a: string;
  num: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article style={{ borderBottom: "1px solid var(--rule-strong)" }}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="row-grid row-faq-item"
        style={{
          width: "100%",
          cursor: "pointer",
          padding: "32px 0",
          gap: 32,
          background: "transparent",
          border: 0,
          color: "inherit",
          font: "inherit",
          textAlign: "left",
        }}
      >
        <span className="mono" style={{ color: "var(--accent)" }}>
          {num}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: "clamp(22px, 2vw, 28px)",
            letterSpacing: "-0.025em",
            lineHeight: 1.2,
          }}
        >
          {q}
        </h3>
        <span
          style={{
            justifySelf: "end",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            border: "1px solid var(--rule-strong)",
            borderRadius: "50%",
            transition: "transform .2s, background .2s, color .2s",
            transform: open ? "rotate(45deg)" : "none",
            background: open ? "var(--ink)" : "transparent",
            color: open ? "var(--paper)" : "var(--ink)",
          }}
        >
          <CTIcon name="plus" size={16} stroke="currentColor" />
        </span>
      </button>
      {open && (
        <div
          className="page-fade row-grid row-faq-item"
          style={{
            gap: 32,
            paddingBottom: 32,
          }}
        >
          <span />
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--ink)",
              maxWidth: "64ch",
            }}
          >
            {a}
          </p>
        </div>
      )}
    </article>
  );
}

export default function FaqList() {
  const [open, setOpen] = useState<Record<number, number>>({ 0: 0 });
  let counter = 0;
  return (
    <CTSection>
      {CT_FAQ.map((group, gi) => (
        <div key={group.cat} style={{ marginBottom: 96 }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 24,
              paddingBottom: 18,
              marginBottom: 8,
              borderBottom: "1px solid var(--ink)",
            }}
          >
            <span className="slash" style={{ color: "var(--accent)" }}>
              Kapitel {String(gi + 1).padStart(2, "0")}
            </span>
            <h2
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
              }}
            >
              {group.cat}
            </h2>
          </div>
          {group.qs.map(([q, a], qi) => {
            counter++;
            const isOpen = open[gi] === qi;
            return (
              <FaqAccordion
                key={q}
                q={q}
                a={a}
                num={String(counter).padStart(2, "0")}
                open={isOpen}
                onToggle={() =>
                  setOpen((o) => ({ ...o, [gi]: isOpen ? -1 : qi }))
                }
              />
            );
          })}
        </div>
      ))}
    </CTSection>
  );
}
