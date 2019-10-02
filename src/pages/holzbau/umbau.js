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
  }
`

export default Umbau
