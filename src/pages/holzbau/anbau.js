import React from "react"
import { graphql } from "gatsby"
import Template from "../../components/sub-template-1"

const Anbau = ({ data }) => {
  return (
    <div>
      <Template
        header={data.landing}
        select={data.select}
        headerText="Anbau"
        paragraph="Ist die Fläche im Erdgeschoss zu klein geworden oder kann mit einem Anbau am Haus eine zusätzliche Wohneinheit auf dem Grundstück geschaffen werden? Wir sind Ihr Partner für moderne, energiesparende und in kurzer Zeit erstellte Anbauten. Auch hier ist Holzbau ist in jedem Fall die richtige Wahl."
        subParagraph=""
      />
    </div>
  )
}

export const query = graphql`
  query {
    landing: file(relativePath: { eq: "anbau.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    select: file(relativePath: { eq: "anbau-1.jpg" }) {
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

export default Anbau
