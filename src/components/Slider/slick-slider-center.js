import React, { Component } from "react"
import Slider from "react-slick"
import styled from "@emotion/styled"
import { jsx, css, cx } from "@emotion/core"
import Pic1 from "../../images/testcenter1.jpg"
import { Helmet } from "react-helmet"
import "./slider.css"

const ButtonsLeft = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 50px;
  grid-template-rows: 50px;
  top: 50%;
  left: 33%;
  margin-top: 25px;
  @media (max-width: 569px) {
    left: 10%;
  }
`
const ButtonsRight = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 50px;
  grid-template-rows: 50px;
  top: 50%;
  right: 33%;
  margin-top: 25px;
  @media (max-width: 569px) {
    right: 10%;
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
const Image = styled.img`
  @media (min-width: 1000px) {
    padding: 2em;
  }
  @media (min-width: 570px) and (max-width: 1000px) {
    padding: 1em;
  }
  @media (max-width: 569px) {
    padding: 1.5em;
  }
`
const TestamonialContainer = styled.div`
  background-color: white;
`
const InsideTest = styled.div`
  background-color: #fcf1e8;
  max-width: 90%;
  margin: 0 auto;
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
        <Helmet>
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Helmet>
        <h2 style={{ textAlign: "center" }}>Testimonial Slider</h2>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
          <TestamonialContainer>
            <InsideTest>
              <h3>1</h3>
            </InsideTest>
          </TestamonialContainer>
          <TestamonialContainer>
            <InsideTest>
              <h3>2</h3>
            </InsideTest>
          </TestamonialContainer>
          <TestamonialContainer>
            <InsideTest>
              <h3>3</h3>
            </InsideTest>
          </TestamonialContainer>
          <TestamonialContainer>
            <InsideTest>
              <h3>4</h3>
            </InsideTest>
          </TestamonialContainer>
          <TestamonialContainer>
            <InsideTest>
              <h3>5</h3>
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
            <Image src={Pic1} />
          </div>
          <div key={2}>
            <Image src={Pic1} />
          </div>
          <div key={3}>
            <Image src={Pic1} />
          </div>
          <div key={4}>
            <Image src={Pic1} />
          </div>
          <div key={5}>
            <Image src={Pic1} />
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