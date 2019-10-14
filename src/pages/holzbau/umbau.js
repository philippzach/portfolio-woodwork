import React from "react"
import { graphql } from "gatsby"
import Template from "../../components/sub-template-1"

const Umbau = ({ data }) => {
  return (
    <div>
      <Template
        header={data.landing}
        select={data.select}
        headerText="Umbau"
        paragraph="Sie möchten Ihr Haus umbauen? Wir planen Ihren Umbau mit viel Herz und Verstand, sei es im modernen Stil oder auch in Kombination mit Altholz. Wir haben ausserdem die passenden Konzepte und Lösungen, wenn die Raumhöhe knapp ist, die Gebäudehülle erneuert werden oder die Balkenlage statisch verbessert werden muss."
        subParagraph=""
        data={data}
        seoTitle="Holzbau | Umbau"
        seoDescription="Aufstocken – Raum für mehr schaffen. Gerne eins obendrauf mit Holz? Wer gern mehr Platzzur Verfügung hätte, aber kein Land, ist bei Holzaufstockungen richtig."
      />
    </div>
  )
}

export const query = graphql`
  query {
    landing: file(relativePath: { eq: "umbau.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    select: file(relativePath: { eq: "umbau-1.jpg" }) {
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

export default Umbau
