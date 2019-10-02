import React from "react"
import { graphql } from "gatsby"
import Template from "../../components/sub-template-2"

const Treppen = ({ data }) => {
  return (
    <div>
      <Template
        header={data.landing}
        select={data.select}
        headerText="Treppen"
        paragraph="Edle Holztreppen sind ein zentrales und funktionales Schmuckstück im Haus. Gerne kombinieren wir wertigen, massiven Treppenbau / Holzbau auch mit Stahl oder Glas und fertigen Ihre Treppe ganz nach Ihrem Wunsch."
        subParagraph=""
      />
    </div>
  )
}

export const query = graphql`
  query {
    landing: file(relativePath: { eq: "treppen.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    select: file(relativePath: { eq: "treppen-1.jpg" }) {
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

export default Treppen
