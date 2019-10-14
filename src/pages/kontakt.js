import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout/layout-s"
import SEO from "../components/seo"

const Heading = styled.h1`
  font-family: futura;

  margin: 1.5em 0 1em 0;
`
const Text = styled.div`
  max-width: 580px;
  margin: 0 auto 7em auto;
  text-align: center;
`
const Phone = styled.span`
  font-family: roboto;
  font-weight: bold;
  font-size: 1.25em;
`
const Hours = styled.span`
  color: #888686;
  font-family: roboto;
  display: block;
  font-size: 0.75em;
`
const Buttons = styled.div`
  margin-top: 1.45em;
  margin-bottom: 2em;
  display: flex;
  justify-content: space-around;
`
const Meeting = styled.h2`
  font-family: futura;
  font-weight: bold;
  font-size: 1.2em;
  line-height: 1.5em;
  margin-top: 2em;
  margin-bottom: 1.45em;
  @media (max-width: 600px) {
    padding: 0 1em;
  }
`

const Kontakt = ({ data }) => (
  <Layout data={data.landingSmall} text="">
    <SEO title="Holzbau & Schreinerei | Kontakt" description="Melden Sie sich jetzt persönlich bei uns –wir beraten Sie gerne unverbindlich zu allen Themen rund um Holz." />
    <Text>
      <Heading>Kontakt</Heading>
      <Phone>
        <a href="tel:+410719831520">+41 (0)71 983 15 20</a>
      </Phone>
      <Hours>Montag bis Freitag von 08:00 bis 17:00</Hours>
      <Buttons>
        <a href="tel:+410719831520">
          <button className="call">
            <svg
              className="call-left"
              width="18px"
              height="29px"
              viewBox="0 0 18 29"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter
                  x="-70.6%"
                  y="-70.6%"
                  width="241.2%"
                  height="241.2%"
                  filterUnits="objectBoundingBox"
                  id="filter-1"
                >
                  <feOffset
                    dx="0"
                    dy="2"
                    in="SourceAlpha"
                    result="shadowOffsetOuter1"
                  ></feOffset>
                  <feGaussianBlur
                    stdDeviation="2"
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                  ></feGaussianBlur>
                  <feColorMatrix
                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
                    type="matrix"
                    in="shadowBlurOuter1"
                    result="shadowMatrixOuter1"
                  ></feColorMatrix>
                  <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
              </defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Contact"
                  transform="translate(-469.000000, -754.000000)"
                  fill="#FFFFFF"
                >
                  <g
                    id="Group-4"
                    filter="url(#filter-1)"
                    transform="translate(478.364237, 766.653840) scale(-1, -1) rotate(45.000000) translate(-478.364237, -766.653840) translate(469.864237, 758.153840)"
                  >
                    <path
                      d="M1.49206575,7.97242089 C3.51037392,8.29310956 5.3437989,9.19686855 6.80745749,10.5816605 C8.27111609,11.9664525 9.21864245,13.7010867 9.56529843,15.610642 C9.65003656,16.091675 10.0891341,16.4269404 10.5898594,16.4269404 C10.6514872,16.4269404 10.7054114,16.4196521 10.7670392,16.4123637 C11.3370957,16.3249031 11.7145655,15.8147166 11.6221239,15.2753766 C11.2061368,12.9649604 10.0506168,10.8586189 8.28652302,9.18958017 C6.52242924,7.52053924 4.29612748,6.42728456 1.85412866,6.0337121 C1.28407216,5.94625155 0.752532983,6.30338212 0.652387922,6.83543378 C0.55224286,7.36748544 0.922009242,7.88496034 1.49206575,7.97242089 Z"
                      id="Fill-2"
                    ></path>
                    <path
                      d="M16.9498099,14.395976 C16.3160379,10.8781255 14.5642633,7.67701644 11.8725122,5.12960751 C9.18076107,2.58219858 5.79826957,0.924361021 2.08108945,0.324574263 C1.56125391,0.236964961 1.06990252,0.573923814 0.977329065,1.06588374 C0.891876649,1.56458284 1.24080735,2.02958606 1.76776392,2.11719536 C5.0861661,2.64959035 8.11260586,4.13894848 10.5195156,6.41005115 C12.9264253,8.687893 14.493053,11.5520432 15.0556147,14.6924998 C15.1339461,15.1372854 15.5398451,15.4472876 16.0027123,15.4472876 C16.0596806,15.4472876 16.1095279,15.4405484 16.1664961,15.4338092 C16.6863317,15.3596783 17.0423834,14.8879359 16.9498099,14.395976 Z"
                      id="Fill-3"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            Jetzt anrufen
            <svg
              className="call-right"
              width="18px"
              height="29px"
              viewBox="0 0 18 29"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter
                  x="-70.6%"
                  y="-70.6%"
                  width="241.2%"
                  height="241.2%"
                  filterUnits="objectBoundingBox"
                  id="filter-1"
                >
                  <feOffset
                    dx="0"
                    dy="2"
                    in="SourceAlpha"
                    result="shadowOffsetOuter1"
                  ></feOffset>
                  <feGaussianBlur
                    stdDeviation="2"
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                  ></feGaussianBlur>
                  <feColorMatrix
                    values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
                    type="matrix"
                    in="shadowBlurOuter1"
                    result="shadowMatrixOuter1"
                  ></feColorMatrix>
                  <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
                </filter>
              </defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Contact"
                  transform="translate(-608.000000, -754.000000)"
                  fill="#FFFFFF"
                >
                  <g
                    id="Group-4"
                    filter="url(#filter-1)"
                    transform="translate(616.510132, 766.299674) scale(1, -1) rotate(45.000000) translate(-616.510132, -766.299674) translate(608.010132, 757.799674)"
                  >
                    <path
                      d="M1.49206575,7.97242089 C3.51037392,8.29310956 5.3437989,9.19686855 6.80745749,10.5816605 C8.27111609,11.9664525 9.21864245,13.7010867 9.56529843,15.610642 C9.65003656,16.091675 10.0891341,16.4269404 10.5898594,16.4269404 C10.6514872,16.4269404 10.7054114,16.4196521 10.7670392,16.4123637 C11.3370957,16.3249031 11.7145655,15.8147166 11.6221239,15.2753766 C11.2061368,12.9649604 10.0506168,10.8586189 8.28652302,9.18958017 C6.52242924,7.52053924 4.29612748,6.42728456 1.85412866,6.0337121 C1.28407216,5.94625155 0.752532983,6.30338212 0.652387922,6.83543378 C0.55224286,7.36748544 0.922009242,7.88496034 1.49206575,7.97242089 Z"
                      id="Fill-2"
                    ></path>
                    <path
                      d="M16.9498099,14.395976 C16.3160379,10.8781255 14.5642633,7.67701644 11.8725122,5.12960751 C9.18076107,2.58219858 5.79826957,0.924361021 2.08108945,0.324574263 C1.56125391,0.236964961 1.06990252,0.573923814 0.977329065,1.06588374 C0.891876649,1.56458284 1.24080735,2.02958606 1.76776392,2.11719536 C5.0861661,2.64959035 8.11260586,4.13894848 10.5195156,6.41005115 C12.9264253,8.687893 14.493053,11.5520432 15.0556147,14.6924998 C15.1339461,15.1372854 15.5398451,15.4472876 16.0027123,15.4472876 C16.0596806,15.4472876 16.1095279,15.4405484 16.1664961,15.4338092 C16.6863317,15.3596783 17.0423834,14.8879359 16.9498099,14.395976 Z"
                      id="Fill-3"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </a>
        <button className="schedule">
          <svg
            className="schedulephone"
            width="27px"
            height="26px"
            viewBox="0 0 27 26"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter
                x="-63.2%"
                y="-66.7%"
                width="226.3%"
                height="233.3%"
                filterUnits="objectBoundingBox"
                id="filter-1"
              >
                <feOffset
                  dx="0"
                  dy="2"
                  in="SourceAlpha"
                  result="shadowOffsetOuter1"
                ></feOffset>
                <feGaussianBlur
                  stdDeviation="2"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                ></feGaussianBlur>
                <feColorMatrix
                  values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.5 0"
                  type="matrix"
                  in="shadowBlurOuter1"
                  result="shadowMatrixOuter1"
                ></feColorMatrix>
                <feMerge>
                  <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Contact"
                transform="translate(-763.000000, -755.000000)"
                fill="#FFFFFF"
              >
                <g
                  id="Group-4"
                  filter="url(#filter-1)"
                  transform="translate(767.000000, 757.000000)"
                >
                  <path
                    d="M15.1526356,11.1124788 C14.7597561,10.7266553 14.2858704,10.5203735 13.7836326,10.5203735 C13.2854451,10.5203735 12.8075091,10.7228353 12.3984283,11.1086587 C12.3984283,11.1086587 10.9079161,12.2088285 10.8066585,12.1591681 C10.6608475,12.0904075 10.5231371,12.0254669 10.4056783,11.9567063 C9.20678802,11.2385399 8.11725599,10.3026316 7.07227733,9.09168081 C6.56598921,8.48811545 6.2257636,7.98005093 5.978695,7.46434635 C6.31082,7.1778438 6.61864317,6.87988115 6.91836574,6.59337861 C7.03177428,6.48641766 7.14518281,6.37563667 7.25859135,6.26867572 C8.10915538,5.46646859 8.10915538,4.42741935 7.25859135,3.62521222 C7.25859135,3.62521222 5.8976889,2.34168081 5.77617975,2.21943973 C5.53316146,1.98259762 5.27799225,1.73811545 5.01472243,1.50891341 C4.62184285,1.14219015 4.15200748,0.947368421 3.65789053,0.947368421 C3.16375333,0.947368421 2.68581735,1.14219015 2.28078686,1.50891341 C2.27673655,1.51273345 2.27673655,1.51273345 2.27268625,1.51655348 L0.895582573,2.82682513 C0.377143544,3.31578947 0.0814712843,3.91171477 0.0166664056,4.60314092 C-0.0805409125,5.71859083 0.267785311,6.75764007 0.535105435,7.43760611 C1.19125483,9.10696095 2.17142862,10.6540747 3.6335887,12.3119694 C5.407602,14.3098472 7.5421127,15.8875212 9.98039626,16.9991511 C10.9119664,17.4155348 12.15541,17.9083192 13.5446646,17.9923599 C13.629721,17.99618 13.7188277,18 13.7998338,18 C14.7354542,18 15.5212134,17.6829372 16.1368597,17.0526316 C16.14091,17.0449915 16.1490107,17.0411715 16.153061,17.0335314 C16.3636768,16.7928693 16.6066951,16.5751273 16.8618643,16.3421053 C17.0360274,16.1854839 17.2142408,16.0212224 17.388404,15.8493209 C17.7893841,15.4558574 18,14.9974533 18,14.5275891 C18,14.0539049 17.7853338,13.5993209 17.376253,13.2173175 L15.1526356,11.1124788 Z"
                    id="Fill-1"
                  ></path>
                  <path
                    d="M10.4669237,3.90826695 C11.5678191,4.08343432 12.5678691,4.57708781 13.3662283,5.33349237 C14.1645875,6.08989692 14.6814201,7.03739315 14.8705052,8.08043521 C14.916726,8.34318627 15.1562337,8.52631579 15.4293566,8.52631579 C15.4629718,8.52631579 15.492385,8.52233471 15.5260001,8.51835364 C15.83694,8.47058072 16.0428327,8.19190536 15.99241,7.89730569 C15.7655079,6.63530441 15.1352243,5.48477328 14.1729913,4.57310674 C13.2107583,3.6614402 11.9964119,3.06427871 10.6644126,2.84930057 C10.3534726,2.80152766 10.0635422,2.99660041 10.0089176,3.287219 C9.95429303,3.57783759 10.1559838,3.86049403 10.4669237,3.90826695 Z"
                    id="Fill-2"
                  ></path>
                  <path
                    d="M18.9917559,7.93412041 C18.6352591,5.95254355 17.6498859,4.14938454 16.1357759,2.71444957 C14.6216659,1.27951461 12.7190145,0.345668044 10.6281006,0.0078129859 C10.3356931,-0.0415366293 10.059308,0.148269583 10.0072354,0.425386653 C9.95916844,0.706299847 10.155442,0.96823242 10.451855,1.01758203 C12.3184563,1.31747585 14.0208286,2.15641931 15.3747153,3.43571318 C16.7286021,4.71880317 17.6098301,6.33215598 17.9262711,8.10114987 C17.9703325,8.35169407 18.1986507,8.52631579 18.4590135,8.52631579 C18.4910582,8.52631579 18.5190972,8.52251967 18.5511419,8.51872354 C18.8435494,8.47696617 19.0438285,8.21123748 18.9917559,7.93412041 Z"
                    id="Fill-3"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          Rückruf vereinbaren
        </button>
      </Buttons>
      <svg
        width="578px"
        height="4px"
        viewBox="0 0 578 4"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient
            cx="50%"
            cy="0%"
            fx="50%"
            fy="0%"
            r="8231.81018%"
            gradientTransform="translate(0.500000,0.000000),scale(0.006920,1.000000),rotate(4.946195),translate(-0.500000,-0.000000)"
            id="radialGradient-1"
          >
            <stop stop-color="#D8D8D8" offset="0%"></stop>
            <stop
              stop-color="#EEEEEE"
              stop-opacity="0.127321897"
              offset="100%"
            ></stop>
          </radialGradient>
        </defs>
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Contact"
            transform="translate(-418.000000, -890.000000)"
            fill="url(#radialGradient-1)"
          >
            <rect id="Rectangle" x="418" y="890" width="578" height="4"></rect>
          </g>
        </g>
      </svg>
      <Meeting>
        Sie möchten lieber persönlich mit uns sprechen? Dann vereinbaren wir
        gerne ein Treffen mit Ihnen.
      </Meeting>
      <Buttons>
        <button className="meeting">Meeting vereinbaren</button>
      </Buttons>
    </Text>
  </Layout>
)

export default Kontakt

export const query = graphql`
  query {
    landingSmall: file(relativePath: { eq: "kontakt.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
