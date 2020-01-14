import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import Layout from "../components/layout/layout-s"
import SEO from "../components/seo"

import Cta from "../components/cta"

const Container = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  @media (max-width: 900px) {
    padding: 0 3em;
  }
`
const ContainerText = styled.div`
  max-width: 1050px;
  margin: 0 auto;
`

const FiftyContainer = styled.div`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
const FiftyContainerReverse = styled.div`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`
const Fifty = styled.div`
  width: 50%;
  @media (max-width: 900px) {
    width: 100%;
  }
`
const FiftyTop = styled.div`
  width: 50%;
  @media (max-width: 900px) {
    display: none;
  }
`

const FiftyFlexCenterText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(234, 234, 234);
  padding: 0 2.5em;
  @media (max-width: 900px) {
    width: 100%;
    padding: 2em 2.5em;
  }
`

const FiftyFlexCenterTextTop = styled.div`
  width: 60%;
  margin-left: -10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(242, 242, 242);
  padding: 0 2.5em 0 calc(10% + 2.5em);
  @media (max-width: 900px) {
    width: 100%;
    padding: 2em 2.5em;
    margin-left: 0%;
  }
`

const TopHeading = styled.h1`
  font-family: "Futura-Bold";
  font-weight: bold;
`
const Heading = styled.h2`
  font-family: "Futura-Bold";
  font-weight: bold;
`
const Paragraph = styled.p``

const Spacer = styled.div`
  padding: 3em;
`

const Services = ({ data }) => (
  <Layout data={data.landingSmall} text="Services">
    <SEO
      title="Holzbau & Schreinerei | Services"
      description="Unsere Dienstleistungen umfassen Entwurf, Holzbau, Schreinerei, Möbelmontage und die Gesamtkoordination des Bauvorhabens. Jetzt kontaktieren!"
    />
    <Container>
      <Spacer />
      <FiftyContainer>
        <FiftyTop style={{ padding: "2em 0" }}>
          <Img
            fluid={data.servicestop.childImageSharp.fluid}
            alt="wohlgensinger holzbau services planung"
          />
        </FiftyTop>
        <FiftyFlexCenterTextTop>
          <TopHeading>Unser Service</TopHeading>
          <Paragraph>
            Unsere Planer und Projekt- und Bauleiter verstehen sämtliche Gewerke
            am Bau. Unsere Dienstleistungen für Sie umfassen deshalb neben
            Entwurf, Holzbau, Schreinerei und Möbelmontage auch die
            Gesamtkoordination Ihres Bauvorhabens. Wir stellen für Sie Kosten,
            Qualität und Termine sicher, damit Ihr Hausbau Ihnen jederzeit
            Freude bereitet.
          </Paragraph>
        </FiftyFlexCenterTextTop>
      </FiftyContainer>
      <ContainerText>
        <Spacer />
        <FiftyContainer>
          <FiftyFlexCenterText>
            <Heading>Konzept / Baueingabe</Heading>
            <Paragraph>
              Gemeinsam mit Ihnen erarbeiten wir die Pläne für Ihr Bauvorhaben,
              egal, ob Sie ein neues Haus bauen wollen oder einen Umbau
              beziehungsweise Anbau planen. Mit dem fundierten Wissen unserer
              Planer und Projektleiter erhalten Sie in kurzer Zeit Pläne und
              einen Kostenvoranschlag als Basis für die nächsten Schritte.
            </Paragraph>
            <Paragraph>
              Sobald wir von Ihnen grünes Licht für die Weiterbearbeitung
              erhalten, erstellen wir für Sie die Baueingabe inkl. aller nötigen
              Formulare, Nachweise und dem Visieren.
            </Paragraph>
          </FiftyFlexCenterText>
          <Fifty>
            <Img
              fluid={data.services1.childImageSharp.fluid}
              alt="wohlgensinger holzbau services planung"
            />
          </Fifty>
        </FiftyContainer>
        <Spacer />
        <FiftyContainerReverse>
          <Fifty>
            <Img
              fluid={data.services2.childImageSharp.fluid}
              alt="wohlgensinger holzbau services planung"
            />
          </Fifty>
          <FiftyFlexCenterText>
            <Heading>Projekt- / Bauleitung</Heading>
            <Paragraph>
              Auf Basis der Baueingabepläne stellen wir für Sie sämtliche
              Offerte für alle Handwerker zusammen. Bei der Auswahl der
              verschiedenen Unternehmen könne Sie selbstverständlich
              mitbestimmen. Wir koordinieren sämtliche Handwerker, damit alle
              zeitgerecht und richtig liefern. Ausserdem kümmern wir uns für Sie
              um die Kostenkontrolle, damit Ihr Bauvorhaben im geplanten Rahmen
              bleibt.
            </Paragraph>
          </FiftyFlexCenterText>
        </FiftyContainerReverse>
        <Spacer />
        <FiftyContainer>
          <FiftyFlexCenterText>
            <Heading>Ausführungsplanung</Heading>
            <Paragraph>
              Wir zeichnen auf unserem CAD-Programm in 2D und in 3D die
              Ausführungspläne für alle Gewerke/Handwerker, unter anderem für
              den Baumeister, Elektriker sowie für Sanitär und Heizung. Dadurch
              können alle mit demselben Plan arbeiten. Dies führt zu einem
              einfachen und optimierten Bauablauf. Denn unsere Schreinerei
              bietet eben weit mehr als Holzbau und einfache Möbelmontage.
            </Paragraph>
          </FiftyFlexCenterText>
          <Fifty>
            <Img
              fluid={data.services3.childImageSharp.fluid}
              alt="wohlgensinger holzbau services planung"
            />
          </Fifty>
        </FiftyContainer>
      </ContainerText>
    </Container>
    <Cta />
  </Layout>
)

export default Services

export const query = graphql`
  query {
    landingSmall: file(relativePath: { eq: "services.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    servicestop: file(relativePath: { eq: "services-top.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    services1: file(relativePath: { eq: "services1.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    services2: file(relativePath: { eq: "services2.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    services3: file(relativePath: { eq: "services3.jpg" }) {
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
