"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CT_BRAND, CT_NAV, mailHref, telHref, waHref } from "@/lib/cartrust";
import { CTIcon } from "./ct-primitives";

export default function SiteHeader() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  // Lock body scroll + escape-to-close while menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href ||
        pathname.startsWith(href + "/") ||
        (href === "/leistung" && pathname.startsWith("/leistungen"));

  return (
    <>
      <header className="topbar">
        <nav className="nav" aria-label="Hauptnavigation">
          <Link
            href="/"
            aria-label="CARTRUST24 — zur Startseite"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <Image
              src="/logo.svg"
              alt="CARTRUST24"
              width={1280}
              height={573}
              priority
              style={{ height: 48, width: "auto" }}
            />
          </Link>
          <div className="nav-links">
            {CT_NAV.map((n) => {
              if (n.href === "/leistung") {
                return (
                  <div key={n.href} className="nav-dropdown">
                    <Link
                      href={n.href}
                      className={isActive(n.href) ? "active nav-dropdown-trigger" : "nav-dropdown-trigger"}
                    >
                      {n.label}
                    </Link>
                    <div className="nav-dropdown-menu">
                      <Link
                        href="/leistung/detail"
                        className={`nav-dropdown-item ${pathname === "/leistung/detail" ? "active" : ""}`}
                      >
                        Leistungsdetails{" "}
                        <CTIcon name="arrow" size={12} />
                      </Link>
                      <Link
                        href="/leistungen/unfallgutachten-hamburg"
                        className={`nav-dropdown-item ${pathname === "/leistungen/unfallgutachten-hamburg" ? "active" : ""}`}
                      >
                        Unfallgutachten im Detail{" "}
                        <CTIcon name="arrow" size={12} />
                      </Link>
                      <Link
                        href="/leistungen/fahrzeugbewertung-hamburg"
                        className={`nav-dropdown-item ${pathname === "/leistungen/fahrzeugbewertung-hamburg" ? "active" : ""}`}
                      >
                        Fahrzeugbewertung im Detail{" "}
                        <CTIcon name="arrow" size={12} />
                      </Link>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={isActive(n.href) ? "active" : ""}
                >
                  {n.label}
                </Link>
              );
            })}
          </div>
          <div className="nav-cta">
            <span className="nav-phone">
              <span>24h</span>
              {CT_BRAND.phone}
            </span>
            <Link
              href="/kontakt"
              className="btn btn-primary nav-cta-desktop"
              style={{ padding: "10px 18px", fontSize: 13 }}
            >
              Termin sichern{" "}
              <span className="arr">
                <CTIcon name="arrow-up-r" size={12} />
              </span>
            </Link>
            <button
              type="button"
              className="nav-burger"
              onClick={() => setOpen(true)}
              aria-label="Menü öffnen"
              aria-expanded={open}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M3 8h18M3 16h18" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true">
          <div className="mobile-menu-top">
            <Link
              href="/"
              aria-label="CARTRUST24 — zur Startseite"
              style={{ display: "inline-flex", alignItems: "center" }}
              onClick={() => setOpen(false)}
            >
              <Image
                src="/logo.svg"
                alt="CARTRUST24"
                width={1280}
                height={573}
                style={{ height: 42, width: "auto" }}
              />
            </Link>
            <button
              type="button"
              className="nav-burger"
              onClick={() => setOpen(false)}
              aria-label="Menü schließen"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <nav
            className="mobile-menu-links"
            aria-label="Mobile Navigation"
          >
            {CT_NAV.map((n, i) => (
              <div key={n.href} className="mobile-menu-item-wrap">
                <Link
                  href={n.href}
                  className={isActive(n.href) ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  <span className="num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{n.label}</span>
                </Link>
                {n.href === "/leistung" && (
                  <>
                    <Link
                      href="/leistung/detail"
                      className={`mobile-menu-sublink ${pathname === "/leistung/detail" ? "active" : ""}`}
                      onClick={() => setOpen(false)}
                    >
                      <span>↳ Leistungsdetails</span>
                    </Link>
                    <Link
                      href="/leistungen/unfallgutachten-hamburg"
                      className={`mobile-menu-sublink ${pathname === "/leistungen/unfallgutachten-hamburg" ? "active" : ""}`}
                      onClick={() => setOpen(false)}
                    >
                      <span>↳ Unfallgutachten im Detail</span>
                    </Link>
                    <Link
                      href="/leistungen/fahrzeugbewertung-hamburg"
                      className={`mobile-menu-sublink ${pathname === "/leistungen/fahrzeugbewertung-hamburg" ? "active" : ""}`}
                      onClick={() => setOpen(false)}
                    >
                      <span>↳ Fahrzeugbewertung im Detail</span>
                    </Link>
                  </>
                )}
              </div>
            ))}
          </nav>

          <div className="mobile-menu-actions">
            <a href={telHref} className="btn btn-accent btn-lg">
              <CTIcon name="phone" size={16} stroke="var(--paper)" />{" "}
              {CT_BRAND.phone}
            </a>
            <a href={waHref} className="btn btn-ghost btn-md">
              <CTIcon name="wa" size={16} /> WhatsApp-Chat
            </a>
            <a href={mailHref} className="btn btn-ghost btn-md">
              <CTIcon name="mail" size={16} /> {CT_BRAND.email}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
