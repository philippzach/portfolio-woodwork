import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout/layout-s"
import SEO from "../components/seo"

const Services = ({ data }) => (
  <Layout data={data.landingSmall} text="Services">
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
  </Layout>
)

export default Services

export const query = graphql`
  query {
    landingSmall: file(relativePath: { eq: "services.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
