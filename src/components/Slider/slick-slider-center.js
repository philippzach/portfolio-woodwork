import React, { Component } from "react"
import Slider from "react-slick"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import "./slider.css"

const ButtonsLeft = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 50px;
  grid-template-rows: 50px;
  bottom: 17.5%;
  left: 33%;
  margin-top: 25px;
  @media (max-width: 600px) {
    left: 10%;
    bottom: 15.5%;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    bottom: 7.5%;
  }
  @media (min-width: 801px) and (max-width: 1000px) {
    bottom: 9.5%;
  }
  @media (min-width: 1801px) {
    bottom: 21.5%;
  }
`
const ButtonsRight = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 50px;
  grid-template-rows: 50px;
  bottom: 17.5%;
  right: 33%;
  margin-top: 25px;
  @media (max-width: 600px) {
    right: 10%;
    bottom: 15.5%;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    bottom: 7.5%;
  }
  @media (min-width: 801px) and (max-width: 1000px) {
    bottom: 9.5%;
  }
  @media (min-width: 1801px) {
    bottom: 21.5%;
  }
`
const BoxPrevious = styled.div`
  background-color: #4aa45e;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BoxNext = styled.div`
  background-color: #57bc6e;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  position: relative !important;
  width: 100% !important;
  max-height: 100% !important;
`

const TestamonialContainer = styled.div`
  background-color: white;
  margin-top: 4em;
`
const InsideTest = styled.div`
  background-color: #fcf1e8;
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
  color: #636363;
  padding: 1.45em 1em 0;
`
const Paragraph = styled.p`
  font-family: futura;
  font-style: italic;
  max-width: 45em;
  margin: 0 auto;
  line-height: 1.75em;
  padding-bottom: 2em;
  font-size: 0.8em;
`
export default class CenterMode extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav1: null,
      nav2: null,
    }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    })
  }

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }
    return (
      <Container>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <TestamonialContainer>
            <InsideTest>
              <svg
                width="22px"
                height="20px"
                viewBox="0 0 22 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  fill-opacity="0.424142264"
                  font-family="AmericanTypewriter-Bold, American Typewriter"
                  font-size="45"
                  font-weight="bold"
                >
                  <g
                    id="Wohlgensinger---Landing-Page"
                    transform="translate(-706.000000, -4635.000000)"
                    fill="#2E2015"
                  >
                    <text id="???">
                      <tspan x="704" y="4666">
                        ???
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
              <Paragraph style={{ paddingTop: "1.45em" }}>
                Wir m??chten uns bei dir und deiner Belegschaft herzlich bedanken
                f??r die tolle Arbeit, welche bereits im Vorfeld und ganz
                besonders am heutigen Tag bei uns ausgef??hrt wurde. Euer tolles
                Team hat miteinander die Aufgaben anpackt und ist sehr speditiv
                vorangekommen. Der Bauleiter, hat aus unserer Sicht den Neubau
                voll im Griff gehabt und vor allem auch ??ber die ???Systemgrenzen???
                hinaus geschaut und auf allf??llige Probleme hingewiesen.
              </Paragraph>
              <svg
                width="22px"
                height="20px"
                viewBox="0 0 22 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  fill-opacity="0.424142264"
                  font-family="AmericanTypewriter-Bold, American Typewriter"
                  font-size="45"
                  font-weight="bold"
                >
                  <g
                    id="Wohlgensinger---Landing-Page"
                    transform="translate(-709.000000, -5180.000000)"
                    fill="#2E2015"
                  >
                    <text id="???">
                      <tspan x="707" y="5211">
                        ???
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
              <Paragraph style={{ paddingTop: "1.45em" }}>
                Patrik und Cornelia
              </Paragraph>
            </InsideTest>
          </TestamonialContainer>
          <TestamonialContainer>
            <InsideTest>
              <svg
                width="22px"
                height="20px"
                viewBox="0 0 22 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  fill-opacity="0.424142264"
                  font-family="AmericanTypewriter-Bold, American Typewriter"
                  font-size="45"
                  font-weight="bold"
                >
                  <g
                    id="Wohlgensinger---Landing-Page"
                    transform="translate(-706.000000, -4635.000000)"
                    fill="#2E2015"
                  >
                    <text id="???">
                      <tspan x="704" y="4666">
                        ???
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
              <Paragraph style={{ paddingTop: "1.45em" }}>
                Es ware eine super Erfahrung mit so Engagierten und informativen
                Handwerkern zusammen arbeiten zu k??nnen. Gemeinsam konnten wir
                den Umbau unseres Haus zur vollesten Zufriedenheit von unserer
                Seite abschliessen.
              </Paragraph>
              <svg
                width="22px"
                height="20px"
                viewBox="0 0 22 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  fill-opacity="0.424142264"
                  font-family="AmericanTypewriter-Bold, American Typewriter"
                  font-size="45"
                  font-weight="bold"
                >
                  <g
                    id="Wohlgensinger---Landing-Page"
                    transform="translate(-709.000000, -5180.000000)"
                    fill="#2E2015"
                  >
                    <text id="???">
                      <tspan x="707" y="5211">
                        ???
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
              <Paragraph style={{ paddingTop: "1.45em" }}>Christof</Paragraph>
            </InsideTest>
          </TestamonialContainer>
          <TestamonialContainer>
            <InsideTest>
              <svg
                width="22px"
                height="20px"
                viewBox="0 0 22 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  fill-opacity="0.424142264"
                  font-family="AmericanTypewriter-Bold, American Typewriter"
                  font-size="45"
                  font-weight="bold"
                >
                  <g
                    id="Wohlgensinger---Landing-Page"
                    transform="translate(-706.000000, -4635.000000)"
                    fill="#2E2015"
                  >
                    <text id="???">
                      <tspan x="704" y="4666">
                        ???
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
              <Paragraph style={{ paddingTop: "1.45em" }}>
                Besten Dank f??r die tolle Arbeit, welche das ganze Team
                geleistet hat. Wir sind gl??cklich. Super Arbeit!
              </Paragraph>
              <Paragraph>
                Wir waren erstaunt ??ber die Pr??zision der Bauteile und die
                perfekten Anschl??sse ans bestehende Haus. Leite bitte diesen
                Dank an deine Leute weiter. Gerne werden wir euch
                weiterempfehlen.
              </Paragraph>
              <svg
                width="22px"
                height="20px"
                viewBox="0 0 22 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  fill-opacity="0.424142264"
                  font-family="AmericanTypewriter-Bold, American Typewriter"
                  font-size="45"
                  font-weight="bold"
                >
                  <g
                    id="Wohlgensinger---Landing-Page"
                    transform="translate(-709.000000, -5180.000000)"
                    fill="#2E2015"
                  >
                    <text id="???">
                      <tspan x="707" y="5211">
                        ???
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
              <Paragraph style={{ paddingTop: "1.45em" }}>Daniel</Paragraph>
            </InsideTest>
          </TestamonialContainer>
          <TestamonialContainer>
            <InsideTest>
              <svg
                width="22px"
                height="20px"
                viewBox="0 0 22 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  fill-opacity="0.424142264"
                  font-family="AmericanTypewriter-Bold, American Typewriter"
                  font-size="45"
                  font-weight="bold"
                >
                  <g
                    id="Wohlgensinger---Landing-Page"
                    transform="translate(-706.000000, -4635.000000)"
                    fill="#2E2015"
                  >
                    <text id="???">
                      <tspan x="704" y="4666">
                        ???
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
              <Paragraph style={{ paddingTop: "1.45em" }}>
                Simon hat bei meinem Auftrag ganze Arbeit geleistet. Die
                Annahme, Beratung wie auch die Erledigung hat er kompetent und
                speditiv ??ber die B??hne gebracht. Ich kann ihn nur weiter
                empfehlen. Sobald ich wieder einen Schreiner ben??tige, werde ich
                mich sehr gerne wieder an ihn wenden.
              </Paragraph>
              <svg
                width="22px"
                height="20px"
                viewBox="0 0 22 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  fill-opacity="0.424142264"
                  font-family="AmericanTypewriter-Bold, American Typewriter"
                  font-size="45"
                  font-weight="bold"
                >
                  <g
                    id="Wohlgensinger---Landing-Page"
                    transform="translate(-709.000000, -5180.000000)"
                    fill="#2E2015"
                  >
                    <text id="???">
                      <tspan x="707" y="5211">
                        ???
                      </tspan>
                    </text>
                  </g>
                </g>
              </svg>
              <Paragraph style={{ paddingTop: "1.45em" }}>Noldi</Paragraph>
            </InsideTest>
          </TestamonialContainer>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          ref={c => (this.slider = c)}
          {...settings}
        >
          <div key={1}>
            <Img
              imgStyle={{ padding: "2em" }}
              fluid={this.props.data.centerslide1.childImageSharp.fluid}
            />
          </div>
          <div key={2}>
            <Img
              imgStyle={{ padding: "2em" }}
              fluid={this.props.data.centerslide2.childImageSharp.fluid}
            />
          </div>
          <div key={3}>
            <Img
              imgStyle={{ padding: "2em" }}
              fluid={this.props.data.centerslide3.childImageSharp.fluid}
            />
          </div>
          <div key={4}>
            <Img
              imgStyle={{ padding: "2em" }}
              fluid={this.props.data.centerslide4.childImageSharp.fluid}
            />
          </div>
        </Slider>
        <ButtonsLeft>
          <BoxPrevious onClick={this.previous}>
            <svg width="28px" height="23px" viewBox="0 0 28 23" version="1.1">
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Wohlgensinger---Landing-Page"
                  transform="translate(-209.000000, -1215.000000)"
                  fill="#FFFFFF"
                >
                  <g
                    id="Group-8"
                    transform="translate(187.000000, 1191.000000)"
                  >
                    <path
                      d="M31.1337445,24.3459193 C31.528477,23.8846936 32.1499139,23.8846936 32.5446463,24.3459193 C32.9260432,24.7915632 32.9260432,25.5332641 32.5446463,25.9778691 L25.3905651,34.337067 L48.9980552,34.337067 C49.5483692,34.337067 50,34.848155 50,35.4911702 C50,36.1341854 49.5483692,36.6618942 48.9980552,36.6618942 L25.3905651,36.6618942 L32.5446463,45.0055101 C32.9260432,45.4667359 32.9260432,46.2094756 32.5446463,46.6540807 C32.1499139,47.1153064 31.528477,47.1153064 31.1337445,46.6540807 L22.2860477,36.3159749 C21.9046508,35.8703311 21.9046508,35.1286301 22.2860477,34.6840251 L31.1337445,24.3459193 Z"
                      id="Fill-1"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </BoxPrevious>
        </ButtonsLeft>
        <ButtonsRight>
          <BoxNext onClick={this.next}>
            <svg width="28px" height="23px" viewBox="0 0 28 23" version="1.1">
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Wohlgensinger---Landing-Page"
                  transform="translate(-276.000000, -1215.000000)"
                  fill="#FFFFFF"
                >
                  <g
                    id="Group-8"
                    transform="translate(187.000000, 1191.000000)"
                  >
                    <path
                      d="M98.1337445,24.3459193 C98.528477,23.8846936 99.1499139,23.8846936 99.5446463,24.3459193 C99.9260432,24.7915632 99.9260432,25.5332641 99.5446463,25.9778691 L92.3905651,34.337067 L115.998055,34.337067 C116.548369,34.337067 117,34.848155 117,35.4911702 C117,36.1341854 116.548369,36.6618942 115.998055,36.6618942 L92.3905651,36.6618942 L99.5446463,45.0055101 C99.9260432,45.4667359 99.9260432,46.2094756 99.5446463,46.6540807 C99.1499139,47.1153064 98.528477,47.1153064 98.1337445,46.6540807 L89.2860477,36.3159749 C88.9046508,35.8703311 88.9046508,35.1286301 89.2860477,34.6840251 L98.1337445,24.3459193 Z"
                      id="Fill-1"
                      transform="translate(103.000000, 35.500000) scale(-1, 1) translate(-103.000000, -35.500000) "
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </BoxNext>
        </ButtonsRight>
      </Container>
    )
  }
}
