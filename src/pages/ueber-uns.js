import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import Layout from "../layout/layout-s"
import SEO from "../components/seo"

const Container = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  @media (max-width: 900px) {
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
    </Container>
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
  }
`
