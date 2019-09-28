import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
  margin: 10% 0;
`
const Heading = styled.h2`
  font-family: futura;
  font-weight: bold;
  font-size: 2em;
  margin-bottom: 0.5em;
`
const Paragraph = styled.p`
  margin-bottom: 2em;
`

export default class cta extends Component {
  render() {
    return (
      <Container>
        <Heading>Kontaktieren Sie Uns!</Heading>
        <Paragraph>Telefonat abmachen | Meeting vereinbaren</Paragraph>
        <Link to="/kontakt">
          <button className="mainbutton">Jetzt kostenlos Anfragen</button>
        </Link>
      </Container>
    )
  }
}
