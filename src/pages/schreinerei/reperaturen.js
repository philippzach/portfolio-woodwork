import React, { Component } from "react"
import { graphql } from "gatsby"
import Template from "../../components/sub-template-2"

const Reperaturen = ({ data }) => {
  return (
    <div>
      <Template
        header={data.landing}
        select={data.select}
        headerText="Reperaturen"
        paragraph="Haben Sie ein Küchentürli oder eine Eingangstür, die klemmt? Kein Problem – rufen Sie uns an und wir kommen vorbei. Keine Arbeiten und keine Aufträge sind für unsere Möbelschreiner zu klein, egal ob es sich um Ausbesserungsarbeiten oder Einbauten handelt."
        subParagraph=""
      />
    </div>
  )
}

export const query = graphql`
  query {
    landing: file(relativePath: { eq: "reperaturen.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#B7A07C" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    select: file(relativePath: { eq: "reperaturen-1.jpg" }) {
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
