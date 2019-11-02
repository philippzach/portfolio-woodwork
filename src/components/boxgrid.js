import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import "./boxgrid.css"

import Icon1 from "../images/garantie.svg"
import Icon2 from "../images/quality.svg"
import Icon3 from "../images/wood.svg"

const FlexContainer = styled.div`
  display: flex;
  @media (max-width: 870px) {
    flex-direction: column;
  }
`

const Left = styled.div`
  background-color: #f5f5f5;
  width: 50%;
  display: flex;
  @media (max-width: 870px) {
    width: 100%;
  }
`
const Right = styled.div`
  width: 50%;
  @media (max-width: 870px) {
    width: 100%;
  }
`
const Heading = styled.h2`
  font-family: "Futura-Bold";
  font-weight: bold;
  font-size: 2em;
  margin-bottom: 0.5em;
`
const Spacer = styled.div`
  width: 30%;
  @media (max-width: 870px) {
    width: 0%;
  }
  @media (min-width: 870px) and (max-width: 1250px) {
    width: 15%;
  }
`
const Text = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 870px) {
    width: 100%;
    padding: 2em;
  }
  @media (min-width: 1000px) {
    padding-right: 4em;
  }
`
const IconContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 870px) {
    grid-template-columns: 1fr 1fr;
  }
`
const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    text-align: center;
    font-family: "Futura-Medium";
    padding-top: 15px;
  }
`

class boxgrid extends Component {
  render() {
    return (
      <>
        <div style={{ margin: "2em 0" }} />
        <FlexContainer>
          <Left>
            <Spacer />
            <Text>
              <p>
                <b>Living Innovation</b>
              </p>
              <Heading>Familienbetrieb mit Tradition</Heading>
              <p>
                Mit dem nachwachsenden Rohstoff Holz aus der Region
                verwirklichen wir Ihre individuellen Wohn- und Bauwünsche,
                sodass Sie einen positiven Beitrag für unsere Umwelt und die
                unserer Kinder leisten können.{" "}
              </p>
              <IconContainer>
                {/* <Icon>
                  <img
                    src={Icon1}
                    alt="Wohlgesinger Icon"
                    className="iconfix"
                  />
                  <span>20 Jahre Garantie</span>
                </Icon> */}
                <Icon>
                  <img
                    src={Icon2}
                    alt="Wohlgesinger Icon"
                    className="iconfix"
                  />
                  <span>Hochwertige Produktion in CH</span>
                </Icon>
                <Icon>
                  <img
                    src={Icon3}
                    alt="Wohlgesinger Icon"
                    className="iconfix"
                  />
                  <span>Regionales Schweizer Holz</span>
                </Icon>
              </IconContainer>
            </Text>
          </Left>
          <Right>
            <div class="wrapper">
              <div class="box a">
                <Img
                  fluid={this.props.data.box1.childImageSharp.fluid}
                  alt="Wohlgensinger Holzbau Schweiz"
                />
              </div>
              <div class="box b">
                <Img
                  fluid={this.props.data.box2.childImageSharp.fluid}
                  alt="Wohlgensinger Holzbau Schweiz"
                />
              </div>
              {/* <div class="box c">
                <Img
                  fluid={this.props.data.box3.childImageSharp.fluid}
                  alt="Wohlgensinger Holzbau Schweiz"
                />
              </div> */}
              <div class="box e">
                <Img
                  fluid={this.props.data.box5.childImageSharp.fluid}
                  alt="Wohlgensinger Holzbau Schweiz"
                />
              </div>
            </div>
          </Right>
        </FlexContainer>
      </>
    )
  }
}
export default boxgrid
