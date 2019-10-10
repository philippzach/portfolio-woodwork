import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import TeamMember from "../components/team-member"

import Layout from "../components/layout/layout-s"
import SEO from "../components/seo"

const Container = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  @media (max-width: 900px) {
    padding: 0 3em;
  }
`
const ContainerTeam = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  @media (max-width: 1100px) {
    padding: 0 3em;
  }
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
  padding: 2em 0;
  @media (max-width: 900px) {
    width: 100%;
    padding: 0;
  }
`
const FiftyFlexCenterTextTop = styled.div`
  width: 60%;
  margin-left: -10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #faf4ef;
  padding: 0 2.5em 0 calc(10% + 2.5em);
  @media (max-width: 900px) {
    width: 100%;
    padding: 2em 2.5em;
    margin-left: 0%;
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
const SpanHeader = styled.h3`
  padding-top: 1em;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 0.9em;
`
const Spacer = styled.div`
  padding: 3em;
`
const TopHeading = styled.h1`
  font-family: futura;
  font-weight: bold;
  line-height: 1.25;
`
const Heading = styled.h2`
  font-family: futura;
  font-weight: bold;
`
const Paragraph = styled.p``

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3em;
  @media (min-width: 601px) and (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const About = ({ data }) => (
  <Layout data={data.landingSmall} text="Über Uns">
    <SEO title="Über Uns" />
    <Container>
      <Spacer />
      <FiftyContainerReverse>
        <FiftyTop>
          <Img
            fluid={data.top.childImageSharp.fluid}
            alt="wohlgensinger holzbau services planung"
          />
        </FiftyTop>
        <FiftyFlexCenterTextTop>
          <svg
            width="22px"
            height="22px"
            viewBox="0 0 22 22"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Uber-Uns"
                transform="translate(-790.000000, -593.000000)"
                fill="#404040"
              >
                <path
                  d="M799.598191,614.419579 L790.580421,605.401809 C789.806526,604.627914 789.806526,603.372086 790.580421,602.598191 L799.598191,593.580421 C800.372086,592.806526 801.627914,592.806526 802.401809,593.580421 L811.419579,602.598191 C812.193474,603.372086 812.193474,604.627914 811.419579,605.401809 L802.401809,614.419579 C801.627914,615.193474 800.372086,615.193474 799.598191,614.419579"
                  id="23"
                ></path>
              </g>
            </g>
          </svg>
          <SpanHeader>Die Firma</SpanHeader>
          <TopHeading>Wohlgensinger AG Holzbau seid 1941</TopHeading>
          <p>
            Wir beraten, planen und bauen für Sie so, als ob wir unser eigenes
            Haus bauen würden: kompetent, innovativ und ästhetisch.
          </p>
          <p>
            Neben einem grossen Mass an Kunden- und Lösungsorientierung sind uns
            Bodenständigkeit und Nachhaltigkeit besonders wichtig. Denn nur mit
            regionalem und nachhaltigem Holzbau kann unsere Passion für Holz
            auch in Zukunft weiter bestehen.
          </p>
        </FiftyFlexCenterTextTop>
      </FiftyContainerReverse>

      <Spacer />
      <FiftyContainerReverse>
        <Fifty>
          <Img
            fluid={data.about1.childImageSharp.fluid}
            alt="Ueber uns Wohngensinger Ag"
          />
        </Fifty>
        <FiftyFlexCenterText>
          <Heading>
            Kunden -
            <br />
            Orientierung
          </Heading>
          <Paragraph>
            Wir denken im sinne des Kunden mit und holen seine bedürfnisse ab.
            Dadurch werden die Wünsche und Ziele des Kunden erfüllt.
          </Paragraph>
        </FiftyFlexCenterText>
      </FiftyContainerReverse>
      <Spacer />
      <FiftyContainer>
        <FiftyFlexCenterText>
          <Heading>
            Team -
            <br />
            Fähigkeit
          </Heading>
          <Paragraph>
            Wir lösen die Aufgaben gemeinsam und helfen einander die
            Herausforderung zu meistern. Dabei schenken wir gegenseitig das
            Vertrauen, denn gemeinsam schafft man mehr.
          </Paragraph>
        </FiftyFlexCenterText>
        <Fifty>
          <Img
            fluid={data.about2.childImageSharp.fluid}
            alt="wohlgensinger holzbau services planung"
          />
        </Fifty>
      </FiftyContainer>
      <Spacer />
      <FiftyContainerReverse>
        <Fifty>
          <Img
            fluid={data.about3.childImageSharp.fluid}
            alt="Ueber uns Wohngensinger Ag"
          />
        </Fifty>
        <FiftyFlexCenterText>
          <Heading>Lern - Wille</Heading>
          <Paragraph>
            Wir Lernen aus fehlern und verbessern uns aus diesen. Wir finden
            Innovation und Optimierungen die dem kunden und dem Betrieb
            weiterhefen.
          </Paragraph>
        </FiftyFlexCenterText>
      </FiftyContainerReverse>
      <Spacer />
      <FiftyContainer>
        <FiftyFlexCenterText>
          <Heading>
            Lösungs - <br />
            Orientierung
          </Heading>
          <Paragraph>
            Wenn wir auf Probleme oder Schwierigkeiten stossen, soll nicht das
            Problem hervorgehoben werden, sondern die Lösungsfindung in den
            Vordergrund gestellt werden.
          </Paragraph>
        </FiftyFlexCenterText>
        <Fifty>
          <Img
            fluid={data.about4.childImageSharp.fluid}
            alt="wohlgensinger holzbau services planung"
          />
        </Fifty>
      </FiftyContainer>
      <Spacer />
      <FiftyContainerReverse>
        <Fifty>
          <Img
            fluid={data.about5.childImageSharp.fluid}
            alt="Ueber uns Wohngensinger Ag"
          />
        </Fifty>
        <FiftyFlexCenterText>
          <Heading>Passion für Holz</Heading>
          <Paragraph>
            Harz fließt durch unsere Adern. Wir lieben das Holzhandwerk und
            leben die Zimmermanns-Tradition.
          </Paragraph>
        </FiftyFlexCenterText>
      </FiftyContainerReverse>
      <Spacer />
      <FiftyContainer>
        <FiftyFlexCenterText>
          <Heading>
            Boden - <br />
            Ständigkeit
          </Heading>
          <Paragraph>
            Wir Holzfachleute zeichnen uns durch unseren Fleiß, unsere
            Ehrlichkeit und den guten Umgang aus.
          </Paragraph>
        </FiftyFlexCenterText>
        <Fifty>
          <Img
            fluid={data.about6.childImageSharp.fluid}
            alt="wohlgensinger holzbau services planung"
          />
        </Fifty>
      </FiftyContainer>
      <Spacer />
    </Container>
    <ContainerTeam>
      <svg
        width="27px"
        height="27px"
        viewBox="0 0 27 27"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Uber-Uns"
            transform="translate(-231.000000, -5383.000000)"
            fill="#404040"
          >
            <path
              d="M244.5,5406.625 C238.908469,5406.625 234.375,5402.09238 234.375,5396.5 C234.375,5390.90762 238.908469,5386.375 244.5,5386.375 C250.091531,5386.375 254.625,5390.90762 254.625,5396.5 C254.625,5402.09238 250.091531,5406.625 244.5,5406.625 M244.5,5383 C237.044625,5383 231,5389.04378 231,5396.5 C231,5403.95537 237.044625,5410 244.5,5410 C251.955375,5410 258,5403.95537 258,5396.5 C258,5389.04378 251.955375,5383 244.5,5383"
              id="3"
            ></path>
          </g>
        </g>
      </svg>

      <SpanHeader>Unser</SpanHeader>
      <TopHeading>Team</TopHeading>
      <p style={{ maxWidth: "35em" }}>
        Unser Team aus erfahrenen und top motivierten Mitarbeitern freut sich
        auf Sie. Vom Zimmermann, Möbelschreiner, Schreiner, Bauplaner, Bauleiter
        und vielen anderen ist alles dabei.
      </p>
      <Grid>
        <TeamMember
          photo={data.team1}
          name="Simon Rutz"
          jobTitle="Geschäftsführer | Inhaber"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team2}
          name="Carmen Rutz"
          jobTitle="Marketing | Personal"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team3}
          name="Werner Rütsche"
          jobTitle="Zimmermann | Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team4}
          name="Jakob Frey"
          jobTitle="Zimmermann | Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team5}
          name="Luc Baumann"
          jobTitle="Zimmermann in Ausbildung 3. Lehrjahr"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team6}
          name="Marco Bürge"
          jobTitle="Zimmermann in Ausbildung 3. Lehrjahr"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team7}
          name="Albert Stillhart"
          jobTitle="Holzbau Facharbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team8}
          name="Reto Breitenmoser"
          jobTitle="Zimmermann"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team9}
          name="Jeremy Sennhauser"
          jobTitle="Zimmermann"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team10}
          name="Fabio Schefer"
          jobTitle="Zimmermann in Ausbildung 4. Lehrjahr"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team11}
          name="Norbert Schönenberger"
          jobTitle="Zimmermann / Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team12}
          name="Adrian Oberholzer"
          jobTitle="Zimmermann in Ausbildung 3. Lehrjahr"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team13}
          name="Gianandré Bachmann"
          jobTitle="Zimmermann"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team14}
          name="Erwin Bachmann"
          jobTitle="Polier"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team15}
          name="Sandro Loser"
          jobTitle="Zimmermann in Ausbildung 1. Lehrjahr"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team16}
          name="Fridolin Schönenberger"
          jobTitle="Zimmermann / Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team17}
          name="Andreas Schori"
          jobTitle="Verkaufs- / Projektleiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team18}
          name="Thomas Gmür"
          jobTitle="Schreiner / Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team19}
          name="Patrick Rüthemann"
          jobTitle="Zimmermann / Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team20}
          name="Patrice Jäger"
          jobTitle="Schreiner / Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team21}
          name="Guido Hollenstein"
          jobTitle="Holzbau / Facharbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team22}
          name="Ernst Aemisegger"
          jobTitle="Zimmermann / Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team23}
          name=" Peter Schnetzer"
          jobTitle="Polier"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team24}
          name="Florian Senn"
          jobTitle="Zimmermann / Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team25}
          name="Yvonne Schmitz"
          jobTitle="Administration / Buchhaltung"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team26}
          name="Nil Meile"
          jobTitle="Zimmermann in Ausbildung 2. Lehrjahr"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team27}
          name="Ralph Löhrer"
          jobTitle="Zimmermann"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team28}
          name="Reto Loser"
          jobTitle="Zimmermann in Ausbildung 2. Lehrjahr"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team29}
          name="Lorin Rüegg"
          jobTitle="Zimmermann in Ausbildung 1. Lehrjahr"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team30}
          name="Rösli Schönenberger"
          jobTitle="Reinigungsdienst"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team31}
          name="Fabian Rutz"
          jobTitle="Holzbauingenieur"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team32}
          name="Julian Meier"
          jobTitle="Zimmermann in Ausbildung 4. Lehrjahr"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team33}
          name="Damian Schönenberger"
          jobTitle="Holzbau / Facharbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team34}
          name="Markus Rüegg"
          jobTitle="Schreiner / Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team35}
          name="Beat Strassmann"
          jobTitle="Zimmermann / Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team36}
          name="Martin Widmer"
          jobTitle="Zimmermann / Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team37}
          name="Damian Büsser"
          jobTitle="Holzbau Techniker"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team38}
          name="Niklaus Bürge"
          jobTitle="Holzbau / Fachmitarbeiter"
          education=""
          phone=""
          email=""
        />
      </Grid>
      <Spacer />
    </ContainerTeam>
  </Layout>
)

export default About

export const query = graphql`
  query {
    landingSmall: file(relativePath: { eq: "ueber-uns.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    top: file(relativePath: { eq: "ueberuns-top.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    about1: file(relativePath: { eq: "about-1.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    about2: file(relativePath: { eq: "about-2.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    about3: file(relativePath: { eq: "about-3.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    about4: file(relativePath: { eq: "about-4.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    about5: file(relativePath: { eq: "about-5.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    about6: file(relativePath: { eq: "about-6.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team1: file(relativePath: { eq: "team/team1.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team2: file(relativePath: { eq: "team/team2.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team3: file(relativePath: { eq: "team/team3.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team4: file(relativePath: { eq: "team/team4.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team5: file(relativePath: { eq: "team/team5.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team6: file(relativePath: { eq: "team/team6.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team7: file(relativePath: { eq: "team/team7.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team8: file(relativePath: { eq: "team/team8.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team9: file(relativePath: { eq: "team/team9.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team10: file(relativePath: { eq: "team/team10.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team11: file(relativePath: { eq: "team/team11.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team12: file(relativePath: { eq: "team/team12.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team13: file(relativePath: { eq: "team/team13.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team14: file(relativePath: { eq: "team/team14.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team15: file(relativePath: { eq: "team/team15.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team16: file(relativePath: { eq: "team/team16.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team17: file(relativePath: { eq: "team/team17.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team18: file(relativePath: { eq: "team/team18.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team19: file(relativePath: { eq: "team/team19.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team20: file(relativePath: { eq: "team/team20.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team21: file(relativePath: { eq: "team/team21.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team22: file(relativePath: { eq: "team/team22.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team23: file(relativePath: { eq: "team/team23.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team24: file(relativePath: { eq: "team/team24.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team25: file(relativePath: { eq: "team/team25.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team26: file(relativePath: { eq: "team/team26.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team27: file(relativePath: { eq: "team/team27.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team28: file(relativePath: { eq: "team/team28.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team29: file(relativePath: { eq: "team/team29.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team30: file(relativePath: { eq: "team/team30.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team31: file(relativePath: { eq: "team/team31.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team32: file(relativePath: { eq: "team/team32.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team33: file(relativePath: { eq: "team/team33.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team34: file(relativePath: { eq: "team/team34.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team35: file(relativePath: { eq: "team/team35.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team36: file(relativePath: { eq: "team/team36.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team37: file(relativePath: { eq: "team/team37.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    team38: file(relativePath: { eq: "team/team38.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
