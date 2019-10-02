import React from "react"
import { graphql } from "gatsby"
import Template from "../../components/sub-template-2"

const Tueren = ({ data }) => {
  return (
    <div>
      <Template
        header={data.landing}
        select={data.select}
        headerText="Türen"
        paragraph="Tür ist nicht gleich Tür. Wir fertigen und montieren Ihre Innen- oder Aussentür nach Mass und veredeln sie nach Wunsch – von der farbig gespritzten bis zur gebürsteten und geölten Oberfläche aus nachhaltig gewonnenem Holz oder Altholz. Selbstverständlich kümmern wir uns auch um die saubere und fachgerechte Türmontage."
        subParagraph=""
      />
    </div>
  )
}

export const query = graphql`
  query {
    landing: file(relativePath: { eq: "tueren.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    select: file(relativePath: { eq: "tueren-1.jpg" }) {
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

export default Tueren
