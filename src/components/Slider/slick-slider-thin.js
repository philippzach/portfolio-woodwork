import React, { Component } from "react"
import Slider from "react-slick"
import styled from "@emotion/styled"
import Pic1 from "../../images/testhouse1.jpg"
import Pic2 from "../../images/testhouse2.jpg"
import Pic3 from "../../images/testhouse3.jpg"
import Pic4 from "../../images/testhouse4.jpg"
import { Helmet } from "react-helmet"
import Left from "../../images/arrowleft.svg"
import Right from "../../images/arrowright.svg"

const Buttons = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 50px 50px;
  grid-template-rows: 50px;
  bottom: 7px;
  left: 15%;
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
  height: 100% !important;
`

export default class Responsive extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div key={1}>
            <img src={Pic1} />
          </div>
          <div key={2}>
            <img src={Pic2} />
          </div>
          <div key={3}>
            <img src={Pic3} />
          </div>
          <div key={4}>
            <img src={Pic4} />
          </div>
        </Slider>
        <Buttons>
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
        </Buttons>
      </Container>
    )
  }
}
