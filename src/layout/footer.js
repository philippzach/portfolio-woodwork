import React from "react"
import styled from "@emotion/styled"

const FooterBg = styled.footer`
  background-color: rgb(236, 236, 236);
`
const Container = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 0 1rem 0;
`
const Grid = styled.div`
  font-family: futura;
  font-size: 0.8em;
  padding-top: 1.45rem;
  padding-bottom: 1.45rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 669px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`
const Span = styled.span`
  display: block;
`
const Spacer = styled.div`
  margin: 1em 0;
`
const Other = styled.div`
  display: grid;
  grid-template-rows: 1.5fr repeat(5, 1fr);
`
const Copyright = styled.div`
  font-family: futura;
  font-weight: 800;
  display: flex;
  justify-content: space-between;
`

const Footer = () => (
  <FooterBg>
    <Container>
      <Grid>
        <Other>
          <span></span>
          <span>Über uns</span>
          <span>Services</span>
          <span>News</span>
          <span>Kontakt</span>
          <span></span>
        </Other>
        <Other>
          <span>
            <b>Holzbau</b>
          </span>
          <span>Aufstockung</span>
          <span>Umbau</span>
          <span>Anbau</span>
          <span>Neubau</span>
          <span>Service</span>
        </Other>
        <Other>
          <span>
            <b>Schreinerei</b>
          </span>
          <span>Türen</span>
          <span>Treppen</span>
          <span>Schränke</span>
          <span>Reperaturen</span>
          <span>Möbel</span>
        </Other>

        <div>
          <Span>
            <b>Wohlgensinger AG</b>
          </Span>
          <Spacer />
          <Span>Aufeld 10</Span>
          <Span>9607 Mosnang</Span>
          <Span>Schweiz</Span>
          <Spacer />
          <Span>
            Telefon <b style={{ fontSize: "13px" }}>+41 (0)71 983 15 20</b>
          </Span>
          <Span>
            Email <b style={{ fontSize: "13px" }}>info@wohlgensinger.ch</b>
          </Span>
          <Spacer />
          <button>Contact us</button>
        </div>
      </Grid>
      <hr />
      <Copyright>
        <span style={{ fontSize: "0.65em" }}>
          © {new Date().getFullYear()},{` `}
          Wohlgensinger AG
        </span>
        <span>Social</span>
      </Copyright>
    </Container>
  </FooterBg>
)

export default Footer
