"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { CTPlaceholder, CTSection, CTSectionHead } from "../ct-primitives";
import { ASSET_BLUR_DATA_URL, assetUrl } from "@/lib/assets";
import { VIDEOS } from "@/lib/videos";

/* ── Videos · Player im Hochformat ─────────────────────────────────── */
//
// Ein Gerät links, die übrigen Videos als Streifen daneben — dasselbe Muster wie
// auf der Graffiti-Seite, aber in der Bildsprache dieser Seite: 1px-Linien,
// Papierfarben, Mono-Labels statt Comic-Rahmen.
//
// Ein Eintrag ohne `src` rendert bewusst einen Platzhalter und keinen Player:
// ein <video> auf eine fehlende Datei ist auf der Seite eine schwarze Fläche,
// und genau so ist diese Sektion beim Nachbarn schon einmal kaputtgegangen.

export default function CTVideos() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (VIDEOS.length === 0) return null;

  const current = VIDEOS[Math.min(active, VIDEOS.length - 1)];
  const playable = Boolean(current.src);

  function select(index: number) {
    setActive(index);
    setPlaying(false);
    videoRef.current?.pause();
  }

  function togglePlay() {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      void el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  }

  return (
    <CTSection>
      <CTSectionHead
        num="02"
        name="Videos"
        meta="Aus der Werkstatt"
        hSmall="Kurze Erklärstücke — Schadenaufnahme, Messung, Bewertung."
      >
        <h2 style={{ maxWidth: "20ch" }}>
          Sehen Sie uns <em>bei der Arbeit zu.</em>
        </h2>
      </CTSectionHead>

      <div className="video-stage">
        <div className="video-frame">
          {playable ? (
            <>
              <video
                ref={videoRef}
                className="video-el"
                key={current.src}
                src={assetUrl(current.src as string)}
                poster={current.poster ? assetUrl(current.poster) : undefined}
                playsInline
                preload="metadata"
                onEnded={() => setPlaying(false)}
                onPause={() => setPlaying(false)}
              />
              <button
                type="button"
                className="video-play"
                data-hidden={playing ? "true" : "false"}
                onClick={togglePlay}
                aria-label={`${current.title} abspielen`}
              >
                <span aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="26" height="26">
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                </span>
              </button>
            </>
          ) : (
            <CTPlaceholder
              tag="Video folgt"
              aspect="9 / 16"
              style={{ height: "100%", border: "none" }}
            />
          )}
        </div>

        <div className="video-list">
          {VIDEOS.map((v, i) => (
            <button
              key={v.id}
              type="button"
              className="video-item"
              data-active={i === active ? "true" : "false"}
              onClick={() => select(i)}
              aria-current={i === active}
            >
              <span className="video-thumb">
                {v.poster ? (
                  <Image
                    src={assetUrl(v.poster)}
                    alt=""
                    fill
                    sizes="88px"
                    style={{ objectFit: "cover" }}
                    placeholder="blur"
                    blurDataURL={ASSET_BLUR_DATA_URL}
                  />
                ) : null}
              </span>
              <span className="video-item-text">
                <span className="video-item-title">{v.title}</span>
                <span className="mono video-item-meta">{v.meta}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </CTSection>
  );
}
