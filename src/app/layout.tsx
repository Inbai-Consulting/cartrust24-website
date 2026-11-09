import type { Metadata } from "next";
import { Geist, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: {
    default:
      "Kfz Gutachter Hamburg – Unfallgutachten in 24h | CARTRUST24",
    template: "%s | CARTRUST24",
  },
  description:
    "Kfz-Gutachter in Hamburg: Unfallgutachten in 24h vor Ort. Bei unverschuldetem Unfall 0 € für Sie – die gegnerische Versicherung zahlt. ☎ 24h erreichbar.",
  metadataBase: new URL("https://cartrust24.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "CARTRUST24 – Unabhängige Kfz-Sachverständige Hamburg",
    description:
      "Unfallgutachten, Fahrzeugbewertung, Kaufprüfung. Termin in 24 Stunden – vor Ort in Hamburg & Umland.",
    url: "https://cartrust24.de",
    siteName: "CARTRUST24",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CARTRUST24 – Unabhängige Kfz-Sachverständige Hamburg",
    description:
      "Unfallgutachten und Fahrzeugbewertung in Hamburg. Termin in 24h, kostenfrei für Geschädigte.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geist.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["LocalBusiness", "AutomotiveBusiness"],
                  "@id": "https://cartrust24.de/#organization",
                  name: "CARTRUST24 Kfz-Gutachten UG (haftungsbeschränkt)",
                  alternateName: "CARTRUST24",
                  url: "https://cartrust24.de",
                  description:
                    "Unabhängige Kfz-Sachverständige in Hamburg. Unfallgutachten, Fahrzeugbewertung, Kaufprüfung und Kostenvoranschlag – vor Ort, in 24 Stunden, kostenfrei für Geschädigte.",
                  telephone: "+4915567487073",
                  email: "info@cartrust24.de",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Nydamer Weg 16",
                    addressLocality: "Hamburg",
                    postalCode: "22145",
                    addressCountry: "DE",
                  },
                  areaServed: [
                    { "@type": "City", name: "Hamburg" },
                    { "@type": "City", name: "Norderstedt" },
                    { "@type": "City", name: "Pinneberg" },
                    { "@type": "City", name: "Ahrensburg" },
                  ],
                  sameAs: [
                    "https://www.instagram.com/cartrust24_hh/",
                    "https://www.tiktok.com/@cartrust24.kfzgutachten",
                  ],
                  knowsAbout: [
                    "Kfz-Sachverständiger",
                    "Unfallgutachten",
                    "Fahrzeugbewertung",
                    "Kaufprüfung",
                    "Kostenvoranschlag",
                    "Schadenregulierung",
                    "BVSK-Methodik",
                  ],
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                      ],
                      opens: "08:00",
                      closes: "19:00",
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: "Saturday",
                      opens: "09:00",
                      closes: "14:00",
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://cartrust24.de/#website",
                  url: "https://cartrust24.de",
                  name: "CARTRUST24",
                  publisher: { "@id": "https://cartrust24.de/#organization" },
                  inLanguage: "de-DE",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
