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
  }
`

export default schraenke
