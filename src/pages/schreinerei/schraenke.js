import React from "react"
import { graphql } from "gatsby"
import Template from "../../components/sub-template-2"

const schraenke = ({ data }) => {
  return (
    <div>
      <Template
        header={data.landing}
        select={data.select}
        headerText="Schränke"
        paragraph="Sie sind auf der Suche nach einem neuen Einbauschrank oder einer Garderobe, die perfekt in die vorhandene Bausubstanz passt? Wir kommen vorbei und beraten Sie gerne in Sachen Schreinerarbeiten und Möbelmontage."
        subParagraph=""
        data={data}
      />
    </div>
  )
}

export const query = graphql`
  query {
    landing: file(relativePath: { eq: "schraenke.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    select: file(relativePath: { eq: "schraenke-1.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide2: file(relativePath: { eq: "slider-schreinerei/s2.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide3: file(relativePath: { eq: "slider-schreinerei/s3.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide4: file(relativePath: { eq: "slider-schreinerei/s4.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide5: file(relativePath: { eq: "slider-schreinerei/s5.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide6: file(relativePath: { eq: "slider-schreinerei/s6.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide7: file(relativePath: { eq: "slider-schreinerei/s7.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide8: file(relativePath: { eq: "slider-schreinerei/s8.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide9: file(relativePath: { eq: "slider-schreinerei/s9.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide1: file(relativePath: { eq: "slider-schreinerei/s10.jpg" }) {
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

export default schraenke
