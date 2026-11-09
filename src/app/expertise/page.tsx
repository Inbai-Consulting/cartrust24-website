import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import CTTimeStamp from "../components/CTTimeStamp";
import {
  CTIcon,
  CTSection,
  CTSectionHead,
} from "../components/ct-primitives";
import { CT_BRAND } from "@/lib/cartrust";
import { ASSET_BLUR_DATA_URL, assetUrl } from "@/lib/assets";

export const metadata: Metadata = {
  title: {
    absolute: "Kfz-Sachverständige in Hamburg – das Team hinter CARTRUST24",
  },
  description:
    "Walid Mohtasebzada (B.Eng. Fahrzeugtechnik) und Elias Azizi (Geschäftsführer, Kfz-Sachverständiger) – das Team hinter CARTRUST24 Hamburg.",
  alternates: { canonical: "/expertise" },
};

function CTExpertiseHero() {
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
          <span className="slash">Expertise &nbsp;·&nbsp; Team</span>
          <span style={{ marginLeft: "auto" }} className="slash">
            Zwei Sachverständige
          </span>
        </div>

        <div className="split-wide-left split-end">
          <div>
            <h1
              className="display"
              style={{
                fontSize: "var(--t-h1)",
                lineHeight: 0.9,
                letterSpacing: "-0.05em",
                fontWeight: 900,
              }}
            >
              Zwei Köpfe.
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
              Ein Gutachten.
            </h1>

            <p
              style={{
                marginTop: "clamp(28px, 4vw, 48px)",
                fontSize: "clamp(17px, 1.6vw, 20px)",
                lineHeight: 1.5,
                maxWidth: "52ch",
                color: "var(--muted)",
              }}
            >
              Die Bezeichnung „Sachverständiger“ ist in Deutschland nicht
              geschützt — deshalb legen wir unsere Qualifikationen{" "}
              <em className="ital">transparent</em> offen. Sie wissen, mit
              wem Sie sprechen.
            </p>
          </div>

          <figure
            style={{
              margin: 0,
              position: "relative",
              aspectRatio: "4 / 5",
              border: "1px solid var(--rule-strong)",
              overflow: "hidden",
            }}
          >
            <Image
              src={assetUrl("elias-and-walid.jpeg")}
              alt="Elias Azizi und Walid Mohtasebzada — Gründer von CARTRUST24"
              fill
              sizes="(max-width: 1100px) 100vw, 40vw"
              style={{ objectFit: "cover", objectPosition: "60% center" }}
              priority
              placeholder="blur"
              blurDataURL={ASSET_BLUR_DATA_URL}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

type PersonProps = {
  num: string;
  name: string;
  role: string;
  bio: string[];
  quali: string[];
  focus: string[];
  fotoSrc: string;
  fotoAlt: string;
  phone?: string;
};

function CTPerson({
  num,
  name,
  role,
  bio,
  quali,
  focus,
  fotoSrc,
  fotoAlt,
  phone,
}: PersonProps) {
  const [firstPart, ...rest] = name.split(",");
  const suffix = rest.join(",").trim();
  return (
    <CTSection>
      <CTSectionHead
        num={num}
        name={role.toUpperCase()}
        meta={`Profil ${num} / 02`}
      >
        <h2
          style={{
            fontSize: "clamp(48px, 7vw, 112px)",
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            maxWidth: "16ch",
          }}
        >
          {firstPart}
          <span style={{ color: "var(--accent)" }}>.</span>
        </h2>
        {suffix && (
          <p
            className="ital"
            style={{
              fontSize: 24,
              color: "var(--muted)",
              marginTop: 14,
            }}
          >
            {suffix}
          </p>
        )}
      </CTSectionHead>

      <div className="row-grid row-person" style={{ gap: "clamp(24px, 4.5vw, 64px)" }}>
        <div style={{ display: "grid", gap: 18 }}>
          <figure
            style={{
              margin: 0,
              position: "relative",
              aspectRatio: "4 / 5",
              border: "1px solid var(--rule-strong)",
              overflow: "hidden",
            }}
          >
            <Image
              src={fotoSrc}
              alt={fotoAlt}
              fill
              sizes="(max-width: 1100px) 100vw, 30vw"
              style={{ objectFit: "cover" }}
              placeholder="blur"
              blurDataURL={ASSET_BLUR_DATA_URL}
            />
          </figure>
          <div
            style={{
              padding: "clamp(18px, 2.2vw, 24px)",
              border: "1px solid var(--rule-strong)",
              background: "var(--paper-2)",
            }}
          >
            <span className="slash">Direkt erreichbar</span>
            <div
              style={{
                marginTop: 12,
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              {phone || CT_BRAND.phone}
            </div>
            <div
              style={{ marginTop: 4, fontSize: 14, color: "var(--muted)" }}
            >
              {CT_BRAND.email}
            </div>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 19, lineHeight: 1.6, color: "var(--ink)" }}>
            {bio.map((p, i) => (
              <p key={i} style={{ marginBottom: 18 }}>
                {p}
              </p>
            ))}
          </div>

          <div
            className="split-balanced"
            style={{
              marginTop: "clamp(28px, 4vw, 48px)",
              paddingTop: "clamp(24px, 3.5vw, 40px)",
              borderTop: "1px solid var(--rule-strong)",
              gap: "clamp(24px, 4vw, 48px)",
            }}
          >
            <div>
              <span className="slash">Qualifikation</span>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "18px 0 0",
                  display: "grid",
                  gap: 12,
                }}
              >
                {quali.map((q) => (
                  <li
                    key={q}
                    style={{
                      display: "flex",
                      gap: 12,
                      fontSize: 14,
                      lineHeight: 1.45,
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--accent)",
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        paddingTop: 4,
                      }}
                    >
                      +
                    </span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="slash">Schwerpunkte</span>
              <div
                style={{
                  marginTop: 18,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                }}
              >
                {focus.map((f) => (
                  <span key={f} className="chip">
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CTSection>
  );
}

function CTPersonen() {
  return (
    <>
      <CTPerson
        num="01"
        name="Walid Mohtasebzada, B.Eng."
        role="Ingenieur · Kfz-Sachverständiger"
        fotoSrc={assetUrl("walid.jpeg")}
        fotoAlt="Porträt Walid Mohtasebzada"
        phone="+49 15567 487073"
        bio={[
          "Er bringt die Präzision der Luftfahrt in die Kfz-Begutachtung. Als studierter Ingenieur (B.Eng.) und erfahrener Qualitätsmanager für Triebwerke arbeitet er nach höchsten Sicherheits- und Dokumentationsstandards.",
          "Seine Stärke ist die tiefgehende technische Analyse: Er bewertet Strukturschäden, führt elektronische Diagnosen durch und legt die exakten Reparaturwege fest. Jedes Gutachten geht erst dann an die Versicherung, wenn er die technische Prüfung persönlich freigegeben hat.",
        ]}
        quali={[
          "Bachelor of Engineering (B.Eng.)",
          "Langjährige Erfahrung im Qualitätsmanagement (Luftfahrt)",
          "DAT- & Audatex-Kalkulationssysteme",
        ]}
        focus={[
          "Schadenkalkulation",
          "Strukturanalyse",
          "OBD-Diagnose",
          "Reparaturwege",
          "BVSK",
        ]}
      />

      <CTPerson
        num="02"
        name="Elias Azizi"
        role="Geschäftsführer · Kfz-Sachverständiger"
        fotoSrc={assetUrl("elias.jpeg")}
        fotoAlt="Porträt Elias Azizi"
        bio={[
          "Geschäftsführer und mit Walid Gründer von CARTRUST24. Erfahrung in Schadenregulierung und Fahrzeugbewertung — das zweite Paar Augen, das jedes Gutachten prüft, bevor es an die Versicherung geht.",
          "Direkter Ansprechpartner für Versicherer, Anwälte und Werkstätten. Wenn die gegnerische Versicherung Positionen kürzen will, ist er es, der zurückruft und nachhakt.",
        ]}
        quali={[
          "Kfz-Sachverständiger",
          "Spezialisierung Schadenregulierung",
          "Fahrzeugbewertung nach Schwacke / DAT",
          "Geschäftsführer CARTRUST24 Kfz-Gutachten UG",
        ]}
        focus={[
          "Schadenregulierung",
          "Fahrzeugbewertung",
          "Versicherungskorrespondenz",
          "Mandantenführung",
        ]}
      />
    </>
  );
}

function CTValues() {
  const v = [
    {
      t: "Unabhängig",
      d: "Keine Provisionsverträge mit Werkstätten oder Versicherern. Wir arbeiten ausschließlich für Sie.",
    },
    {
      t: "Transparent",
      d: "Wir nennen Qualifikationen beim Namen — und behaupten nichts, was wir nicht belegen können.",
    },
    {
      t: "Persönlich",
      d: "Kein Callcenter, keine Subunternehmer. Sie sprechen immer direkt mit Walid oder Elias.",
    },
    {
      t: "Lokal",
      d: "Wir kennen Hamburger Versicherer, Werkstätten und Verkehrsanwälte aus jahrelanger Zusammenarbeit.",
    },
  ];
  return (
    <CTSection tone="paper2">
      <CTSectionHead
        num="C"
        name="Haltung"
        meta="Was uns leitet"
        hSmall="Vier Worte. Mehr Werbeversprechen geben wir nicht."
      >
        <h2 style={{ maxWidth: "18ch" }}>
          Vier Prinzipien. <em>Konsequent durchgezogen.</em>
        </h2>
      </CTSectionHead>

      <div
        className="grid-4"
        style={{ borderTop: "1px solid var(--rule-strong)" }}
      >
        {v.map((it, i) => (
          <div
            key={it.t}
            style={{
              padding: "clamp(28px, 4vw, 40px) clamp(20px, 2.8vw, 32px) clamp(28px, 4vw, 40px) 0",
              display: "flex",
              flexDirection: "column",
              gap: 18,
              borderRight: i < 3 ? "1px solid var(--rule)" : "none",
              paddingLeft: i === 0 ? 0 : "clamp(20px, 2.8vw, 32px)",
              borderBottom: "1px solid var(--rule-strong)",
            }}
          >
            <span className="mono" style={{ color: "var(--accent)" }}>
              0{i + 1}
            </span>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: "clamp(36px, 4vw, 56px)",
                letterSpacing: "-0.035em",
                lineHeight: 0.95,
              }}
            >
              {it.t}
              <span style={{ color: "var(--accent)" }}>.</span>
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "var(--muted)",
                lineHeight: 1.6,
                marginTop: "auto",
              }}
            >
              {it.d}
            </p>
          </div>
        ))}
      </div>
    </CTSection>
  );
}

function CTQualiHinweis() {
  return (
    <CTSection>
      <div className="split-wide-left" style={{ gap: "clamp(28px, 5vw, 80px)" }}>
        <div>
          <span className="slash">Transparenz-Hinweis</span>
          <h2 style={{ marginTop: 20, maxWidth: "18ch" }}>
            Was wir sind —{" "}
            <em>und was wir nicht sind.</em>
          </h2>
          <div
            style={{
              marginTop: 32,
              fontSize: 17,
              lineHeight: 1.6,
              color: "var(--ink)",
              maxWidth: "60ch",
            }}
          >
            <p style={{ marginBottom: 20 }}>
              In Deutschland darf sich grundsätzlich jeder „Sachverständiger“
              nennen — die Berufsbezeichnung ist nicht geschützt. Geschützt
              ist nur der Zusatz{" "}
              <em className="ital">„öffentlich bestellt und vereidigt“</em>,
              der über die Industrie- und Handelskammern vergeben wird.
            </p>
            <p>
              Wir sind <strong>freie Kfz-Sachverständige</strong>. Unser Wert
              liegt in dokumentierten Qualifikationen, technischer Tiefe und
              einer offenen Darstellung dessen, was wir können — und dessen,
              was wir nicht versprechen.
            </p>
          </div>
        </div>
        <div
          style={{
            background: "var(--ink)",
            color: "var(--paper)",
            padding: "clamp(24px, 3.4vw, 36px)",
            display: "grid",
            gap: 28,
          }}
        >
          <div>
            <span className="slash" style={{ color: "var(--accent)" }}>
              Belegt
            </span>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "14px 0 0",
                display: "grid",
                gap: 12,
              }}
            >
              {[
                "Bachelor of Engineering (B.Eng.)",
                "Langjährige Erfahrung im Qualitätsmanagement",
                "DAT- & Audatex-Kalkulationslizenz",
                "Schadenregulierungspraxis gegenüber Versicherern",
                "CARTRUST24 Kfz-Gutachten UG · HRB 198354, Amtsgericht Hamburg",
              ].map((b) => (
                <li
                  key={b}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    fontSize: 14,
                  }}
                >
                  <CTIcon name="check" size={14} stroke="var(--accent)" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <hr style={{ border: 0, borderTop: "1px solid #ffffff20" }} />
          <div>
            <span className="slash" style={{ color: "#ffffff77" }}>
              Nicht beansprucht
            </span>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "14px 0 0",
                display: "grid",
                gap: 12,
              }}
            >
              {[
                "„Öffentlich bestellt & vereidigt\" (IHK)",
                "Gerichtsgutachter-Bestellung",
                "TÜV-Sachverständiger im engeren Sinn",
              ].map((b) => (
                <li
                  key={b}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "center",
                    fontSize: 14,
                    color: "#ffffffaa",
                  }}
                >
                  <CTIcon name="minus" size={14} stroke="#ffffff66" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <hr style={{ border: 0, borderTop: "1px solid #ffffff20" }} />
          <div>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: 16,
                marginBottom: 8,
                color: "var(--paper)",
              }}
            >
              Und was heißt das für Sie?
            </div>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.55,
                color: "#ffffffaa",
                margin: 0,
              }}
            >
              Nach einem unverschuldeten Unfall brauchen Sie keinen öffentlich bestellten Gutachter. Sie haben das Recht, einen freien Sachverständigen Ihrer Wahl zu beauftragen — die gegnerische Versicherung trägt bei klarer Haftungslage die Kosten.
            </p>
          </div>
        </div>
      </div>
    </CTSection>
  );
}

function CTWhyWeDoThis() {
  return (
    <CTSection tone="paper2">
      <div className="split-wide-left" style={{ gap: "clamp(28px, 5vw, 80px)", alignItems: "flex-start" }}>
        <div>
          <span className="slash">Persönliche Note</span>
          <h2 style={{ marginTop: 20, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Warum wir das machen<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>
        <div
          style={{
            fontSize: "clamp(17px, 1.6vw, 20px)",
            lineHeight: 1.6,
            color: "var(--ink)",
            maxWidth: "60ch",
          }}
        >
          <p>
            Wir haben beide erlebt, wie Geschädigte nach einem Unfall von Versicherungen kleingerechnet werden — mit gekürzten Positionen, gedrückten Stundensätzen und „Partnerwerkstätten“, die vor allem der Versicherung dienen. CARTRUST24 haben wir gegründet, damit auf der anderen Seite des Tisches jemand sitzt, der die Sprache der Versicherer spricht — aber für Sie arbeitet.
          </p>
        </div>
      </div>
    </CTSection>
  );
}

function CTGutachterVergleich() {
  const eigen = [
    "Von Ihnen beauftragt — und ausschließlich Ihnen verpflichtet",
    "Erfasst Reparaturkosten, Wertminderung, Wiederbeschaffungs- und Restwert sowie die Ausfalldauer",
    "Reparaturweg nach Herstellervorgabe, freie Werkstattwahl",
    "Das vollständige Gutachten liegt Ihnen selbst vor",
    "Kosten trägt bei klarer Haftungslage die gegnerische Versicherung",
  ];

  const pruf = [
    "Von der eintrittspflichtigen Versicherung beauftragt und bezahlt",
    "Erstellt in der Regel einen Prüfbericht zur Schadenhöhe, kein vollständiges Gutachten",
    "Verweis auf Partnerwerkstätten und deren Stundensätze",
    "Sie erhalten meist nur das Ergebnis, nicht die vollständige Kalkulation",
  ];

  return (
    <CTSection>
      <CTSectionHead
        num="D"
        name="GUTACHTERWAHL"
        meta="Vergleich"
      >
        <h2>
          Zwei Gutachten. <em>Zwei Auftraggeber.</em>
        </h2>
      </CTSectionHead>

      <div
        style={{
          background: "var(--ink)",
          color: "var(--paper)",
          padding: "clamp(24px, 3.4vw, 36px)",
          display: "grid",
          gap: 28,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(24px, 4vw, 48px)",
          }}
        >
          <div>
            <span className="slash" style={{ color: "var(--accent)" }}>
              Ihr eigener Sachverständiger
            </span>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "16px 0 0",
                display: "grid",
                gap: 12,
              }}
            >
              {eigen.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    fontSize: 14,
                    lineHeight: 1.45,
                  }}
                >
                  <span style={{ marginTop: 2, flexShrink: 0 }}>
                    <CTIcon name="check" size={14} stroke="var(--accent)" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="slash" style={{ color: "#ffffff77" }}>
              Prüfdienst der Versicherung
            </span>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "16px 0 0",
                display: "grid",
                gap: 12,
              }}
            >
              {pruf.map((item) => (
                <li
                  key={item}
                  style={{
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                    fontSize: 14,
                    lineHeight: 1.45,
                    color: "#ffffffaa",
                  }}
                >
                  <span style={{ marginTop: 2, flexShrink: 0 }}>
                    <CTIcon name="minus" size={14} stroke="#ffffff66" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr style={{ border: 0, borderTop: "1px solid #ffffff20", margin: 0 }} />

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.55,
            color: "var(--paper)",
            fontWeight: 500,
            margin: 0,
          }}
        >
          Sie müssen den Prüfdienst der gegnerischen Versicherung nicht akzeptieren. Die Wahl des Sachverständigen liegt bei Ihnen.
        </p>
      </div>
    </CTSection>
  );
}

export default function ExpertisePage() {
  return (
    <>
      <SiteHeader />
      <main className="page-fade">
        <CTExpertiseHero />
        <CTPersonen />
        <CTValues />
        <CTQualiHinweis />
        <CTWhyWeDoThis />
        <CTGutachterVergleich />
      </main>
      <SiteFooter />
      <CTTimeStamp />
    </>
  );
}
