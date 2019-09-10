import React from "react"
import { Link } from "gatsby"

import Layout from "../layout/layout-m"
import SEO from "../components/seo"

const SecondPage = ({ data }) => (
  <Layout data={data.landingMedium} text="Holzbau">
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
  </Layout>
)

export default SecondPage

export const query = graphql`
  query {
    landingMedium: file(relativePath: { eq: "lp-m.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 2500
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
