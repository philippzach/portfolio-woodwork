import React from "react"
import Navigation from "./nav/navigation"
import Footer from "./footer"

import Img from "gatsby-image"
import styled from "@emotion/styled"

import "./layout.css"

const TextBox = styled.div`
  position: absolute;
  left: 50%;
  top: 200px;
  @media (max-width: 395px) {
    display: none;
  }
  @media (max-width: 550px) {
    top: 65px;
    text-align: center;
  }
  @media (min-width: 551px) and (max-width: 699px) {
    top: 85px;
  }
  @media (min-width: 700px) and (max-width: 800px) {
    top: 120px;
  }
  @media (min-width: 801px) and (max-width: 999px) {
    top: 150px;
  }
  @media (min-width: 1000px) and (max-width: 1200px) {
    top: 180px;
  }
  @media (min-width: 1201px) and (max-width: 1400px) {
    top: 200px;
  }
  @media (min-width: 1401px) and (max-width: 1600px) {
    top: 250spx;
  }
  @media (min-width: 1601px) and (max-width: 2000px) {
    top: 280px;
  }
  @media (min-width: 2001px) {
    top: 300px;
  }
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
