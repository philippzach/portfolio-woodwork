import React, { Component } from "react"
import { graphql } from "gatsby"
import Template from "../../components/sub-template-1"

const Neubau = ({ data }) => {
  return (
    <div>
      <Template
        header={data.landing}
        select={data.select}
        headerText="Neubau/Ersatzneubau"
        paragraph="Sind Sie bereit, Ihr eigenes Haus zu bauen? Gerne beraten wir Sie über die Möglichkeiten von Holzbau oder Holzelementbau und realisieren für Sie Ihr Ein- oder Mehrfamilienhaus nach Ihren Vorstellungen."
        subParagraph="Sie besitzen bereits ein Gebäude, allerdings mit schlechter Substanz? Vielleicht ist dann ein Ersatzneubau die richtige Wahl. Unsere Holzbauten weisen beste Werte in den Bereichen Ökologie (sehr gute Gebäudehülle und natürliche Baumaterialien) sowie Funktionalität (optimierte Grundrisse, atmungsaktives Dach und Aussenwände) auf."
      />
    </div>
  )
}

export const query = graphql`
  query {
    landing: file(relativePath: { eq: "neubau.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    select: file(relativePath: { eq: "neubau-1.jpg" }) {
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

export default Neubau
