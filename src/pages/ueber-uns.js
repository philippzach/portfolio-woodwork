import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import TeamMember from "../components/team-member"

import Layout from "../components/layout/layout-s-ueberuns"
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
  font-family: "Futura-Bold";
  font-weight: bold;
  line-height: 1.25;
`
const Heading = styled.h2`
  font-family: "Futura-Bold";
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
  <Layout data={data.landingSmall} text="">
    <SEO
      title="Holzbau & Schreinerei | ??ber uns"
      description="Wir beraten, planen und bauen f??r Sie so, als ob wir unser eigenes Haus bauen w??rden: kompetent, innovativ und ??sthetisch."
    />
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
          {/*  <svg
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
          </svg> */}
          <SpanHeader>Die Firma</SpanHeader>
          <TopHeading>Wohlgensinger AG Holzbau seit 1941</TopHeading>
          <p>
            Wir beraten, planen und bauen f??r Sie so, als ob wir unser eigenes
            Haus bauen w??rden: kompetent, innovativ und ??sthetisch.
          </p>
          <p>
            Neben einem grossen Mass an Kunden- und L??sungsorientierung sind uns
            Bodenst??ndigkeit und Nachhaltigkeit besonders wichtig. Denn nur mit
            regionalem und nachhaltigem Holzbau kann unsere Passion f??r Holz
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
            Wir denken im Sinne des Kunden mit und holen seine Bed??rfnisse ab.
            Dadurch werden die W??nsche und Ziele des Kunden erf??llt.
          </Paragraph>
        </FiftyFlexCenterText>
      </FiftyContainerReverse>
      <Spacer />
      <FiftyContainer>
        <FiftyFlexCenterText>
          <Heading>
            Team -
            <br />
            F??higkeit
          </Heading>
          <Paragraph>
            Wir l??sen die Aufgaben gemeinsam und helfen einander die
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
            Wir lernen aus Fehlern und verbessern uns aus diesen. Wir finden
            Innovation und Optimierungen die dem Kunden und dem Betrieb
            weiterhefen.
          </Paragraph>
        </FiftyFlexCenterText>
      </FiftyContainerReverse>
      <Spacer />
      <FiftyContainer>
        <FiftyFlexCenterText>
          <Heading>
            L??sungs - <br />
            Orientierung
          </Heading>
          <Paragraph>
            Wenn wir auf Probleme oder Schwierigkeiten stossen, soll nicht das
            Problem hervorgehoben werden, sondern die L??sungsfindung in den
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
          <Heading>Passion f??r Holz</Heading>
          <Paragraph>
            Harz flie??t durch unsere Adern. Wir lieben das Holzhandwerk und
            leben die Zimmermanns-Tradition.
          </Paragraph>
        </FiftyFlexCenterText>
      </FiftyContainerReverse>
      <Spacer />
      <FiftyContainer>
        <FiftyFlexCenterText>
          <Heading>
            Boden - <br />
            St??ndigkeit
          </Heading>
          <Paragraph>
            Wir Holzfachleute zeichnen uns durch unseren Flei??, unsere
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
        Unser Team aus Erfahrenen und top motivierten Mitarbeitern freut sich
        auf Sie. Vom Zimmermann, M??belschreiner, Schreiner, Bauplaner, Bauleiter
        und vielen anderen ist alles dabei.
      </p>
      <Grid>
        <TeamMember
          photo={data.team1}
          name="Simon Rutz"
          jobTitle="Gesch??ftsf??hrer | Inhaber"
          education="Dipl. Holzingenieur FH"
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
          name="Werner Ru??tsche"
          jobTitle="Holzbau-Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team4}
          name="Jakob Frey"
          jobTitle="Holzbau-Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team5}
          name="Luc Baumann"
          jobTitle="Zimmermann EFZ i. A. 4. Lj."
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team6}
          name="Marco Bu??rge"
          jobTitle="Zimmermann EFZ i. A. 4. Lj."
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team7}
          name="Alfred Stillhart"
          jobTitle="Holzbau-Arbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team8}
          name="Reto Breitenmoser"
          jobTitle="Zimmermann EFZ"
          education=""
          phone=""
          email=""
        />
        {/*  <TeamMember
          photo={data.team9}
          name="Jeremy Sennhauser"
          jobTitle="Zimmermann EFZ"
          education=""
          phone=""
          email=""
        /> */}
        <TeamMember
          photo={data.team10}
          name="Fabio Schefer"
          jobTitle="Zimmermann EFZ"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team11}
          name="Norbert Scho??nenberger"
          jobTitle="Holzbau-Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team12}
          name="Adrian Oberholzer"
          jobTitle="Zimmermann EFZ i. A. 4. Lj."
          education=""
          phone=""
          email=""
        />

        <TeamMember
          photo={data.team14}
          name="Erwin Bachmann"
          jobTitle="Planung & Projektleitung"
          education="Holzbau - Polier"
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team15}
          name="Sandro Loser"
          jobTitle="Zimmermann EFZ i. A. 2 Lj."
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team16}
          name="Fridolin Scho??nenberger"
          jobTitle="Holzbau-Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        {/*   <TeamMember
          photo={data.team17}
          name='Andreas Schori'
          jobTitle='Verkaufs- / Projektleiter'
          education='Bauleiter'
          phone=''
          email=''
        /> */}
        <TeamMember
          photo={data.team18}
          name="Thomas Gmu??r"
          jobTitle="Schreiner-Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team19}
          name="Patrick Ru??themann"
          jobTitle="Holzbau-Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        {/*    <TeamMember
          photo={data.team20}
          name='Patrice Ja??ger'
          jobTitle='Schreiner / Oberfla??chenspezialist'
          education=''
          phone=''
          email=''
        /> */}
        <TeamMember
          photo={data.team21}
          name="Guido Hollenstein"
          jobTitle="Holzbau-Arbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team22}
          name="Ernst Aemisegger"
          jobTitle="Holzbau-Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team23}
          name=" Peter Schnetzer"
          jobTitle="Planung & Projektleitung"
          education="Holzbau - Polier"
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team24}
          name="Florian Senn"
          jobTitle="Planung & Projektleitung"
          education="Holzbau - Vorarbeiter"
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
          jobTitle="Zimmermann EFZ i.A.3.Lj."
          education=""
          phone=""
          email=""
        />

        <TeamMember
          photo={data.team28}
          name="Reto Loser"
          jobTitle="Zimmermann EFZ i.A.3.Lj."
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team29}
          name="Lorin Ru??egg"
          jobTitle="Zimmermann EFZ i.A.2.Lj."
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team30}
          name="Ro??sli Scho??nenberger"
          jobTitle="Facilitymanagement"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team31}
          name="Fabian Rutz"
          jobTitle="Planung & Projektleitung"
          education="Holzbauingenieur BSc FH"
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team32}
          name="Julian Meier"
          jobTitle="Zimmermann EFZ"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team33}
          name="Damian Scho??nenberger"
          jobTitle="Holzbearbeiter EBA"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team34}
          name="Markus Ru??egg"
          jobTitle="Schreiner-Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team35}
          name="Beat Strassmann"
          jobTitle="Holzbau-Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.team36}
          name="Martin Widmer"
          jobTitle="Holzbau-Vorarbeiter"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.leonie}
          name="Leonie N??f"
          jobTitle="Schreinerin EFZ i.A. 1.Lj."
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.tobias}
          name="Tobias Heim"
          jobTitle="Zimmermann EFZ i.A. 1.Lj."
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.fabio}
          name="Fabio Mannhart"
          jobTitle="Zimmermann EFZ i.A. 1.Lj."
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.niclas}
          name="Niclas Dupont"
          jobTitle="Schreiner EFZ i.A. 2.Lj."
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.damian}
          name="Damian Hollenstein"
          jobTitle="Zimmermann EFZ"
          education=""
          phone=""
          email=""
        />
        <TeamMember
          photo={data.markus}
          name="Markus Sch??nenberger"
          jobTitle="Magaziner"
          education=""
          phone=""
          email=""
        />

        <TeamMember
          photo={data.marion}
          name="Marion Wohlgensinger"
          jobTitle="Marketing"
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
    landingSmall: file(relativePath: { eq: "team-long.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
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
    leonie: file(relativePath: { eq: "team/Leonie.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    tobias: file(relativePath: { eq: "team/Tobias.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fabio: file(relativePath: { eq: "team/Fabio.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    niclas: file(relativePath: { eq: "team/Niclas.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    damian: file(relativePath: { eq: "team/Damian.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    markus: file(relativePath: { eq: "team/Markus.jpg" }) {
      childImageSharp {
        fluid(
          maxHeight: 540
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    marion: file(relativePath: { eq: "team/Marion.jpg" }) {
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
