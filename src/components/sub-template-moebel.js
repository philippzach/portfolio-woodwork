import React, { Component } from "react"

import Img from "gatsby-image"
import styled from "@emotion/styled"
import Cta from "../components/cta"
import SEO from "../components/seo"

import Layout from "../components/layout/layout-s"

const Container = styled.div`
  display: flex;
  background-color: #f3e3d9;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 2em;
  @media (max-width: 670px) {
    flex-direction: column;
    margin-top: 0em;
  }
`
const Left = styled.div`
  width: 50%;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 670px) {
    width: 100%;
  }
`
const Right = styled.div`
  width: 50%;
  padding: 2em;
  margin-top: -5.5em;
  @media (max-width: 670px) {
    width: 100%;
    margin-top: -2.5em;
  }
`
const Right2 = styled.div`
  width: 50%;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 670px) {
    width: 100%;
  }
`
const Left2 = styled.div`
  width: 50%;
  padding: 2em;
  margin-top: -5.5em;
  @media (max-width: 670px) {
    width: 100%;
    margin-top: -2.5em;
  }
`

const Header = styled.h1`
  font-family: "Futura-Bold";
`
const Paragraph = styled.p``
const TextContainer = styled.div`
  max-width: 25em;
  margin: 0 auto;
`

const Spacer = styled.div`
  padding: 2em 0;
`
const PriceBold = styled.span`
  font-family: "Futura-Bold";
  display: block;
`
const Price = styled.span`
  font-family: "Futura";
  display: block;
`

export default class subTemplate2 extends Component {
  render() {
    return (
      <div>
        <Layout data={this.props.header} text="">
          <SEO
            title={this.props.seoTitle}
            description={this.props.seoDescription}
          />
          <Container>
            <Left>
              <TextContainer>
                <Header>{this.props.headerText}</Header>
                <Paragraph>{this.props.paragraph}</Paragraph>
                <Paragraph>{this.props.subParagraph}</Paragraph>
              </TextContainer>
            </Left>
            <Right>
              <Img
                fluid={this.props.select.childImageSharp.fluid}
                alt={this.props.headerText}
              />
            </Right>
          </Container>
          <Spacer />
          <Container>
            <Left2>
              <Img
                fluid={this.props.select2.childImageSharp.fluid}
                alt={this.props.headerText2}
              />
            </Left2>
            <Right2>
              <TextContainer>
                <Header>{this.props.headerText2}</Header>
                <Paragraph>{this.props.paragraph2}</Paragraph>
                <Paragraph>{this.props.subParagraph}</Paragraph>
                <Paragraph>
                  <PriceBold>{this.props.weingestell1}</PriceBold>
                  <Price>{this.props.preis1}</Price>
                </Paragraph>
                <Paragraph>
                  <PriceBold>{this.props.weingestell2}</PriceBold>
                  <Price>{this.props.preis2}</Price>
                </Paragraph>
                <Paragraph style={{ fontStyle: "italic" }}>
                  {this.props.groesse}
                </Paragraph>
              </TextContainer>
            </Right2>
          </Container>
          <Cta />
        </Layout>
      </div>
    )
  }
}
