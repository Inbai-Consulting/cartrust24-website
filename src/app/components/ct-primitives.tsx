import * as React from "react";

type IconName =
  | "phone"
  | "wa"
  | "mail"
  | "pin"
  | "clock"
  | "arrow"
  | "arrow-up-r"
  | "check"
  | "plus"
  | "minus"
  | "star"
  | "warn"
  | "instagram"
  | "tiktok"
  | "file-text"
  | "car"
  | "calculator"
  | "users"
  | "help-circle"
  | "calendar";

export function CTIcon({
  name,
  size = 16,
  stroke = "currentColor",
  sw = 1.5,
}: {
  name: IconName;
  size?: number;
  stroke?: string;
  sw?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: sw,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "phone":
      return (
        <svg {...common}>
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
        </svg>
      );
    case "wa":
      return (
        <svg {...common}>
          <path d="M3 21l1.6-5.2A8.5 8.5 0 1 1 8.7 19.4L3 21Z" />
          <path d="M8.5 9.5c.4 2.4 2.6 4.6 5 5" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      );
    case "arrow-up-r":
      return (
        <svg {...common}>
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M4 12.5 10 18 20 6" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M12 5v14M5 12h14" />
        </svg>
      );
    case "minus":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="M12 3l2.5 6 6.5.5-5 4.5L17.5 21 12 17.5 6.5 21 8 14 3 9.5l6.5-.5L12 3Z" />
        </svg>
      );
    case "warn":
      return (
        <svg {...common}>
          <path d="M12 4 2 20h20L12 4Z" />
          <path d="M12 10v5M12 18v.5" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common}>
          <path d="M8 13a4.5 4.5 0 1 0 4.5 4.5V2.5a8.5 8.5 0 0 0 8.5 8.5" />
        </svg>
      );
    case "file-text":
      return (
        <svg {...common}>
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      );
    case "car":
      return (
        <svg {...common}>
          <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H7.5a1 1 0 0 0-.8.4L4 11l-1.16.86a1 1 0 0 0-.84.99V16h3" />
          <circle cx="6.5" cy="16.5" r="2.5" />
          <circle cx="16.5" cy="16.5" r="2.5" />
        </svg>
      );
    case "calculator":
      return (
        <svg {...common}>
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="16" y1="14" x2="16" y2="18" />
          <path d="M16 10h.01" />
          <path d="M12 10h.01" />
          <path d="M8 10h.01" />
          <path d="M12 14h.01" />
          <path d="M8 14h.01" />
          <path d="M12 18h.01" />
          <path d="M8 18h.01" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "help-circle":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
  }
}

export function CTSection({
  children,
  id,
  tone,
  style,
}: {
  children: React.ReactNode;
  id?: string;
  tone?: "dark" | "paper2" | "accent";
  style?: React.CSSProperties;
}) {
  const t: React.CSSProperties | undefined =
    tone === "dark"
      ? { background: "var(--ink)", color: "var(--paper)" }
      : tone === "paper2"
      ? { background: "var(--paper-2)" }
      : tone === "accent"
      ? { background: "var(--accent)", color: "var(--paper)" }
      : undefined;
  return (
    <section id={id} className="section" style={{ ...t, ...style }}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function CTSectionHead({
  num,
  name,
  hSmall,
  meta,
  children,
}: {
  num: string;
  name: string;
  hSmall?: React.ReactNode;
  meta?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className="sec-head">
      <div className="top">
        <span className="micro">
          / {num} <b>· {name}</b>
        </span>
        {meta && <span className="micro">{meta}</span>}
      </div>
      {hSmall && <span className="h-small">{hSmall}</span>}
      {children}
    </header>
  );
}

export function CTPlaceholder({
  tag,
  id,
  aspect = "4 / 3",
  dark = false,
  style,
  children,
}: {
  tag?: string;
  id?: string;
  aspect?: string;
  dark?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={"ph" + (dark ? " dark" : "")}
      style={{ aspectRatio: aspect, ...style }}
    >
      <span className="ph-tag">{tag || "Bildplatz"}</span>
      <span className="ph-id">{id || ""}</span>
      {children}
    </div>
  );
}

export function CTMarquee({
  items,
  tone = "display",
  speed = 60,
  accent = "var(--accent)",
}: {
  items: React.ReactNode[];
  tone?: "display" | "mono";
  speed?: number;
  accent?: string;
}) {
  const cls = tone === "mono" ? "marquee-mono" : "marquee-display";
  const row = (prefix: string) =>
    items.map((it, i) => (
      <React.Fragment key={`${prefix}-${i}`}>
        <span>{it}</span>
        <span className="star" style={{ color: accent }}>
          ✱
        </span>
      </React.Fragment>
    ));
  return (
    <div className="marquee" aria-hidden="true">
      <div
        className={"marquee-track " + cls}
        style={{ animationDuration: speed + "s" }}
      >
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}

export function CTStat({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix?: string;
  label: string;
}) {
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 900,
          fontSize: "clamp(56px, 7vw, 96px)",
          lineHeight: 0.92,
          letterSpacing: "-0.045em",
          color: "var(--ink)",
        }}
      >
        {value}
        {suffix && (
          <span
            style={{ color: "var(--accent)", fontSize: "0.5em", marginLeft: 4 }}
          >
            {suffix}
          </span>
        )}
      </div>
      <div className="mono" style={{ color: "var(--muted)" }}>
        {label}
      </div>
    </div>
  );
}
