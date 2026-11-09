import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import CTTimeStamp from "../components/CTTimeStamp";
import {
  CTIcon,
  CTSection,
} from "../components/ct-primitives";
import { CT_BRAND, mailHref, telHref, waHref } from "@/lib/cartrust";
import { ASSET_BLUR_DATA_URL, assetUrl } from "@/lib/assets";

function CTKontaktHero() {
  return (
    <section style={{ paddingTop: 48, paddingBottom: 96 }}>
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
          <span className="slash">
            Kontakt &nbsp;·&nbsp; Termin sichern
          </span>
          <span style={{ marginLeft: "auto" }} className="slash">
            24h erreichbar
          </span>
        </div>

        <h1
          className="display"
          style={{
            fontSize: "var(--t-h1)",
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            fontWeight: 900,
          }}
        >
          Direkt anrufen.
        </h1>
        <h1
          className="display"
          style={{
            fontSize: "var(--t-h1)",
            lineHeight: 0.9,
            letterSpacing: "-0.045em",
            fontWeight: 500,
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            marginTop: 8,
          }}
        >
          Oder schreiben.
        </h1>

        <p
          style={{
            marginTop: "clamp(32px, 5vw, 64px)",
            fontSize: "clamp(17px, 1.6vw, 20px)",
            lineHeight: 1.5,
            maxWidth: "60ch",
            color: "var(--muted)",
          }}
        >
          Sie hatten einen Unfall? Telefon ist immer am schnellsten,
          besonders wenn Sie noch am Unfallort stehen. Für alles andere
          gibt es <em className="ital">WhatsApp und E-Mail.</em>
        </p>
      </div>
    </section>
  );
}

function CTKanalKacheln() {
  const k = [
    {
      t: "Telefon",
      sub: "24 h erreichbar",
      big: CT_BRAND.phone,
      href: telHref,
      ico: "phone" as const,
      cta: "Jetzt anrufen",
      primary: true,
    },
    {
      t: "WhatsApp",
      sub: "Foto + Standort schicken",
      big: "Chat starten",
      href: waHref,
      ico: "wa" as const,
      cta: "WhatsApp öffnen",
      primary: false,
    },
    {
      t: "E-Mail",
      sub: "Antwort < 4 h werktags",
      big: CT_BRAND.email,
      href: mailHref,
      ico: "mail" as const,
      cta: "Mail schreiben",
      primary: false,
    },
  ];
  return (
    <CTSection>
      <div className="cards-3">
        {k.map((it) => (
          <a
            key={it.t}
            href={it.href}
            className="card-pad-testimonial"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              background: it.primary ? "var(--ink)" : "var(--paper)",
              color: it.primary ? "var(--paper)" : "var(--ink)",
              border:
                "1px solid " +
                (it.primary ? "var(--ink)" : "var(--rule-strong)"),
              transition: "transform .15s",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <span
                className="slash"
                style={{
                  color: it.primary ? "var(--accent)" : "var(--muted)",
                }}
              >
                {it.sub}
              </span>
              <CTIcon
                name={it.ico}
                size={20}
                stroke={it.primary ? "var(--accent)" : "var(--ink)"}
              />
            </div>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: "clamp(28px, 3vw, 40px)",
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
                marginTop: "auto",
              }}
            >
              {it.big}
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: 16,
                borderTop:
                  "1px solid " + (it.primary ? "#ffffff20" : "var(--rule)"),
              }}
            >
              <span
                className="mono"
                style={{ color: it.primary ? "var(--accent)" : "var(--ink)" }}
              >
                {it.t}
              </span>
              <span
                className="mono"
                style={{
                  color: it.primary ? "#ffffff77" : "var(--muted)",
                }}
              >
                → {it.cta}
              </span>
            </div>
          </a>
        ))}
      </div>
    </CTSection>
  );
}

function CTOeffnungAdresse() {
  return (
    <CTSection>
      <div className="split-balanced">
        <div>
          <span className="slash">Bürozeiten</span>
          <h2 style={{ marginTop: 20, maxWidth: "14ch" }}>
            Telefonisch <em>24 h.</em>
            <br />
            Vor Ort nach Termin.
          </h2>
          <dl
            style={{
              width: "100%",
              maxWidth: 520,
              marginTop: 32,
              margin: "32px 0 0",
              padding: 0,
              display: "grid",
              gap: 0,
            }}
          >
            {(
              [
                ["Notfall-Hotline", "24 h · 7 Tage"],
                ["Büro Mo–Fr", "08:00 – 19:00 Uhr"],
                ["Büro Sa", "09:00 – 14:00 Uhr"],
                ["Vor-Ort-Termine", "nach Vereinbarung, oft < 24 h"],
              ] as [string, string][]
            ).map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 16,
                  flexWrap: "wrap",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--rule)",
                }}
              >
                <dt
                  style={{
                    fontSize: 13,
                    color: "var(--muted)",
                    fontFamily: "var(--font-mono)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {k}
                </dt>
                <dd
                  style={{
                    margin: 0,
                    fontSize: "clamp(15px, 1.4vw, 17px)",
                    textAlign: "right",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 600,
                  }}
                >
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div>
          <span className="slash">Standort</span>
          <h2 style={{ marginTop: 20, maxWidth: "12ch" }}>
            Nydamer Weg 16,
            <br />
            <em>22145 Hamburg.</em>
          </h2>
          <div style={{ marginTop: 32 }}>
            <figure
              style={{
                margin: 0,
                position: "relative",
                aspectRatio: "16 / 9",
                border: "1px solid var(--rule-strong)",
                overflow: "hidden",
                background: "var(--paper-2)",
              }}
            >
              <Image
                src={assetUrl("hamburg-map.png")}
                alt="Karte Hamburg-Rahlstedt · Nydamer Weg 16"
                fill
                sizes="(max-width: 880px) 100vw, 40vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
                placeholder="blur"
                blurDataURL={ASSET_BLUR_DATA_URL}
              />
            </figure>
          </div>
        </div>
      </div>
    </CTSection>
  );
}

export default function KontaktPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-fade">
        <CTKontaktHero />
        <CTKanalKacheln />
        <CTOeffnungAdresse />
      </main>
      <SiteFooter />
      <CTTimeStamp />
    </>
  );
}
