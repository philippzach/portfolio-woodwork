import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import Layout from "../components/layout/layout-m"
import Card from "../components/card"
import SEO from "../components/seo"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const Background = styled.div`
  background-color: #f3e3d9;
  max-width: 90%;
  margin: 4em auto;
  display: flex;
  padding: 0 2em 2em;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const Left = styled.div`
  width: 50%;
  margin-top: -2em;
  @media (max-width: 800px) {
    width: 100%;
  }
`
const Right = styled.div`
  width: 50%;
  padding: 4em 0em 1em 3em;
  line-height: 1.5em;
  @media (max-width: 800px) {
    width: 100%;
    padding: 2em;
  }
`
const Grid = styled.div`
  display: grid;
  max-width: 90%;
  margin: 0 auto;
  margin-bottom: 4em;
  grid-gap: 2em;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const Schreinerei = ({ data }) => (
  <Layout data={data.landing} text="Schreinerei" color="#B7A07C">
    <SEO title="Schreinerei" />
    <Container>
      <Background>
        <Left>
          <Img
            fluid={data.one.childImageSharp.fluid}
            alt="wohlgensinger massivholz"
          />
        </Left>
        <Right>
          <p>
            In unserer Schreinerei setzen wir auf{" "}
            <b>Qualität, Innovation und Regionalität. </b> Wir nutzen Laub- oder
            Nadelbäume aus der näheren Umgebung als Rohstoff für Ihre
            individuelle Treppe, Tür oder ein auf Ihre Vorstellungen
            zugeschnittenes Möbelstück. Eine hochwertige Oberflächenbehandlung –
            sei es naturfarben lackiert, farbig gespritzt oder geölt – veredelt
            unsere Schreinerarbeiten und verleiht ihnen den nötigen Schutz.
          </p>
          <p>
            Unsere hervorragend ausgebildeten und topmotivierten Möbelschreiner
            garantieren, dass nur ausgezeichnete Qualität unsere Schreinerei /
            Zimmerei verlässt.
          </p>
        </Right>
      </Background>
      <Grid>
        <Link to="/schreinerei/treppen">
          <Card data={data.card1} title="Treppen" />
        </Link>
        <Link to="/schreinerei/tueren">
          <Card data={data.card2} title="Türen" />
        </Link>
        <Link to="/schreinerei/schraenke">
          <Card data={data.card3} title="Schränke" />
        </Link>
        <Link to="/schreinerei/reparaturen">
          <Card data={data.card4} title="Reparaturen" />
        </Link>
        <Link to="/schreinerei/moebel-weingestell">
          <Card data={data.card5} title="Möbel/Weingestell" />
        </Link>
      </Grid>
    </Container>
  </Layout>
)

export default Schreinerei

export const query = graphql`
  query {
    landing: file(relativePath: { eq: "schreinerei.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    one: file(relativePath: { eq: "schreinerei-1.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    card1: file(relativePath: { eq: "card-treppen.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    card2: file(relativePath: { eq: "card-tueren.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    card3: file(relativePath: { eq: "card-schraenke.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    card4: file(relativePath: { eq: "card-reperaturen.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    card5: file(relativePath: { eq: "card-moebel.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
