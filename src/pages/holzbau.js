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

const Holzbau = ({ data }) => (
  <Layout data={data.landing} text='Holzbau' color='#5D3D30'>
    <SEO
      title='Holzbau | Innovativer Holzbau'
      description='Aufstockungen, Umbauten, Neubau, Anbau, Ersatzneubau – Wohlgensinger ist Ihr Partner in Sachen Holzbau mit Fokus auf Regionalität und Qualität.'
    />
    <Container>
      <Background>
        <Left>
          <Img
            fluid={data.one.childImageSharp.fluid}
            alt='wohlgensinger dachkonstruktion'
          />
        </Left>
        <Right>
          <p>
            Im Holzbau setzen wir auf{" "}
            <b>Qualität, Innovation und Regionalität. </b>
            Durch die Verwendung von regionalem Schweizer Holz sind die
            Transportwege kurz und die Nachhaltigkeit ist gross.
          </p>
          <p>
            Dach- und Deckenelemente stellen wir im CE-zertifizierten
            Pressklebverfahren her. Diese Produktionsweise führt zu Elementen,
            die den höchsten Anforderungen entsprechen – egal, ob Sie ein neues
            Holzhaus bauen wollen oder ob es sich um einen Umbau bzw. Hausanbau
            handelt. Vom Zimmermann, Möbelschreiner bis zum Holzbauingenieur
            garantieren unsere hervorragend ausgebildeten und topmotivierten
            Mitarbeiter dabei stets für ausgezeichnete Qualität. In einem von
            uns gebauten Holzhaus werden Sie sich von Anfang an wohlfühlen.
          </p>
        </Right>
      </Background>
      <Grid>
        <Link to='/holzbau/aufstockung'>
          <Card data={data.card1} title='Aufstockung' />
        </Link>
        <Link to='/holzbau/neubau'>
          <Card data={data.card3} title='Neubau/Ersatzneubau' />
        </Link>
        <Link to='/holzbau/umbau'>
          <Card data={data.card2} title='Umbau' />
        </Link>
        <Link to='/holzbau/service'>
          <Card data={data.card4} title='Service' />
        </Link>
        <Link to='/holzbau/anbau'>
          <Card data={data.card5} title='Anbau' />
        </Link>
      </Grid>
    </Container>
  </Layout>
)

export default Holzbau

export const query = graphql`
  query {
    landing: file(relativePath: { eq: "holzbau.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    one: file(relativePath: { eq: "holzbau-1.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    card1: file(relativePath: { eq: "card-aufstockung.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    card2: file(relativePath: { eq: "card-umbau.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    card3: file(relativePath: { eq: "card-neubau.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    card4: file(relativePath: { eq: "card-service.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    card5: file(relativePath: { eq: "card-anbau.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
