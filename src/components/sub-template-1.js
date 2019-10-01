import React, { Component, Children } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import Cta from "../components/cta"
import SEO from "../components/seo"

import Layout from "../layout/layout-s"

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 670px) {
    flex-direction: column;
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
  margin-top: -3.5em;
  @media (max-width: 670px) {
    width: 100%;
  }
`

const Header = styled.h1``
const Paragraph = styled.p``
const TextContainer = styled.div`
  max-width: 25em;
  margin: 0 auto;
`

export default class subTemplate extends Component {
  render() {
    return (
      <div>
        <Layout data={this.props.header} text="">
          <SEO title={this.props.headerText} />
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
                alt={this.props.headerText + " " + "photo"}
              />
            </Right>
          </Container>
          <Cta />
        </Layout>
      </div>
    )
  }
}
