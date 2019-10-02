import React from "react"
import { graphql } from "gatsby"
import Template from "../../components/sub-template-1"

const Service = ({ data }) => {
  return (
    <div>
      <Template
        header={data.landing}
        select={data.select}
        headerText="Service"
        paragraph="Müssen Sie das Dachgesims, die Fassade oder einzelne Balken erneuern? Benötigen Sie eine Trennwand oder eine neue Decke? Kontaktieren Sie uns, wir zeigen Ihnen gerne unsere eleganten Lösungen aus Holz und setzen diese für Sie in die Tat um."
        subParagraph=""
      />
    </div>
  )
}

export const query = graphql`
  query {
    landing: file(relativePath: { eq: "service.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    select: file(relativePath: { eq: "service-1.jpg" }) {
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

export default Service
