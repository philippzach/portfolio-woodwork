import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Logo from "../../images/wohlgensinger_logo.svg"
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
  font-family: "Futura-Medium";
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
  font-family: "Futura-Bold";
  font-weight: 800;
  display: flex;
  justify-content: space-between;
  align-items: center;

`
const Contact = styled.div`
  @media (max-width: 669px) {
    grid-row: 1;
    grid-column: 1 / span 2;
    text-align: center;
  }
`
const ButtonContainer = styled.div`
  @media (max-width: 650px) {
    display: flex;
    justify-content: center;
  }
`
const LogoImg = styled.img`
  margin-bottom: 0;
  max-width: 150px;
`

const Footer = () => (
  <FooterBg>
    <Container>
      <Grid>
        <OtherMenu>
          <Link to="/">
            <b>Home</b>
          </Link>
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
          <Link to="/schreinerei/moebel-weingestell">Möbel | Weingestell</Link>
          <Link to="/schreinerei/reparaturen">Reparaturen</Link>
        </OtherSchreinerei>
        <Contact>
          <Span>
            <b>Wohlgensinger AG</b>
          </Span>
          <Span>Holzbau | Schreinerei</Span>
          <Spacer />
          <Span>Aufeld 10</Span>
          <Span>9607 Mosnang</Span>
          <Span>Schweiz</Span>
          <Spacer />
          <Span>
            Telefon{" "}
            <a href="tel:+41719831520">
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
          <ButtonContainer>
            <Link to="/kontakt">
              <button className="meeting">Kontaktieren Sie uns!</button>
            </Link>
          </ButtonContainer>
        </Contact>
      </Grid>
      <hr />
      <Copyright>
      <Link to="/" style={{width: '100%'}} >
        <LogoImg
          style={{ marginBottom: "0" }}
          src={Logo}
          alt="Wohlgensinger AG Logo"
        />
        </Link>
        <span style={{ fontSize: "0.65em" }}>
          © {new Date().getFullYear()}
          {' '}{' '}
          Wohlgensinger AG
        </span>
      </Copyright>
    </Container>
  </FooterBg>
)

export default Footer
