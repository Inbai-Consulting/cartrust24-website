import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { CT_BRAND, mailHref } from "@/lib/cartrust";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und Anbieterkennzeichnung der CARTRUST24 Kfz-Gutachten UG (haftungsbeschränkt).",
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-fade">
        <section style={{ paddingTop: 64, paddingBottom: 96 }}>
          <div
            className="wrap"
            style={{ maxWidth: 880, margin: "0 auto" }}
          >
            <h1
              className="display"
              style={{
                fontSize: "clamp(48px, 7vw, 96px)",
                lineHeight: 0.9,
                letterSpacing: "-0.045em",
                fontWeight: 900,
                marginBottom: 48,
              }}
            >
              Impressum
            </h1>

            <div
              style={{
                display: "grid",
                gap: 40,
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--ink)",
              }}
            >
              <section>
                <h2
                  style={{
                    fontSize: 24,
                    letterSpacing: "-0.025em",
                    marginBottom: 12,
                  }}
                >
                  Gesetzliche Anbieterkennung
                </h2>
                <p>
                  CARTRUST24 Kfz-Gutachten UG (haftungsbeschränkt)
                  <br />
                  Nydamer Weg 16
                  <br />
                  22145 Hamburg
                  <br />
                  Deutschland
                </p>
              </section>

              <section>
                <h2
                  style={{
                    fontSize: 24,
                    letterSpacing: "-0.025em",
                    marginBottom: 12,
                  }}
                >
                  Geschäftsführung
                </h2>
                <p>Elias Azizi</p>
              </section>

              <section>
                <h2
                  style={{
                    fontSize: 24,
                    letterSpacing: "-0.025em",
                    marginBottom: 12,
                  }}
                >
                  Kontakt
                </h2>
                <p>
                  Telefon:{" "}
                  <a href={`tel:${CT_BRAND.phoneRaw}`}>{CT_BRAND.phone}</a>
                  <br />
                  E-Mail:{" "}
                  <a href={mailHref} style={{ color: "var(--accent)" }}>
                    {CT_BRAND.email}
                  </a>
                </p>
              </section>

              <section>
                <h2
                  style={{
                    fontSize: 24,
                    letterSpacing: "-0.025em",
                    marginBottom: 12,
                  }}
                >
                  Handelsregister
                </h2>
                <p>
                  Eingetragen im Handelsregister des Amtsgerichts Hamburg
                  <br />
                  Handelsregisternummer {CT_BRAND.hrb}
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
