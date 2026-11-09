/**
 * Blog / "Aus der Praxis" content.
 *
 * Add new entries to BLOG_POSTS as you publish them. The home page picks up
 * the first N (currently 3) and renders them in the "/ 02 · Aktuelles" grid.
 *
 * Media handling:
 *   - { type: "image", src, alt }       → renders <Image> from next/image
 *   - { type: "video", src, poster? }   → renders <video autoplay muted loop>
 *   - { type: "placeholder", label? }   → striped editorial placeholder box
 *
 * `src` is the bare filename. The page wraps it in assetUrl(), so the file
 * must live at public/images/<src>.
 */

export type BlogMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string }
  | { type: "placeholder"; label?: string };

export type BlogPost = {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  href?: string;
  media: BlogMedia;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "fall-frontschaden",
    category: "Fallstudie",
    title: "Frontschaden links — Scheinwerfer, Haube, Stoßfänger",
    description:
      "Schadensbild vorn links: Matrix-Scheinwerfer (IQ.LIGHT) mit deutlichen Rissen, Beule in der Motorhaube, Schürf- und Lackspuren am Stoßfänger. Wir dokumentieren am Fahrzeug alle betroffenen Bauteile und bewerten, was repariert, was getauscht und was kalibriert werden muss — moderne LED-Scheinwerfer sind dabei oft der teuerste Einzelposten am Gutachten.",
    date: "Mai 2026",
    media: {
      type: "image",
      src: "case-frontschaden.jpeg",
      alt: "Frontschaden links mit gerissenem Matrix-Scheinwerfer und Beule in der Motorhaube",
    },
  },
  {
    id: "fall-streifschaden",
    category: "Fallstudie",
    title: "Streifschaden über mehrere Teile",
    description:
      "Lange horizontale Schrammen mit hellem Lackübertrag, durchgehend über Stoßfänger, Seitenwand und Radlauf. Wir messen die Lackschichten an den betroffenen Stellen und dokumentieren jede Riefe — entscheidend für die Frage, ob Smart-Repair ausreicht oder das komplette Teil neu lackiert werden muss.",
    date: "Mai 2026",
    media: {
      type: "image",
      src: "case-streifschaden.jpeg",
      alt: "Streifschaden mit hellem Lackübertrag über Stoßfänger, Seitenwand und Radlauf",
    },
  },
  {
    id: "fall-aussenspiegel",
    category: "Fallstudie",
    title: "Außenspiegel — wenn nicht nur das Glas zählt",
    description:
      "Beschädigter Außenspiegel: Glas weg, Gehäuse offen, Innenleben sichtbar. Wir dokumentieren am Fahrzeug, was an Spiegelgehäuse, Spiegelmotor, Verkabelung und Sensorik tatsächlich betroffen ist — damit die Versicherung das ersetzt, was wirklich getauscht werden muss.",
    date: "Mai 2026",
    media: {
      type: "image",
      src: "case-aussenspiegel.jpeg",
      alt: "Beschädigter Außenspiegel mit freigelegter Verkabelung und Spiegelmotor",
    },
  },
  {
    id: "fall-touareg-vorschaden",
    category: "Fallstudie",
    title: "Versteckter Vorschaden am VW Touareg — 3.200 € gerettet",
    description:
      "Beim Vor-Kauf-Check fanden wir am Unterboden Spuren einer reparierten Karosseriearbeit. Der Verkäufer wusste nichts davon — der Preis ging direkt nach unten.",
    date: "März 2026",
    media: { type: "placeholder", label: "Touareg · Unterboden" },
  },
  {
    id: "lackschicht-messung",
    category: "Aus der Werkstatt",
    title: "Was die Lackschicht-Messung verrät",
    description:
      "Ein einfaches Messgerät kann tausende Euro vor Fehlkäufen retten. Wir zeigen, worauf wir achten — und warum dünn nicht immer dünn bedeutet.",
    date: "Februar 2026",
    media: { type: "placeholder", label: "Lack · 120 µm" },
  },
  {
    id: "bagatell-vs-gutachten",
    category: "Wissen",
    title: "Bagatellgrenze: Wann lohnt sich kein Gutachten?",
    description:
      "Unter ca. 1.000 € Schaden zahlt die Versicherung das Vollgutachten oft nicht — wir erklären, was Sie stattdessen brauchen.",
    date: "Januar 2026",
    media: { type: "placeholder", label: "Bagatell · 750 €" },
  },
];
