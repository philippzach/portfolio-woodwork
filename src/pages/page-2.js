import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout-s"
import SEO from "../components/seo"

const SecondPage = ({ data }) => (
  <Layout data={data.landingSmall} text="Content">
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
  </Layout>
)

export default SecondPage

export const query = graphql`
  query {
    landingSmall: file(relativePath: { eq: "lp-sm.jpg" }) {
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
