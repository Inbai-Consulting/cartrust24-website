// llms.txt nach Spezifikation https://llmstxt.org/
// Maschinenlesbare Zusammenfassung der Seite fuer LLMs und KI-Agenten.
// Statisch zur Build-Zeit erzeugt (kein Laufzeit-Overhead).
//
// Die FAQ-Sektion liest aus derselben Quelle wie die /faq-Seite und das
// FAQPage JSON-LD – Aenderungen in faq-data.ts schlagen automatisch durch.

import { CT_FAQ } from "../faq/faq-data";

export const dynamic = "force-static";

const baseUrl = "https://cartrust24.de";

function renderFaq(): string {
  return CT_FAQ.map(
    (group) =>
      `### ${group.cat}\n\n${group.qs
        .map(([q, a]) => `**${q}**\n\n${a}`)
        .join("\n\n")}`,
  ).join("\n\n");
}

export function GET() {
  const body = `# CARTRUST24

> Unabhaengige Kfz-Sachverstaendige in Hamburg und Umland. Unfallgutachten, Fahrzeugbewertung, Kauf- und Verkaufspruefung, Kostenvoranschlag. Termin in 24 Stunden vor Ort. Fuer Geschaedigte bei unverschuldetem Unfall kostenfrei – die gegnerische Versicherung zahlt.

CARTRUST24 ist ein unabhaengiges Kfz-Sachverstaendigenbuero mit Sitz in Hamburg. Gutachten nach BVSK-Methodik fuer Unfaelle, Fahrzeugwerte, Kauf- und Verkaufsentscheidungen sowie Reparaturkosten. Einsatzgebiet: Hamburg, Norderstedt, Pinneberg und Ahrensburg. Erreichbar 24 Stunden unter +49 15567 487073.

## Schluesselfakten

- Telefon (24 h): +49 15567 487073
- E-Mail: info@cartrust24.de
- Termin: innerhalb von 24 Stunden, vor Ort beim Fahrzeug
- Methodik: BVSK
- Status: unabhaengig, nicht versicherungsgebunden
- Kosten fuer Geschaedigte (unverschuldeter Unfall): 0 € – die gegnerische Versicherung zahlt
- Festpreise fuer Eigenauftraege (Fahrzeugbewertung, Kaufpruefung, Kostenvoranschlag)

## Leistungen

- [Unfallgutachten](${baseUrl}/leistung): Vollstaendiges Schadengutachten nach BVSK fuer Haftpflicht- und Kaskofaelle. Grundlage fuer die Schadenregulierung gegenueber der gegnerischen Versicherung.
- [Fahrzeugbewertung](${baseUrl}/leistung): Marktwert- und Wiederbeschaffungswertgutachten fuer Verkauf, Kauf, Erbschaft, Scheidung oder Finanzamt.
- [Kauf- und Verkaufspruefung](${baseUrl}/leistung): Technische Pruefung vor dem Kauf oder Verkauf eines Gebrauchtwagens, inklusive Probefahrt und Maengelliste.
- [Kostenvoranschlag](${baseUrl}/leistung): Kalkulation der Reparaturkosten bei Bagatellschaeden – guenstigere Alternative zum Vollgutachten unterhalb der Bagatellgrenze.

## Einsatzgebiet

- Hamburg
- Norderstedt
- Pinneberg
- Ahrensburg

## Team

- Elias Azizi – Geschaeftsfuehrer, Kfz-Sachverstaendiger
- Walid Mohtasebzada – B.Eng. Fahrzeugtechnik

## Kernseiten

- [Startseite](${baseUrl}/): Uebersicht, Ablauf, Sofortkontakt.
- [Leistungen](${baseUrl}/leistung): Alle vier Leistungen mit Festpreisen und BVSK-Methodik.
- [Expertise](${baseUrl}/expertise): Team und Qualifikationen.
- [FAQ](${baseUrl}/faq): Wer zahlt das Gutachten, wann reicht ein Kostenvoranschlag, was passiert bei Totalschaden.
- [Kontakt](${baseUrl}/kontakt): Anfrage, Telefon, Termin in 24 Stunden.

## Haeufige Fragen

${renderFaq()}

## Optional

- [Impressum](${baseUrl}/impressum)
- [Datenschutz](${baseUrl}/datenschutz)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
