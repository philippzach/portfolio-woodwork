import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
  margin: 10% 0;
`
const Heading = styled.h2`
  font-family: "Futura-Bold";
  font-weight: bold;
  font-size: 2em;
  margin-bottom: 0.5em;
`
const Paragraph = styled.p`
  margin-bottom: 2em;
`
const Cta = () => (
  <Container>
    <Heading>Jetzt unverbindlich mit uns austauschen.</Heading>
    <Paragraph>Telefonat oder Meeting vereinbaren</Paragraph>
    <a href="mailto:info@wohlgensinger.ch">
      <button className="mainbutton">Kontaktieren Sie uns!</button>
    </a>
  </Container>
)

export default Cta
