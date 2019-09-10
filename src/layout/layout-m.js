import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import "./layout.css"

const ColorBox = styled.div`
  position: absolute;
  background-color: rgba(87, 188, 110, 0.9);
  width: 60%;
  left: 40%;
  top: 300px;
`
const WhiteText = styled.h1`
  color: white;
  text-transform: uppercase;
  position: relative;
`

const LayoutMedium = ({ children, data, text }) => {
  return (
    <header>
      <Navigation />
      <Img fluid={data.childImageSharp.fluid} />
      <ColorBox>
        <WhiteText>{text}</WhiteText>
      </ColorBox>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </header>
  )
}

export default LayoutMedium
