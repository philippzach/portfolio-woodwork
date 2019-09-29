import React, { Component } from "react"
import { Link } from "gatsby"
import "./navigation.css"
import Logo from "../../images/wohlgensinger_logo.svg"
import MobileLogo from "../../images/mobile_logo.svg"
import MobileMenu from "../../images/mobilemenu.svg"
import styled from "@emotion/styled"
import Line from "../../images/line.svg"
import Phone from "../../images/phone.svg"

const Bar = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
`
const LogoImg = styled.img`
  margin-bottom: 0;
  padding: 1vw 0;
`

const List = styled.ul`
  display: flex;
  list-style: none;
  margin-bottom: 0;
  margin-left: 2vw;

  li {
    padding-right: 2vw;
    margin-bottom: 0;
    padding-top: calc(1.45rem / 2);
    padding-bottom: calc(1.45rem / 2);
    ul {
      z-index: 10;
      li {
        padding-left: 1em;
        padding-top: calc(1.45rem / 4);
        padding-bottom: calc(1.45rem / 4);
        margin-bottom: 0;
        font-size: 12px;
        font-weight: 700;
      }
      li:hover {
        background-color: rgba(255, 255, 255, 1);
        text-decoration: underline;
      }

      a {
        text-decoration: none;
      }
    }
    a {
      color: #6c6c6c;
    }
  }
`
const Grid = styled.div`
  display: grid;
  list-style: none;
  font-family: Futura;
  font-weight: 400;
  font-size: 14px;
  color: #6c6c6c;
  @media (min-width: 670px) {
    grid-template-columns: 20% 45% 35%;
    align-items: center;
  }
  @media (max-width: 669px) {
    display: none;
  }
`
const Mobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.45em;
  padding-top: 1,45em;
  @media (min-width: 669px) {
    display: none;
  }
`
const MobileList = styled.div`
  display: grid;
  grid-template-rows: 35px 35px 35px 35px;
  grid-template-columns: 50%;
  justify-content: end;
  text-align: right;
  z-index: 0;
  a {
    background-color: rgba(255, 255, 255, 0.85);
    color: black;
    font-family: roboto;
    padding-right: 33%;
  }
`

const ML = styled.img`
height: 40px;
`
const MM = styled.img`
  cursor: pointer;
`

const Cta = styled.div`
  display: inline-flex;
  align-items: center;
  @media (min-width: 669px) {
    justify-content: flex-end;
  }
`
const Call = styled.a`
  padding: 0 1vw;
`

class Navigation extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      sidebarOpen: false,
      animate: false,
    }
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  handleMouseDown(e) {
    this.toggleMenu()
    this.animateSvg()
    console.log("clicked")
  }
  toggleMenu() {
    this.setState({ sidebarOpen: !this.state.sidebarOpen })
  }
  animateSvg() {
    this.setState({ animate: true })
  }

  render() {
    return (
      <Bar>
        <nav
          style={{
            margin: `0 auto`,
            background: `white`,
            maxWidth: 960,
            padding: `0 1.45rem`,
            boxShadow: "rgba(0,0,0,0.09) 4px 6px 14px",
          }}
        >
          <Mobile>
            <Link to="/" style={{display: "flex"}}>
              <ML src={MobileLogo} alt="Wohlgensinger Mobile Logo" />
            </Link>
            <svg
              onClick={() => this.handleMouseDown()}
              onAnimationEnd={() => this.setState({ animate: false })}
              className={this.state.animate ? "animate-pulse" : ""}
              width="29px"
              height="29px"
              viewBox="0 0 29 29"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Wohlgensinger-Mobile"
                  transform="translate(-352.000000, -25.000000)"
                  fill="#63BF78"
                >
                  <path
                    d="M366.5,50.375 C360.494281,50.375 355.625,45.506625 355.625,39.5 C355.625,33.493375 360.494281,28.625 366.5,28.625 C372.505719,28.625 377.375,33.493375 377.375,39.5 C377.375,45.506625 372.505719,50.375 366.5,50.375 M366.5,25 C358.492375,25 352,31.4914687 352,39.5 C352,47.507625 358.492375,54 366.5,54 C374.507625,54 381,47.507625 381,39.5 C381,31.4914687 374.507625,25 366.5,25"
                    id="3"
                  ></path>
                </g>
              </g>
            </svg>
          </Mobile>

          <Grid>
            <Link to="/">
              <LogoImg
                src={Logo}
                alt="Wohlgensinger AG Logo"
                className="logo"
              />
            </Link>
            <List>
              <li className="firstli" style={{ margin: 0 }}>
                <Link
                  to="/holzbau"
                  style={{
                    textDecoration: `none`,
                  }}
                >
                  Holzbau &#9662;
                </Link>
                <ul className="secondul">
                  <Link to="/holzbau/aufstockung">
                    <li>Aufstockung</li>
                  </Link>
                  <Link to="/holzbau/umbau">
                    <li>Umbau</li>
                  </Link>
                  <Link to="/holzbau/anbau">
                    <li>Anbau</li>
                  </Link>
                  <Link to="/holzbau/neubau">
                    <li>Neubau | Ersatzneubau</li>
                  </Link>
                  <Link to="/holzbau/service">
                    <li>Service</li>
                  </Link>
                </ul>
              </li>
              <li className="firstli" style={{ margin: 0 }}>
                <Link
                  to="/schreinerei"
                  style={{
                    textDecoration: `none`,
                  }}
                >
                  Schreinerei &#9662;
                </Link>
                <ul className="secondul">
                  <Link to="/schreinerei/tueren">
                    <li>Türen</li>
                  </Link>
                  <Link to="/schreinerei/treppen">
                    <li>Treppen</li>
                  </Link>
                  <Link to="/schreinerei/schraenke">
                    <li>Schränke</li>
                  </Link>
                  <Link to="/schreinerei/reperaturen">
                    <li>Reperaturen</li>
                  </Link>
                  <Link to="/schreinerei/moebel-weingestell">
                    <li>Weingestell | Möbel</li>
                  </Link>
                </ul>
              </li>
              <li style={{ margin: 0 }}>
                <Link
                  to="/services"
                  style={{
                    textDecoration: `none`,
                  }}
                >
                  Services
                </Link>
              </li>
              <li style={{ margin: 0 }}>
                <Link
                  to="/kontakt"
                  style={{
                    textDecoration: `none`,
                  }}
                >
                  Kontakt
                </Link>
              </li>
            </List>
            <Cta>
              <img src={Line} alt="Seperator line" />
              <Call>+41 (0)71 983 15 20</Call>
              <img src={Phone} alt="Phone Icon" />
            </Cta>
          </Grid>
        </nav>
        <div
          className={"menu" + this.state.sidebarOpen}
          onClick={() => this.toggleMenu()}
        >
          <MobileList>
            <Link
              to="/holzbau"
              style={{
                textDecoration: `none`,
              }}
            >
              Holzbau
            </Link>
            <Link
              to="/schreinerei"
              style={{
                textDecoration: `none`,
              }}
            >
              Schreinerei
            </Link>
            <Link
              to="/services"
              style={{
                textDecoration: `none`,
              }}
            >
              Services
            </Link>
            <Link
              to="/kontakt"
              style={{
                textDecoration: `none`,
              }}
            >
              Kontakt
            </Link>
          </MobileList>
        </div>
      </Bar>
    )
  }
}

export default Navigation
