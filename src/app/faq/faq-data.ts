export type FaqGroup = {
  cat: string;
  qs: [string, string][];
};

export const CT_FAQ: FaqGroup[] = [
  {
    cat: "Kosten & Abrechnung",
    qs: [
      [
        "Wer zahlt das Gutachten?",
        "Bei einem unverschuldeten Unfall (Haftpflichtschaden) trägt die gegnerische Versicherung die Gutachterkosten als notwendige Wiederherstellungskosten. Voraussetzung: Der Schaden liegt über der Bagatellgrenze (ca. 1.000 €). Bei Kaskoschäden oder Bagatellschäden gelten andere Regeln — wir prüfen das vorab in 5 Minuten am Telefon.",
      ],
      [
        "Was kostet ein Gutachten, wenn ich es selbst bezahlen muss?",
        "Die Kosten richten sich nach Schadenshöhe (BVSK-Honorartabelle). Für Schäden bis 5.000 € bewegen sich Vollgutachten typischerweise zwischen 350 € und 700 €. Bei Bewertungs- und Kaufprüfgutachten arbeiten wir mit transparenten Festpreisen.",
      ],
      [
        "Bekomme ich auch Wertminderung und Nutzungsausfall erstattet?",
        "Ja — beides sind eigenständige Schadenpositionen, die zusätzlich zu den Reparaturkosten erstattet werden. Wertminderung berechnen wir nach BVSK; den Nutzungsausfall nach der Tabelle Sanden/Danner/Küppersbusch, gestaffelt nach Fahrzeugklasse.",
      ],
    ],
  },
  {
    cat: "Ablauf & Wahl",
    qs: [
      [
        "Darf ich den Gutachter frei wählen?",
        "Ja, ausdrücklich. Bei unverschuldeten Unfällen haben Sie das Recht, einen unabhängigen Sachverständigen Ihrer Wahl zu beauftragen — Sie müssen den Vorschlag der gegnerischen Versicherung nicht annehmen. Ein vom Gegner empfohlener Gutachter arbeitet in dessen Interesse, nicht in Ihrem.",
      ],
      [
        "Wie schnell kann ein Termin erfolgen?",
        "In der Regel innerhalb von 24 Stunden, häufig noch am gleichen Tag. Bei akuten Fällen am Unfallort kommen wir auch außerhalb der Bürozeiten. Wir kommen zu Ihnen — nach Hause, in die Werkstatt oder an den Standort des Fahrzeugs.",
      ],
      [
        "Wie lange dauert die Erstellung des Gutachtens?",
        "Das fertige Gutachten liegt typischerweise innerhalb von 2–3 Werktagen vor und wird sowohl Ihnen als auch der Versicherung zugestellt. Bei einfachen Fällen oft schneller, bei komplexen Strukturschäden kann es 5–7 Tage dauern.",
      ],
      [
        "Was bringe ich zum Termin mit?",
        "Fahrzeugschein (Zulassungsbescheinigung Teil I), Personalausweis, Unfallbericht oder Polizeiprotokoll (falls vorhanden), Daten der gegnerischen Versicherung und – sofern bereits vorhanden – Fotos vom Unfallort. Alles weitere klären wir vor Ort.",
      ],
    ],
  },
  {
    cat: "Versicherung & Recht",
    qs: [
      [
        "Was ist der Unterschied zwischen Haftpflicht- und Kaskoschaden?",
        "Beim Haftpflichtschaden zahlt die Versicherung des Schuldigen — bei Ihnen entstehen keine Kosten. Beim Kaskoschaden (Selbstverschulden, Wildunfall, Hagel) zahlt Ihre eigene Versicherung, oft mit Selbstbeteiligung, und stellt häufig selbst einen Gutachter. Ein unabhängiges Zweitgutachten ist trotzdem Ihr Recht.",
      ],
      [
        "Brauche ich einen Anwalt?",
        "Bei klaren Bagatellschäden meist nicht. Bei Verletzten, strittiger Schuldfrage oder höherem Schaden lohnt sich ein spezialisierter Verkehrsanwalt fast immer — die Kosten trägt bei unverschuldetem Unfall der Gegner. Wir vermitteln gerne an erfahrene Hamburger Verkehrsanwälte.",
      ],
      [
        "Was passiert bei einem Totalschaden?",
        "Liegen die Reparaturkosten über dem Wiederbeschaffungswert, spricht man von einem wirtschaftlichen Totalschaden. Sie bekommen den Wiederbeschaffungswert abzüglich Restwert ausgezahlt. Bei der sogenannten 130%-Regel können Sie unter Umständen trotzdem reparieren lassen — das prüfen wir individuell.",
      ],
    ],
  },
  {
    cat: "Bagatell vs. Vollgutachten",
    qs: [
      [
        "Wann reicht ein Kostenvoranschlag?",
        "Bei Schäden bis ca. 1.000 € (Bagatellgrenze nach ADAC) genügt in der Regel ein Werkstatt-Kostenvoranschlag. Die gegnerische Versicherung erstattet dann nur die reine Reparaturkalkulation — nicht die Kosten eines vollwertigen Gutachtens. Wir empfehlen ehrlich und beraten neutral.",
      ],
      [
        "Kann ich auch fiktiv abrechnen?",
        "Ja. Sie sind nicht verpflichtet, das Fahrzeug tatsächlich reparieren zu lassen — die Versicherung zahlt die im Gutachten kalkulierten Netto-Reparaturkosten aus. Die Mehrwertsteuer wird nur bei tatsächlicher Reparatur (mit Rechnung) erstattet.",
      ],
    ],
  },
];
