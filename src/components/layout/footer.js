import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Google from "../../images/google.svg"

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

  padding: 1.45rem 1.5em;
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
const OtherMenu = styled.div`
  display: grid;
  grid-template-rows: 1.5fr repeat(5, 1fr);
  @media (max-width: 669px) {
    display: none;
  }
`
const OtherSchreinerei = styled.div`
  display: grid;
  grid-template-rows: 1.5fr repeat(5, 1fr);
  @media (max-width: 669px) {
    padding-top: 3em;
    text-align: center;
  }
`
const OtherHolzbau = styled.div`
  display: grid;
  grid-template-rows: 1.5fr repeat(5, 1fr);
  @media (max-width: 669px) {
    padding-top: 3em;
    text-align: center;
  }
`
const Copyright = styled.div`
  padding: 0 1.5em;
  font-family: futura;
  font-weight: 800;
  display: flex;
  justify-content: space-between;
`
const Contact = styled.div`
  @media (max-width: 669px) {
    grid-row: 1;
    grid-column: 1 / span 2;
    text-align: center;
  }
`

const Footer = () => (
  <FooterBg>
    <Container>
      <Grid>
        <OtherMenu>
          <span></span>
          <Link to="/ueber-uns">Über uns</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">News</Link>
          <Link to="/kontakt">Kontakt</Link>
          <Link to="/impressum">Impressum</Link>
          <span></span>
        </OtherMenu>
        <OtherHolzbau>
          <Link to="/holzbau">
            <b>Holzbau</b>
          </Link>

          <Link to="/holzbau/aufstockung">Aufstockung</Link>
          <Link to="/holzbau/umbau">Umbau</Link>
          <Link to="/holzbau/anbau">Anbau</Link>
          <Link to="/holzbau/neubau">Neubau</Link>
          <Link to="/holzbau/service">Service</Link>
        </OtherHolzbau>
        <OtherSchreinerei>
          <Link to="/schreinerei">
            <b>Schreinerei</b>
          </Link>
          <Link to="/schreinerei/tueren">Türen</Link>
          <Link to="/schreinerei/treppen">Treppen</Link>
          <Link to="/schreinerei/schraenke">Schränke</Link>
          <Link to="/schreinerei/reparaturen">Reparaturen</Link>
          <Link to="/schreinerei/moebel-weingestell">Möbel | Weingestell</Link>
        </OtherSchreinerei>
        <Contact>
          <Span>
            <b>Wohlgensinger AG</b>
          </Span>
          <Spacer />
          <Span>Aufeld 10</Span>
          <Span>9607 Mosnang</Span>
          <Span>Schweiz</Span>
          <Spacer />
          <Span>
            Telefon{" "}
            <a href="tel:+410719831520">
              <b style={{ fontSize: "13px" }}>+41 (0)71 983 15 20</b>
            </a>
          </Span>
          <Span>
            Email{" "}
            <a href="mailto:info@wohlgensinger.ch">
              <b style={{ fontSize: "13px" }}>info@wohlgensinger.ch</b>
            </a>
          </Span>
          <Spacer />
          <Link to="/kontakt">
            <button className="meeting">Kontaktieren Sie uns!</button>
          </Link>
        </Contact>
      </Grid>
      <hr />
      <Copyright>
        <span style={{ fontSize: "0.65em" }}>
          © {new Date().getFullYear()},{` `}
          Wohlgensinger AG
        </span>
        <span style={{ fontSize: "0.65em" }}></span>
      </Copyright>
    </Container>
  </FooterBg>
)

export default Footer
