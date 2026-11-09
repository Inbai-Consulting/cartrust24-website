import Link from "next/link";
import Image from "next/image";
import { CTIcon, CTStat } from "../ct-primitives";
import { telHref, waHref } from "@/lib/cartrust";
import { ASSET_BLUR_DATA_URL, assetUrl } from "@/lib/assets";

/* ── HERO ───────────────────────────────────────────────────────────── */
export default function CTHero() {
  return (
    <section
      style={{ paddingTop: 48, paddingBottom: 96, position: "relative" }}
    >
      <div className="wrap">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 24,
            paddingBottom: 32,
            marginBottom: 56,
            borderBottom: "1px solid var(--rule)",
          }}
        >
          <span className="slash">Ihr Kfz-Gutachter in Hamburg & Umland</span>
          <span style={{ marginLeft: "auto" }} className="slash">
            24 h erreichbar
          </span>
        </div>

        <div className="hero-grid">
          {/* LEFT — headline & CTA */}
          <div>
            <h1
              className="display"
              style={{
                fontSize: "var(--t-h1)",
                lineHeight: 0.88,
                letterSpacing: "-0.05em",
                margin: 0,
                fontWeight: 900,
              }}
            >
              Unfall?
            </h1>
            <h1
              className="display"
              style={{
                fontSize: "var(--t-h1)",
                lineHeight: 0.88,
                letterSpacing: "-0.045em",
                margin: 0,
                fontWeight: 500,
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--ink)",
                marginTop: 8,
              }}
            >
              Wir sichern
            </h1>
            <h1
              className="display"
              style={{
                fontSize: "var(--t-h1)",
                lineHeight: 0.88,
                letterSpacing: "-0.05em",
                margin: 0,
                fontWeight: 900,
                marginTop: 8,
              }}
            >
              Ihre Ansprüche<span style={{ color: "var(--accent)" }}>.</span>
            </h1>

            <p
              style={{
                marginTop: "clamp(24px, 3.5vw, 40px)",
                fontSize: "clamp(16px, 1.5vw, 18px)",
                lineHeight: 1.45,
                maxWidth: "40ch",
                color: "var(--ink)",
              }}
            >
              Unabhängige Kfz-Gutachter — vor Ort in ganz Hamburg, Termin
              innerhalb 24 Stunden. Bei unverschuldetem Unfall{" "}
              <em className="ital">kostenfrei für Sie</em>: Die gegnerische
              Versicherung trägt die Gutachterkosten.
            </p>

            <div
              style={{
                marginTop: 36,
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a href={telHref} className="btn btn-accent btn-lg">
                <CTIcon name="phone" size={16} stroke="var(--paper)" /> Jetzt
                anrufen
              </a>
              <Link href="/kontakt" className="btn btn-ghost btn-lg">
                Termin sichern{" "}
                <span className="arr">
                  <CTIcon name="arrow-up-r" size={14} />
                </span>
              </Link>
              <a href={waHref} className="btn btn-ghost btn-lg">
                <CTIcon name="wa" size={16} /> WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT — car visual with floating editorial cards */}
          <div className="hero-visual">
            <div className="hero-blob" aria-hidden />
            <div className="hero-image">
              <Image
                src={assetUrl("acfa7778-b5b4-41f8-9505-bf86fc695061.jpg")}
                alt="Kfz-Sachverständiger bei der Schadensaufnahme in Hamburg — CARTRUST24"
                fill
                priority
                sizes="(max-width: 880px) 100vw, 45vw"
                placeholder="blur"
                blurDataURL={ASSET_BLUR_DATA_URL}
              />
            </div>

            <div
              className="hero-card"
              style={{ top: "6%", left: "-6%" }}
            >
              <span className="label">Für Geschädigte</span>
              <span className="value">
                0<em>€</em>
              </span>
            </div>
            <div
              className="hero-card"
              style={{ top: "44%", right: "-6%" }}
            >
              <span className="label">Garantie</span>
              <span className="value" style={{ fontSize: "18px" }}>
                100<em>%</em> unabhängig
              </span>
            </div>
            <div
              className="hero-card"
              style={{ bottom: "4%", left: "8%" }}
            >
              <span className="label">Termin nach Anruf</span>
              <span className="value">
                24<em>h</em>
              </span>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div
          className="grid-4"
          style={{
            marginTop: "clamp(48px, 7vw, 96px)",
            paddingTop: "clamp(24px, 3vw, 32px)",
            borderTop: "1px solid var(--rule-strong)",
            gap: "clamp(20px, 3vw, 32px)",
          }}
        >
          <CTStat value="24" suffix="h" label="Termin nach Anruf" />
          <CTStat value="0" suffix="€" label="für Geschädigte¹" />
          <CTStat value="2" label="Sachverständige, persönlich erreichbar" />
          <CTStat value="100" suffix="%" label="unabhängig von Versicherern" />
        </div>
        <p
          className="mono"
          style={{ marginTop: 18, color: "var(--muted)", fontSize: 11 }}
        >
          ¹ bei unverschuldetem Haftpflichtschaden über Bagatellgrenze
        </p>
      </div>
    </section>
  );
}
