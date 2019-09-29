import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const Card = styled.div`
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px;
  transition: all 140ms ease;
  &:hover {
    box-shadow: 0 1rem 2.5rem 0 rgba(39, 48, 54, 0.25);
    transform: translateY(-0.125rem);
  }
`
const Heading = styled.h3`
  font-family: futura;
  color: white;
  text-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px;
  font-weight: bold;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2rem;
  transform: translate(-50%, -50%);
`

export default class card extends Component {
  render() {
    return (
      <Card>
        <Img
          fluid={this.props.data.childImageSharp.fluid}
          alt={this.props.title}
        />
        <Heading>{this.props.title}</Heading>
      </Card>
    )
  }
}
