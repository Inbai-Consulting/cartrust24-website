"use client";

import { useSyncExternalStore } from "react";

let cached = 0;

function subscribe(callback: () => void) {
  const id = setInterval(() => {
    cached = Date.now();
    callback();
  }, 1000);
  return () => clearInterval(id);
}

function getSnapshot() {
  if (cached === 0) cached = Date.now();
  return cached;
}

function getServerSnapshot() {
  return 0;
}

export default function CTTimeStamp() {
  const ts = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!ts) return null;
  const time = new Date(ts).toLocaleTimeString("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Europe/Berlin",
  });
  return (
    <div className="timestamp" aria-live="off">
      <span className="pulse" />
      <span>Hamburg · {time} GMT+1</span>
      <span style={{ color: "var(--muted)" }}>· 24h erreichbar</span>
    </div>
  );
}
