import React from "react"
import Navigation from "./nav/navigation"
import Footer from "./footer"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import "./layout.css"

const ColorBox = styled.div`
  position: absolute;
  background-color: ${props => props.bgcolor};
  width: 60%;
  left: 40%;
  top: 300px;
  @media (max-width: 560px) {
    top: 100px;
    width: 75%;
    left: 12.5%;
    text-align: center;
  }
  @media (min-width: 561px) and (max-width: 800px) {
    top: 130px;
    width: 60%;
    left: 40%;
  }
  @media (min-width: 801px) and (max-width: 1200px) {
    top: 200px;
    width: 60%;
    left: 40%;
  }
`

const WhiteText = styled.h1`
  color: white;
  font-family: futura;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  text-shadow: rgba(0, 0, 0, 0.24) 0 2px 4px;
  margin-bottom: initial;
  padding: 1em;
  align-items: center;
  display: flex;
  @media (max-width: 560px) {
    padding: 0.5em;
  }
`

const LayoutMedium = ({ children, data, text, color }) => {
  return (
    <header>
      <Navigation />
      <Img fluid={data.childImageSharp.fluid} />
      <ColorBox bgcolor={color}>
        <WhiteText>
          {text}
          <svg
            style={{ marginLeft: "1em" }}
            width="66px"
            height="3px"
            viewBox="0 0 66 3"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="square"
            >
              <g
                id="Holzbau"
                transform="translate(-1088.000000, -325.000000)"
                stroke="#FFFFFF"
                stroke-width="2"
              >
                <path
                  d="M1120.5,294 L1120.5,357.5"
                  id="Line-5"
                  transform="translate(1121.000000, 326.000000) rotate(-90.000000) translate(-1121.000000, -326.000000) "
                ></path>
              </g>
            </g>
          </svg>
        </WhiteText>
      </ColorBox>
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </header>
  )
}

export default LayoutMedium
