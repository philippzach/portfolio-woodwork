import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../layout/layout-m"
import SEO from "../components/seo"

const Schreinerei = ({ data }) => (
  <Layout data={data.landing} text="Schreinerei" color="#B7A07C">
    <SEO title="Page two" />
    <h1>Hi from the third page</h1>
  </Layout>
)

export default Schreinerei

export const query = graphql`
  query {
    landing: file(relativePath: { eq: "schreinerei.jpg" }) {
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
