import Link from "next/link";
import Image from "next/image";
import { assetUrl } from "@/lib/assets";
import {
  CT_BRAND,
  instagramHref,
  mailHref,
  telHref,
  tiktokHref,
  waHref,
} from "@/lib/cartrust";
import { CTIcon, CTMarquee } from "./ct-primitives";

export default function SiteFooter() {
  return (
    <footer>
      <div className="marquee-band">
        <CTMarquee
          items={[
            "Lass uns reden",
            <em key="m1">schnell, ehrlich, vor Ort</em>,
            "Lass uns reden",
            <em key="m2">Hamburg & Umland</em>,
          ]}
          speed={48}
        />
      </div>

      <div className="wrap" style={{ paddingTop: 96 }}>
        <div className="split-wide-left split-end">
          <h2
            style={{ fontSize: "clamp(48px, 7vw, 120px)", maxWidth: "14ch" }}
          >
            Nach dem Unfall ist <em>jede Stunde</em> bares Geld.
          </h2>
          <div style={{ display: "grid", gap: 12, justifyItems: "start" }}>
            <a href={telHref} className="btn btn-primary btn-lg">
              <CTIcon name="phone" size={16} /> 24h · {CT_BRAND.phone}
            </a>
            <a href={waHref} className="btn btn-ghost btn-md">
              <CTIcon name="wa" size={16} /> WhatsApp-Chat starten
            </a>
            <a href={mailHref} className="btn btn-ghost btn-md">
              <CTIcon name="mail" size={16} /> E-Mail schreiben
            </a>
          </div>
        </div>

        <div className="foot-grid">
          <div>
            <h4>Standort</h4>
            <div style={{ fontSize: 14, lineHeight: 1.7 }}>
              {CT_BRAND.uglong}
              <br />
              {CT_BRAND.street}
              <br />
              {CT_BRAND.postcode}
              <br />
              <span style={{ color: "var(--muted)" }}>
                Servicegebiet: Hamburg &amp; Umland
              </span>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <Image
                src={assetUrl("dea3cbe7-b222-467c-bb4b-07b9eae6e8cd.svg")}
                alt="TÜV Rheinland Zertifikat"
                width={80}
                height={80}
                className="h-14 w-auto"
              />
              <Image
                src={assetUrl("94485329-0339-41b4-a48c-f83e5bf88508.jpg")}
                alt="Classic Data Zertifikat"
                width={80}
                height={80}
                className="h-14 w-auto"
              />
            </div>
          </div>
          <div>
            <h4>Direkt</h4>
            <ul>
              <li>
                <a href={telHref} className="foot-direct-link">
                  <span className="foot-direct-icon" aria-hidden="true">
                    <CTIcon name="phone" size={16} />
                  </span>
                  <span>{CT_BRAND.phone}</span>
                </a>
              </li>
              <li>
                <a href={mailHref} className="foot-direct-link">
                  <span className="foot-direct-icon" aria-hidden="true">
                    <CTIcon name="mail" size={16} />
                  </span>
                  <span>{CT_BRAND.email}</span>
                </a>
              </li>
              <li>
                <a href={waHref} className="foot-direct-link">
                  <span className="foot-direct-icon" aria-hidden="true">
                    <CTIcon name="wa" size={16} />
                  </span>
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CARTRUST24 auf Instagram"
                  className="foot-direct-link"
                >
                  <span className="foot-direct-icon" aria-hidden="true">
                    <CTIcon name="instagram" size={16} />
                  </span>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href={tiktokHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CARTRUST24 auf TikTok"
                  className="foot-direct-link"
                >
                  <span className="foot-direct-icon" aria-hidden="true">
                    <CTIcon name="tiktok" size={17.5} sw={1.8} />
                  </span>
                  <span>TikTok</span>
                </a>
              </li>
              <li style={{ color: "var(--muted)" }}>
                Mo–So · 24h Bereitschaft
              </li>
            </ul>
          </div>
          <div>
            <h4>Leistungen</h4>
            <ul>
              <li>
                <Link href="/leistung" className="foot-direct-link">
                  <span className="foot-direct-icon" aria-hidden="true">
                    <CTIcon name="file-text" size={16} />
                  </span>
                  <span>Unfallgutachten</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/leistungen/fahrzeugbewertung-hamburg"
                  className="foot-direct-link"
                >
                  <span className="foot-direct-icon" aria-hidden="true">
                    <CTIcon name="car" size={16} />
                  </span>
                  <span>Fahrzeugbewertung</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/leistung#kostenvoranschlag"
                  className="foot-direct-link"
                >
                  <span className="foot-direct-icon" aria-hidden="true">
                    <CTIcon name="calculator" size={16} />
                  </span>
                  <span>Kostenvoranschlag</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Über</h4>
            <ul>
              <li>
                <Link href="/expertise" className="foot-direct-link">
                  <span className="foot-direct-icon" aria-hidden="true">
                    <CTIcon name="users" size={16} />
                  </span>
                  <span>Team &amp; Expertise</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="foot-direct-link">
                  <span className="foot-direct-icon" aria-hidden="true">
                    <CTIcon name="help-circle" size={16} />
                  </span>
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="foot-direct-link">
                  <span className="foot-direct-icon" aria-hidden="true">
                    <CTIcon name="calendar" size={16} />
                  </span>
                  <span>Termin sichern</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>
            {new Date().getFullYear()} {CT_BRAND.name} · {CT_BRAND.hrb}
          </span>
          <span className="right">
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
