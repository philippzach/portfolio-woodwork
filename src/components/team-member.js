import React, { Component } from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const Name = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  margin: 1em 0;
  font-size: 1.2em;
`
const Title = styled.div`
  margin-bottom: 1em;
  p {
    margin: 0;
  }
`
const Phone = styled.p`
  font-weight: 500;
  margin-bottom: 1em;
`
const Email = styled.p`
  font-weight: bold;
  margin: 0;
`

class team extends Component {
  render() {
    return (
      <div>
        <Img
          fluid={this.props.photo.childImageSharp.fluid}
          alt={"Wohlgensinger AG Team" + this.props.name}
        />
        <Name>{this.props.name}</Name>
        <Title>
          <p>{this.props.jobTitle}</p>
          {/*  <p>{this.props.education}</p> */}
        </Title>
        {/*   <Phone>{this.props.phone}</Phone>
        <Email>{this.props.email}</Email> */}
      </div>
    )
  }
}

export default team
