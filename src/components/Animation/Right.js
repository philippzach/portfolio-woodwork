import React, { Component } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import "./animation.css"
import Button1 from "../Buttons/Button1/Button1"

import IconSchreinerei from "../../images/icon-holzbau.svg"
import Slide1 from "../../images/hb-slide1.jpg"
import Slide2 from "../../images/hb-slide2.jpg"
import Slide3 from "../../images/hb-slide3.jpg"

const BoxContainer = styled.div`
  position: relative;
  color: rgb(49, 49, 49);
`
const NumberBox = styled.div`
  position: absolute;
  top: 50%;
  margin-top: -4px;
  display: flex;
  z-index: 10;
`
const LineBox = styled.div``
const NumbersBox = styled.div`
  display: grid;
  font-family: futura;
  font-weight: bold;
  padding-left: 20px;
  margin-top: 4px;
  color: white;
  @media (max-width: 480px) {
    padding-left: 10px;
  }
`
const SvgLine = styled.div``
const Numbers = styled.span`
  padding-bottom: 12px;
  opacity: 0.5;
`

const Heading = styled.h2`
  font-family: futura;
  font-weight: bold;
  font-size: 2.3em;
`
const TopHeading = styled.h3`
  font-family: roboto;
  font-weight: bold;
  font-size: 1.1em;
  margin-top: 0.5em;
  margin-bottom: 0.8em;
`
const Paragraph = styled.p`
  font-family: roboto;
`

const BackgroundContainer = styled.div`
  background-color: #f3e3d9;
  margin: 4.5em;
  position: relative;
  z-index: 0;
  @media (max-width: 999px) {
    margin: 4.5em 0em calc(4.5em + 400px) 4.5em;
  }
  @media (min-width: 1000px) {
    display: flex;
    justify-content: flex-end;
  }
`

const TextContainer = styled.div`
  max-width: 30em;
  padding: 2em;
  @media (max-width: 999px) {
    padding: 1em 1em 1em 3em;
  }
  @media (min-width: 1000px) and (max-width: 1099px) {
    padding-left: 2.5em;
    max-width: 25em;
  }
  @media (min-width: 1100px) {
    padding-left: 4em;
  }
  @media (min-width: 1300px) {
    padding-right: 6em;
    padding-left: 0;
  }
  @media (min-width: 1600px) {
    padding-left: 10em;
    max-width: 42em;
  }
  @media (min-width: 2000px) {
    padding-right: 17em;
    padding-left: 0;
    max-width: 50em;
  }
`
const ImageContainer = styled.div`
  position: absolute;
  height: 400px;
  width: 100%;
  z-index: 0;
  left: -4.5em;
  bottom: -2em;
  @media (max-width: 999px) {
    right: 0em;
    bottom: -400px;
    width: initial;
    left: -4.5em;
  }
  @media (min-width: 1200px) {
    left: -4.5em;
  }
  @media (min-width: 1300px) {
    left: -4.5em;
  }
  @media (min-width: 1400px) {
    left: 4em;
  }
  @media (min-width: 1500px) {
    left: 5em;
  }
  @media (min-width: 1600px) {
    left: 6em;
  }
  @media (min-width: 1800px) {
    left: 8em;
  }
  @media (min-width: 2000px) {
    left: 14em;
  }
`
const AnimationContainer = styled.div`
  position: relative;
`
const Image = styled.img`
  position: absolute;
`
const ArtificialLink = styled.span`
  font-family: roboto;
  font-weight: bold;
`

export default class Left extends Component {
  render() {
    return (
      <Link to="/holzbau">
        <BoxContainer className="hoverlink">
          <NumberBox>
            <LineBox>
              <SvgLine>
                <svg width="72px" height="4px" viewBox="0 0 92 4" version="1.1">
                  <g
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="square"
                  >
                    <g
                      id="Wohlgensinger---Landing-Page"
                      transform="translate(0.000000, -2462.000000)"
                      stroke="#DDCABF"
                      stroke-width="3"
                    >
                      <g
                        id="Group-9"
                        transform="translate(0.000000, 2444.000000)"
                      >
                        <path
                          d="M45.5,-24.5 L45.5,64.5"
                          id="Line-5"
                          transform="translate(45.500000, 20.000000) rotate(-90.000000) translate(-45.500000, -20.000000) "
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </SvgLine>
            </LineBox>
            <NumbersBox id="numberanimation">
              <Numbers>01</Numbers>
              <Numbers>02</Numbers>
              <Numbers>03</Numbers>
            </NumbersBox>
          </NumberBox>
          <BackgroundContainer>
            <ImageContainer>
              <AnimationContainer id="imageanimation">
                <Image src={Slide1} alt="Schreinerei" height="400px" />
                <Image src={Slide2} alt="Schreinerei" height="400px" />
                <Image src={Slide3} alt="Schreinerei" height="400px" />
              </AnimationContainer>
            </ImageContainer>
            <TextContainer>
              <img src={IconSchreinerei} alt="icon schreinerei passgenau" />
              <TopHeading>Individuell und Ökologisch</TopHeading>
              <Heading>Holzbau</Heading>
              <Paragraph>
                Wir sind Ihr Holzbauer für die individuelle Aufstockung sowie
                den Umbau, Anbau oder Neubau. Unsere innovativen und kompetenten
                Bauleiter und Zimmerleute arbeiten Ihren Wünschen und Angaben
                entsprechend zuverlässig und mit viel Gespür für den lebendigen
                Rohstoff Holz. handwerklichem Können nach individuellen
                Vorgaben.
              </Paragraph>
              <Button1 name="Zum Holzbau" />
            </TextContainer>
          </BackgroundContainer>
        </BoxContainer>
      </Link>
    )
  }
}
