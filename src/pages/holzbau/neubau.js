import React from "react"
import { graphql } from "gatsby"
import Template from "../../components/sub-template-1"

const Neubau = ({ data }) => {
  return (
    <div>
      <Template
        header={data.landing}
        select={data.select}
        headerText="Neubau/Ersatzneubau"
        paragraph="Sind Sie bereit, Ihr eigenes Haus zu bauen? Dann ist ein Neubau die richtige Wahl. Gerne beraten wir Sie über die Möglichkeiten von Holzbau und Holzelementbau und realisieren für Sie Ihr Ein- oder Mehrfamilienhaus nach Ihren Vorstellungen."
        subParagraph="Sie besitzen bereits ein Gebäude, allerdings mit schlechter Substanz? Vielleicht ist dann ein Ersatzneubau die richtige Wahl. Unsere Holzbauten weisen beste Werte in den Bereichen Ökologie (sehr gute Gebäudehülle und natürliche Baumaterialien) sowie Funktionalität (optimierte Grundrisse, atmungsaktives Dach und Aussenwände) auf."
        data={data}
        seoTitle="Holzbau | Neubau und Ersatzneubau"
        seoDescription="Wir beraten Sie gerne über die Möglichkeiten von Neubau, Holzelementbau und Ersatzneubau für Einfamilien- und Mehrfamilienhäusern."
      />
    </div>
  )
}

export const query = graphql`
  query {
    landing: file(relativePath: { eq: "neubau.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    select: file(relativePath: { eq: "neubau-1.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide2: file(relativePath: { eq: "slider-holzbau/hb2.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide3: file(relativePath: { eq: "slider-holzbau/hb3.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide4: file(relativePath: { eq: "slider-holzbau/hb4.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide5: file(relativePath: { eq: "slider-holzbau/hb5.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide6: file(relativePath: { eq: "slider-holzbau/hb6.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide7: file(relativePath: { eq: "slider-holzbau/hb7.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide8: file(relativePath: { eq: "slider-holzbau/hb8.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide9: file(relativePath: { eq: "slider-holzbau/hb9.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide1: file(relativePath: { eq: "slider-holzbau/hb10.jpg" }) {
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

export default Neubau
