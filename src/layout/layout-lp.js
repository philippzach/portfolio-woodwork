import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import "./layout.css"

const GreenBlock = styled.div`
  position: absolute;
  background-color: rgba(87, 188, 110, 0.9);
  width: 50%;
  left: 50%;
  top: 300px;
`

const Layout = ({ children, data }) => {
  return (
    <header>
      <Navigation />
      <Img fluid={data.landing.childImageSharp.fluid} />
      <GreenBlock>
        <h1>
          Just Imagine
          <br />
          We do the rest
        </h1>
      </GreenBlock>
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

export default Layout
