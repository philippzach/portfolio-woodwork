import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import "./animation.css"
import Button1 from "../Buttons/Button1/Button1"

import IconSchreinerei from "../../images/icon-schreinerei.svg"
import Slide1 from "../../images/s-slide1.jpg"
import Slide2 from "../../images/s-slide2.jpg"
import Slide3 from "../../images/s-slide3.jpg"

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
  font-family: "Futura-Bold";
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
  font-family: "Futura-Bold";
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
  background-color: #c5a694;
  margin: 4.5em;
  position: relative;
  z-index: 0;
  @media (max-width: 999px) {
    margin: 4.5em 0em calc(4.5em + 400px) 4.5em;
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
    padding-left: 6em;
  }
  @media (min-width: 1600px) {
    padding-left: 10em;
    max-width: 42em;
  }
  @media (min-width: 2000px) {
    padding-left: 17em;
    max-width: 50em;
  }
`
const ImageContainer = styled.div`
  position: absolute;
  height: 400px;
  width: 100%;
  right: -4.5em;
  bottom: -2em;
  z-index: 0;
  @media (max-width: 999px) {
    right: 0em;
    bottom: initial;
    width: initial;
    left: -4.5em;
  }
  @media (min-width: 1200px) {
    right: 0em;
  }
  @media (min-width: 1300px) {
    right: 2em;
  }
  @media (min-width: 1400px) {
    right: 4em;
  }
  @media (min-width: 1500px) {
    right: 5em;
  }
  @media (min-width: 1600px) {
    right: 6em;
  }
  @media (min-width: 1800px) {
    right: 8em;
  }
  @media (min-width: 2000px) {
    right: 14em;
  }
`
const AnimationContainer = styled.div`
  position: relative;
`
const Image = styled.img`
  position: absolute;
  right: 0;
`

const Left = () => (
  <Link to="/schreinerei">
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
                  <g id="Group-9" transform="translate(0.000000, 2444.000000)">
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
        <TextContainer>
          <img src={IconSchreinerei} alt="icon schreinerei passgenau" />
          <TopHeading>Passgenau und Massgeschneidert</TopHeading>
          <Heading>Schreinerei</Heading>
          <Paragraph>
            Wenn Sie auf der Suche nach Türen, Treppen, Schränken und Möbel nach
            Mass sind, dann sind Sie bei uns genau richtig. Wir setzen Ihre
            Vorstellungen in die Tat um und unsere Möbelschreiner fertigen Ihre
            Möbelstücke mit viel Leidenschaft und handwerklichem Können nach
            individuellen Vorgaben.
          </Paragraph>
          <Button1 name="Zur Schreinerei" link="/schreinerei" />
        </TextContainer>
        <ImageContainer>
          <AnimationContainer id="imageanimation">
            <Image src={Slide1} alt="Schreinerei" height="400px" />
            <Image src={Slide2} alt="Schreinerei" height="400px" />
            <Image src={Slide3} alt="Schreinerei" height="400px" />
          </AnimationContainer>
        </ImageContainer>
      </BackgroundContainer>
    </BoxContainer>
  </Link>
)

export default Left
