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
        data={data}
        seoTitle="Holzbau | Service"
        seoDescription="Neue Fassade aus Holz, neues Dachgesims oder eine neue Decke? Wir haben für jeden Fall elegante Lösungen aus Holz."
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
    slide2: file(relativePath: { eq: "slider-holzbau/hb2.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide3: file(relativePath: { eq: "slider-holzbau/hb3.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide4: file(relativePath: { eq: "slider-holzbau/hb4.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide5: file(relativePath: { eq: "slider-holzbau/hb5.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide6: file(relativePath: { eq: "slider-holzbau/hb6.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide7: file(relativePath: { eq: "slider-holzbau/hb7.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide8: file(relativePath: { eq: "slider-holzbau/hb8.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide9: file(relativePath: { eq: "slider-holzbau/hb9.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#5D3D30" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    slide1: file(relativePath: { eq: "slider-holzbau/hb10.jpg" }) {
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
