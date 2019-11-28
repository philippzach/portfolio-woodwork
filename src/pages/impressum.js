import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout/layout-s"
import SEO from "../components/seo"

const Heading = styled.h1`
  font-family: futura;

  margin: 1.5em 0 1em 0;
`
const Text = styled.div`
  max-width: 580px;
  margin: 0 auto 7em auto;
  text-align: center;
`
const Phone = styled.span`
  font-family: roboto;
  font-weight: bold;
  font-size: 1.25em;
`
const Hours = styled.span`
  color: #888686;
  font-family: roboto;
  display: block;
  font-size: 0.75em;
`
const Buttons = styled.div`
  margin-top: 1.45em;
  margin-bottom: 2em;
  display: flex;
  justify-content: space-around;
`
const Meeting = styled.h2`
  font-family: futura;
  font-weight: bold;
  font-size: 1.2em;
  line-height: 1.5em;
  margin-top: 2em;
  margin-bottom: 1.45em;
  @media (max-width: 600px) {
    padding: 0 1em;
  }
`
const Container = styled.div`
  max-width: 780px;
  padding: 0 1.5em;
  margin: 0 auto;
`

const Kontakt = ({ data }) => (
  <Layout data={data.landingSmall} text="">
    <SEO title="Impressum" />
    <Text>
      <Heading>Impressum</Heading>
    </Text>
    <Container>
      <p>
        <b>Diese Webseite wird betrieben von:</b>
      </p>
      <p>
        Wohlgensinger AG Holzbau | Schreinerei <br />
        Aufeld 10, 9607 Mosnang
        <br />
        Handelsgericht St. Gallen
        <br />
        UID-Nummer: CHE-102.347.550
        <br />
        E-Mail: info@wohlgensinger.ch
        <br />
        Tel.: +41 (0)71 983 15 20
      </p>
      <p>
        <b>Geschäftsführer: </b>Simon Rutz{" "}
      </p>
      <p>
        <b>Unternehmensgegenstand: </b>Führung eines Sägerei- und
        Holzbaubetriebes und Holzhandel. Die Gesellschaft kann im In- und
        Ausland Zweigniederlassungen errichten, sich an anderen Unternehmungen
        des In- und Auslandes beteiligen, solche erwerben oder errichten sowie
        Grundstücke erwerben, verwerten und veräussern.{" "}
      </p>
      <p>
        <b>Rechtsform: </b>Aktiengesellschaft{" "}
      </p>
      <p>
        <b>Haftungsausschluss </b>
        <p>
          Dieser Haftungsausschluss ist als Teil des Internetangebotes zu
          betrachten, von dem aus auf diese Webseite verwiesen wurde. Sofern
          Teile oder einzelne Formulierungen dieses Textes der geltenden
          Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen
          sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und
          ihrer Gültigkeit davon unberührt.
        </p>
      </p>
      <p>
        <b>Haftung für Inhalte dieser Webseite </b>
        <p>
          Die Inhalte unserer Seiten wurden mit grösster Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für
          eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
          verantwortlich. Wir sind jedochnicht verpflichtet, übermittelte oder
          gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>
      </p>
      <p>
        <b>Haftung für Links auf Webseiten Dritter</b>
        <p>
          Unser Angebot enthält Links zu externen Websites. Auf den Inhalt
          dieser externen Webseiten haben wir keinerlei Einfluss. Deshalb können
          wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
          Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
          Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
          Zeitpunkt der Verlinkung auf mögliche Rechtsverstösse überprüft.
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
          erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
          ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
          zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
          derartige Links umgehend entfernen.
        </p>
      </p>
      <p>
        <b>Urheberrecht</b>
        <p>
          Die Betreiber dieser Webseite sind bemüht, stets die Urheberrechte
          anderer zu beachten bzw. auf selbst erstellte sowie lizenzfreie Werke
          zurückzugreifen.Die durch die Seitenbetreiber erstellten Inhalte und
          Werke auf dieser Webseite unterliegen dem Urheberrecht. Beiträge
          Dritter sind als solche gekennzeichnet. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
      </p>
      <p>
        <b>Recht auf Information</b>
        <p>
          Sie haben das Recht, jederzeit Auskunft über die über Sie
          gespeicherten Daten, deren Herkunft und Empfänger sowie den Zweck der
          Speicherung zu erhalten.
        </p>
      </p>
    </Container>
  </Layout>
)

export default Kontakt

export const query = graphql`
  query {
    landingSmall: file(relativePath: { eq: "kontakt.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
