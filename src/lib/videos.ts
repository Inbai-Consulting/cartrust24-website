/**
 * Videos für die Sektion "/ 09 · Videos" auf der Startseite.
 *
 * SO FÜGST DU EIN VIDEO HINZU
 * ---------------------------
 * 1. Videodatei nach public/images/ legen, genau wie die Bilder. Hochformat
 *    9:16 sieht am besten aus, sonst wird mittig beschnitten.
 * 2. Hier in VIDEOS den passenden Eintrag ergänzen:
 *      title   → Überschrift unter dem Video
 *      src     → NUR der Dateiname, z. B. "werkstatt-rundgang.mp4"
 *      poster  → NUR der Dateiname des Vorschaubilds, z. B. "werkstatt.jpg"
 * 3. Fertig — die Startseite zeigt alle Einträge dieser Liste.
 *
 * SOLANGE NOCH KEIN VIDEO DA IST
 * ------------------------------
 * Lass `src` einfach weg. Der Eintrag zeigt dann einen Platzhalter statt eines
 * kaputten Players. Kein Eintrag zeigt auf eine Datei, die es nicht gibt: ein
 * Video, das ins Leere zeigt, wird auf der Seite zu einer schwarzen Fläche.
 *
 * GRÖSSE
 * -------
 * Der Player zeigt das Video 300 Pixel breit. 608 Pixel Breite sind damit auf
 * jedem Bildschirm scharf, auch auf einem Retina-Display, und sparen gegenüber
 * 720 Pixeln rund 40 Prozent Dateigröße. Ein Video über etwa 15 MB wird vor dem
 * Hochladen einmal umgewandelt:
 *
 *   ffmpeg -i original.mp4 -vf "scale=608:-2" -c:v libx264 -crf 27 \
 *          -preset medium -c:a aac -b:a 64k -movflags +faststart out.mp4
 *
 * Das ist Handarbeit und soll es bleiben: Umwandeln braucht viel Rechenzeit,
 * und im Server, der dem Kunden antworten soll, hätte es nichts verloren.
 * Vorschaubilder sind etwas anderes — die entstehen aus einem einzigen Bild
 * und laufen deshalb automatisch.
 *
 * Die Videos liegen bewusst bei uns: die Startseite baut KEINE Verbindung zu
 * YouTube, Instagram oder TikTok auf.
 */

export type VideoItem = {
  id: string;
  /** Überschrift unter dem Video. */
  title: string;
  /** Kurze Einordnung, eine Zeile. */
  meta: string;
  /** Bare filename, resolved through assetUrl() — same convention as BLOG_POSTS. */
  src?: string;
  /** Bare filename of the still shown before playback. */
  poster?: string;
};

export const VIDEOS: VideoItem[] = [
  {
    id: "gutachter-bezahlen",
    title: "Wer bezahlt den Gutachter?",
    meta: "Nach dem Unfall — kurz erklärt",
    src: "0b4e89bb-998f-4656-bfa5-165603301c0f.mp4",
    poster: "0b4e89bb-998f-4656-bfa5-165603301c0f.jpg",
  },
  {
    id: "ohne-versicherung",
    title: "„Lass uns das ohne Versicherung klären.“",
    meta: "Was der Unfallgegner gern vorschlägt",
    src: "e3b6f3b6-d0f4-4515-8ab4-e2e95ed9bbf2.mp4",
    poster: "e3b6f3b6-d0f4-4515-8ab4-e2e95ed9bbf2.jpg",
  },
  {
    id: "kontakt",
    title: "So erreichen Sie uns",
    meta: "Telefon, E-Mail, Hamburg und Umgebung",
    src: "6d288ec7-5376-449d-a248-e70d623fefcc.mp4",
    poster: "6d288ec7-5376-449d-a248-e70d623fefcc.jpg",
  },
];
