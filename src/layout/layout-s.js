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
  font-family: futura;
  font-weight: bold;
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

      <main>{children}</main>
      <Footer />
    </header>
  )
}

export default LayoutSmall
