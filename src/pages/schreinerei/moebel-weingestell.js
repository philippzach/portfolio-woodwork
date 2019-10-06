import React from "react"
import { graphql } from "gatsby"
import Template from "../../components/sub-template-moebel"

const Reperaturen = ({ data }) => {
  return (
    <div>
      <Template
        header={data.landing}
        select={data.select}
        headerText="Möbel"
        paragraph="In unserer Schreinerei stellen wir mit viel Herzblut Ihre Badmöbel, Tische, Sideboards oder andere Möbelstücke nach Ihren Vorstellungen an. Egal, ob Sie Ihr Haus umbauen oder ein zusätzliches Möbelstück benötigen, an unseren hochwertigen Holzmöbeln werden Sie lange Freude haben. "
        subParagraph=""
        headerText2="Weingestelle"
        paragraph2="Unser Weingestell aus massivem Schweizer Fichtenholz überzeugt Liebhaber edler Tropfen seit Langem. Es ist in verschiedenen Grössen und mit Platz für bis zu 250 Flaschen verfügbar – ein Möbelstück also, mit dem Sie so schnell nicht auf dem Trockenen sitzen werden."
        select2={data.select2}
      />
    </div>
  )
}

export const query = graphql`
  query {
    landing: file(relativePath: { eq: "moebel.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    select: file(relativePath: { eq: "moebel-1.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    select2: file(relativePath: { eq: "weingestell.jpg" }) {
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

export default Reperaturen
