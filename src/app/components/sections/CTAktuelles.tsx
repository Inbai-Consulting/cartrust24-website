import Link from "next/link";
import Image from "next/image";
import { CTIcon, CTPlaceholder, CTSection, CTSectionHead } from "../ct-primitives";
import { ASSET_BLUR_DATA_URL, assetUrl } from "@/lib/assets";
import { BLOG_POSTS } from "@/lib/blog";

/* ── Aktuelles · Blog teaser ───────────────────────────────────────── */
export default function CTAktuelles() {
  const posts = BLOG_POSTS.slice(0, 3);
  return (
    <CTSection>
      <CTSectionHead
        num="09"
        name="Aktuelles"
        meta="Aus der Praxis"
        hSmall="Fälle, Werkstatt-Alltag, Wissen — als Lesestoff."
      >
        <h2 style={{ maxWidth: "20ch" }}>
          Was uns gerade <em>beschäftigt.</em>
        </h2>
      </CTSectionHead>

      <div className="cards-3">
        {posts.map((p) => {
          const inner = (
            <>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 3",
                  overflow: "hidden",
                  border: "1px solid var(--rule)",
                  background: "var(--paper-2)",
                  marginBottom: 4,
                }}
              >
                {p.media.type === "image" && (
                  <Image
                    src={assetUrl(p.media.src)}
                    alt={p.media.alt}
                    fill
                    sizes="(max-width: 880px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                    blurDataURL={ASSET_BLUR_DATA_URL}
                  />
                )}
                {p.media.type === "video" && (
                  <video
                    src={assetUrl(p.media.src)}
                    poster={
                      p.media.poster ? assetUrl(p.media.poster) : undefined
                    }
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
                {p.media.type === "placeholder" && (
                  <CTPlaceholder
                    tag={p.media.label || "Bildplatz"}
                    aspect="4 / 3"
                    style={{
                      position: "absolute",
                      inset: 0,
                      border: "none",
                    }}
                  />
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginTop: 18,
                }}
              >
                <span className="slash" style={{ color: "var(--accent)" }}>
                  {p.category}
                </span>
                <span className="mono" style={{ color: "var(--muted)" }}>
                  {p.date}
                </span>
              </div>

              <h3
                style={{
                  marginTop: 14,
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "clamp(20px, 2.2vw, 28px)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                }}
              >
                {p.title}
              </h3>

              <p
                style={{
                  marginTop: 14,
                  fontSize: 15,
                  color: "var(--muted)",
                  lineHeight: 1.55,
                  flex: 1,
                }}
              >
                {p.description}
              </p>

              {p.href && (
                <span
                  className="mono"
                  style={{
                    marginTop: 18,
                    color: "var(--ink)",
                    display: "inline-flex",
                    gap: 8,
                    alignItems: "center",
                  }}
                >
                  Weiterlesen <CTIcon name="arrow-up-r" size={12} />
                </span>
              )}
            </>
          );

          const cardStyle: React.CSSProperties = {
            display: "flex",
            flexDirection: "column",
            border: "1px solid var(--rule-strong)",
            background: "var(--paper)",
            padding: "clamp(16px, 2vw, 22px)",
          };

          return p.href ? (
            <Link key={p.id} href={p.href} style={cardStyle}>
              {inner}
            </Link>
          ) : (
            <article key={p.id} style={cardStyle}>
              {inner}
            </article>
          );
        })}
      </div>
    </CTSection>
  );
}
