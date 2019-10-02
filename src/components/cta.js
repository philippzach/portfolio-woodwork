import React from "react"
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
const Cta = () => (
  <Container>
    <Heading>Jetzt unvebindlich mit uns austauschen.</Heading>
    <Paragraph>Telefonat oder Meeting vereinbaren</Paragraph>
    <Link to="/kontakt">
      <button className="mainbutton">Kontaktieren Sie uns!</button>
    </Link>
  </Container>
)

export default Cta
