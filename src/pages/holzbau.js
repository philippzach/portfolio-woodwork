import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../layout/layout-m"
import SEO from "../components/seo"

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
`

const Holzbau = ({ data }) => (
  <Layout data={data.landing} text="Holzbau" color="#5D3D30">
    <SEO title="Page two" />
    <Container></Container>
  </Layout>
)

export default Holzbau

export const query = graphql`
  query {
    landing: file(relativePath: { eq: "holzbau.jpg" }) {
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
