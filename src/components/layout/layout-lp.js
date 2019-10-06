import React from "react"
import Navigation from "./nav/navigation"
import { Link } from "gatsby"
import Footer from "./footer"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import "./layout.css"

const GreenBlock = styled.div`
  position: absolute;
  background-color: rgba(87, 188, 110, 0.9);
  width: 50%;
  left: 50%;
  top: 300px;
  @media (max-width: 560px) {
    top: 100px;
    width: 75%;
    left: 12.5%;
    text-align: center;
  }
  @media (min-width: 560px) and (max-width: 800px) {
    top: 100px;
    width: 75%;
    left: 12.5%;
    text-align: center;
  }
  @media (min-width: 800px) and (max-width: 1000px) {
    width: 50%;
    left: 50%;
    top: 200px;
  }
`
const ButtonContainer = styled.div`
  position: absolute;
  margin-top: -20px;
  margin-left: 30px;
  @media (max-width: 560px) {
    display: none;
  }
`

const Heading = styled.h1`
  font-family: futura;
  font-weight: 800;
  color: white;
  text-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
  padding: 1em 0.5em 1em 0.75em;
  margin-bottom: 0;
`

const Layout = ({ children, data }) => {
  return (
    <header>
      <Navigation />
      <Img fluid={data.landing.childImageSharp.fluid} />
      <GreenBlock>
        <Heading>
          Gelebte Innovation
          <br />
          mit Holz
        </Heading>
        <ButtonContainer>
          <Link to="/kontakt">
            <button className="secondarybutton">Kontaktieren Sie uns!</button>
          </Link>
        </ButtonContainer>
      </GreenBlock>
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </header>
  )
}

export default Layout
