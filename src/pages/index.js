import React from "react"
import { Link, graphql } from "gatsby"
import Slider from "../components/Slider/slick-slider-thin"
import SliderCenter from "../components/Slider/slick-slider-center"
import AnimationLeft from "../components/Animation/Left"

import Layout from "../layout/layout-lp"

import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout data={data}>
    <SEO title="Holzbau" />

    <Slider />
    <AnimationLeft />
    <SliderCenter />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    landing: file(relativePath: { eq: "ladingpage.jpg" }) {
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
