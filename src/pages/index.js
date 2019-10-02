import React from "react"
import { graphql } from "gatsby"
import Slider from "../components/Slider/slick-slider-thin"
import SliderCenter from "../components/Slider/slick-slider-center"
import AnimationLeft from "../components/Animation/Left"
import AnimationHB from "../components/Animation/Right"
import Cta from "../components/cta"
import BoxGrid from "../components/boxgrid"
import { Helmet } from "react-helmet"

import Layout from "../components/layout/layout-lp"

import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout data={data}>
    <Helmet>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
    </Helmet>
    <SEO title="Holzbau" />
    <Slider />
    <AnimationHB data={data} />
    <AnimationLeft />
    <Cta />
    {/*
    <BoxGrid data={data} />
    <SliderCenter />
    <Cta /> */}
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
    box1: file(relativePath: { eq: "gridone.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    box2: file(relativePath: { eq: "gridtwo.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    box3: file(relativePath: { eq: "gridthree.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    box5: file(relativePath: { eq: "gridfive.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    hbslide1: file(relativePath: { eq: "hb-slide1.jpg" }) {
      childImageSharp {
        fixed(
          height: 400
          traceSVG: { background: "#ffff", color: "#f3e3d9" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    hbslide2: file(relativePath: { eq: "hb-slide2.jpg" }) {
      childImageSharp {
        fixed(
          height: 400
          traceSVG: { background: "#ffff", color: "#f3e3d9" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
    hbslide3: file(relativePath: { eq: "hb-slide3.jpg" }) {
      childImageSharp {
        fixed(
          height: 400
          traceSVG: { background: "#ffff", color: "#f3e3d9" }
        ) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`
