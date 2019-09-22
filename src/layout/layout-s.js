import React from "react"
import Navigation from "./nav/navigation"
import Footer from "./footer"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import "./layout.css"

const TextBox = styled.div`
  position: absolute;
  left: 50%;
  top: 200px;
`
const WhiteText = styled.h1`
  color: white;
  text-transform: uppercase;
  position: relative;
  left: -50%;
`

const LayoutSmall = ({ children, data, text }) => {
  return (
    <header>
      <Navigation />
      <Img fluid={data.childImageSharp.fluid} />
      <TextBox>
        <WhiteText>{text}</WhiteText>
      </TextBox>
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

export default LayoutSmall
