import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der CARTRUST24 Kfz-Gutachten UG (haftungsbeschränkt).",
  alternates: { canonical: "/datenschutz" },
};

const h2Style: React.CSSProperties = {
  fontSize: 32,
  letterSpacing: "-0.025em",
  fontWeight: 800,
  marginTop: 56,
  marginBottom: 16,
};

const h3Style: React.CSSProperties = {
  fontSize: 22,
  letterSpacing: "-0.02em",
  fontWeight: 700,
  marginTop: 32,
  marginBottom: 10,
};

const pStyle: React.CSSProperties = {
  marginBottom: 14,
  color: "var(--ink)",
};

export default function DatenschutzPage() {
  return (
    <>
      <SiteHeader />
      <main className="page-fade">
        <section style={{ paddingTop: 64, paddingBottom: 96 }}>
          <div
            className="wrap"
            style={{ maxWidth: 880, margin: "0 auto" }}
          >
            <h1
              className="display"
              style={{
                fontSize: "clamp(48px, 7vw, 96px)",
                lineHeight: 0.9,
                letterSpacing: "-0.045em",
                fontWeight: 900,
                marginBottom: 32,
              }}
            >
              Datenschutz­erklärung
            </h1>

            <div
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--ink)",
              }}
            >
              <p style={pStyle}>
                Soweit nachstehend keine anderen Angaben gemacht werden, ist die
                Bereitstellung Ihrer personenbezogenen Daten weder gesetzlich
                oder vertraglich vorgeschrieben, noch für einen Vertragsabschluss
                erforderlich. Sie sind zur Bereitstellung der Daten nicht
                verpflichtet. Eine Nichtbereitstellung hat keine Folgen. Dies
                gilt nur soweit bei den nachfolgenden Verarbeitungsvorgängen
                keine anderweitige Angabe gemacht wird.
              </p>
              <p style={pStyle}>
                „Personenbezogene Daten“ sind alle Informationen, die sich auf
                eine identifizierte oder identifizierbare natürliche Person
                beziehen.
              </p>

              <h2 style={h2Style}>Server-Logfiles</h2>
              <p style={pStyle}>
                Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer
                Person zu machen. Bei jedem Zugriff auf unsere Website werden an
                uns oder unseren Webhoster / IT-Dienstleister Nutzungsdaten
                durch Ihren Internet Browser übermittelt und in Protokolldaten
                (sog. Server-Logfiles) gespeichert. Zu diesen gespeicherten
                Daten gehören z.B. der Name der aufgerufenen Seite, Datum und
                Uhrzeit des Abrufs, die IP-Adresse, die übertragene Datenmenge
                und der anfragende Provider. Die Verarbeitung erfolgt auf
                Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem
                überwiegenden berechtigten Interesse an der Gewährleistung
                eines störungsfreien Betriebs unserer Website sowie zur
                Verbesserung unseres Angebotes.
              </p>
              <p style={pStyle}>
                Unser Webhoster ist GitHub Pages der GitHub, Inc., 88 Colin P.
                Kelly Jr. St., San Francisco, CA 94107, USA. GitHub speichert
                die IP-Adresse beim Aufruf aus Sicherheitsgründen. GitHub ist
                nach dem EU-US Data Privacy Framework zertifiziert, auf das wir
                die Übermittlung in die USA stützen.
              </p>

              <h2 style={h2Style}>Kontakt</h2>

              <h3 style={h3Style}>Verantwortlicher</h3>
              <p style={pStyle}>
                Kontaktieren Sie uns auf Wunsch. Verantwortlicher für die
                Datenverarbeitung ist: Elias Azizi, Nydamer Weg 16, 22145
                Hamburg Deutschland, +4915567487073, info@cartrust24.de
              </p>

              <h3 style={h3Style}>
                Initiativ-Kontaktaufnahme des Kunden per E-Mail
              </h3>
              <p style={pStyle}>
                Wenn Sie per E-Mail initiativ mit uns in Geschäftskontakt
                treten, erheben wir Ihre personenbezogenen Daten (Name,
                E-Mail-Adresse, Nachrichtentext) nur in dem von Ihnen zur
                Verfügung gestellten Umfang. Die Datenverarbeitung dient der
                Bearbeitung und Beantwortung Ihrer Kontaktanfrage. Wenn die
                Kontaktaufnahme der Durchführung vorvertraglichen Maßnahmen
                (bspw. Beratung bei Kaufinteresse, Angebotserstellung) dient
                oder einen bereits zwischen Ihnen und uns geschlossenen Vertrag
                betrifft, erfolgt diese Datenverarbeitung auf Grundlage des
                Art. 6 Abs. 1 lit. b DSGVO. Erfolgt die Kontaktaufnahme aus
                anderen Gründen, erfolgt diese Datenverarbeitung auf Grundlage
                des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden
                berechtigten Interesse an der Bearbeitung und Beantwortung
                Ihrer Anfrage.
              </p>
              <p style={pStyle}>
                In diesem Fall haben Sie das Recht, aus Gründen, die sich aus
                Ihrer besonderen Situation ergeben, jederzeit dieser auf Art. 6
                Abs. 1 lit. f DSGVO beruhenden Verarbeitungen Sie betreffender
                personenbezogener Daten zu widersprechen.
              </p>
              <p style={pStyle}>
                Ihre E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer
                Anfrage. Ihre Daten werden anschließend unter Beachtung
                gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der
                weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.
              </p>

              <h2 style={h2Style}>Betroffenenrechte und Speicherdauer</h2>

              <h3 style={h3Style}>Dauer der Speicherung</h3>
              <p style={pStyle}>
                Die Daten werden unter Berücksichtigung gesetzlicher
                Aufbewahrungsfristen gespeichert und dann nach Fristablauf
                gelöscht, sofern Sie der weitergehenden Verarbeitung und
                Nutzung nicht zugestimmt haben.
              </p>

              <h3 style={h3Style}>Rechte der betroffenen Person</h3>
              <p style={pStyle}>
                Ihnen stehen bei Vorliegen der gesetzlichen Voraussetzungen
                folgende Rechte nach Art. 15 bis 20 DSGVO zu: Recht auf
                Auskunft, auf Berichtigung, auf Löschung, auf Einschränkung
                der Verarbeitung, auf Datenübertragbarkeit.
              </p>
              <p style={pStyle}>
                Außerdem steht Ihnen nach Art. 21 Abs. 1 DSGVO ein
                Widerspruchsrecht gegen die Verarbeitungen zu, die auf Art. 6
                Abs. 1 f DSGVO beruhen, sowie gegen die Verarbeitung zum Zwecke
                von Direktwerbung.
              </p>

              <h3 style={h3Style}>Beschwerderecht bei der Aufsichtsbehörde</h3>
              <p style={pStyle}>
                Sie haben gemäß Art. 77 DSGVO das Recht, sich bei der
                Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass
                die Verarbeitung Ihrer personenbezogenen Daten nicht rechtmäßig
                erfolgt.
              </p>
              <p style={pStyle}>
                Eine Beschwerde können Sie unter anderem bei der für uns
                zuständigen Aufsichtsbehörde einlegen, die Sie unter folgenden
                Kontaktdaten erreichen:
              </p>
              <p style={pStyle}>
                Hamburgischer Beauftragter für Datenschutz und
                Informationsfreiheit
                <br />
                Ludwig-Erhard-Str 22, 7. OG
                <br />
                20459 Hamburg
                <br />
                Tel.: +49 40 428544040
                <br />
                E-Mail:{" "}
                <a
                  href="mailto:mailbox@datenschutz.hamburg.de"
                  style={{ color: "var(--accent)" }}
                >
                  mailbox@datenschutz.hamburg.de
                </a>
              </p>

              <h3 style={h3Style}>Widerspruchsrecht</h3>
              <p style={pStyle}>
                Beruhen die hier aufgeführten personenbezogenen
                Datenverarbeitungen auf Grundlage unseres berechtigten
                Interesses nach Art. 6 Abs. 1 lit. f DSGVO, haben Sie das Recht
                aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
                jederzeit diesen Verarbeitungen mit Wirkung für die Zukunft zu
                widersprechen. Nach erfolgtem Widerspruch wird die Verarbeitung
                der betroffenen Daten beendet, es sei denn, wir können
                zwingende schutzwürdige Gründe für die Verarbeitung nachweisen,
                die Ihren Interessen, Rechten und Freiheiten überwiegen, oder
                wenn die Verarbeitung der Geltendmachung, Ausübung oder
                Verteidigung von Rechtsansprüchen dient.
              </p>

              <p
                style={{
                  ...pStyle,
                  marginTop: 48,
                  color: "var(--muted)",
                  fontSize: 14,
                }}
              >
                letzte Aktualisierung: 22.10.2024
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
