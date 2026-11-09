import { CTMarquee } from "../ct-primitives";
import { CT_BRAND } from "@/lib/cartrust";

/* ── Big "Anrufen" marquee scroller ────────────────────────────────── */
export default function CTBigMarquee() {
  return (
    <section
      style={{
        padding: "36px 0",
        borderTop: "1px solid var(--rule-strong)",
        borderBottom: "1px solid var(--rule-strong)",
      }}
    >
      <CTMarquee
        items={[
          "Jetzt anrufen",
          <em key="b1">{CT_BRAND.phone}</em>,
          "Jetzt anrufen",
          <em key="b2">24h erreichbar</em>,
        ]}
        speed={45}
      />
    </section>
  );
}
