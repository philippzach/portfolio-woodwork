import React, { Component } from "react"
import { Helmet } from "react-helmet"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import Cta from "../components/cta"
import SEO from "../components/seo"
import Slider from "../components/Slider/slider-schreinerei"

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

const Header = styled.h1`
  font-family: "Futura-Bold";
  white-space: nowrap;
`
const Paragraph = styled.p``
const TextContainer = styled.div`
  max-width: 25em;
  margin: 0 auto;
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
          <Helmet>
            <link
              rel="stylesheet"
              type="text/css"
              charset="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
          </Helmet>
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
          <Cta />
          <Slider data={this.props.data} />
        </Layout>
      </div>
    )
  }
}
