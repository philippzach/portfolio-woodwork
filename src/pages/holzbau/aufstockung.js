import React from "react"
import { graphql } from "gatsby"
import Template from "../../components/sub-template-1"

const Aufstockung = ({ data }) => {
  return (
    <div>
      <Template
        header={data.landing}
        select={data.select}
        headerText="Aufstockung"
        paragraph="Möchten Sie Ihr Grundstück mit z.B. einer zweiten Wohnung oder zusätzlichem Wohnraum besser nutzen und gleichzeitig die vorhandene Substanz bewahren? Dann ist Holzbau die erste Wahl und wir sind der richtige Partner. Unsere Planer sind versiert darin, modernsten Ansprüchen entsprechende und statisch elegante Lösungen zu erarbeiten."
        subParagraph=""
      />
    </div>
  )
}

export const query = graphql`
  query {
    landing: file(relativePath: { eq: "aufstockung.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    select: file(relativePath: { eq: "aufstockung-select.jpg" }) {
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

export default Aufstockung
