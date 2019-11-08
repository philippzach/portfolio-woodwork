import React from "react"
import { graphql } from "gatsby"
import Nav from "../components/layout/nav/navigation"
import Footer from "../components/layout/footer"

//import Seo from "../components/seo-article"

import Img from "gatsby-image"
import styled from "@emotion/styled"
import ProgressBar from "react-scroll-progress-bar"
import SliceZone from "../components/SliceZone"

import "./post.css"

const Container = styled.div`
  max-width: 1050px;
  margin: 0 auto;
`

const ImageContainer = styled.header`
  background: rgb(249, 241, 235);

  margin: 0;
  box-shadow: inset 0px 30px 106px -54px rgba(0, 0, 0, 0.62);
  text-align: center;

  @media (min-width: 600px) {
    height: 80vh;
    width: 100vw;
  }
`
const Title = styled.h1`
  font-family: "Futura-Bold";
  font-size: 5vh;
  padding-top: 1em;
  @media (min-width: 600px) {
    font-size: 7vh;
  }
`
const Description = styled.p`
  line-height: 1.5em;
`

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost
  const DateString = new Date(data.date)
  let options = { year: "numeric", month: "long", day: "numeric" }
  const PubDate = DateString.toLocaleDateString("de-AT", options)
  return (
    <>
      <Nav />
      <ProgressBar height="10px" bgcolor="rgb(249,241,235)" />
      <article>
        <ImageContainer>
          <Img
            className="postimage"
            fluid={data.headerimage.localFile.childImageSharp.fluid}
            alt={data.headerimage.alt}
          />
          <div className="headlines">
            <div>
              <Title>{data.title.text}</Title>
              <p>
                {PubDate} · von <b>{data.author.text}</b>
              </p>
              <Description>{data.description}</Description>
            </div>
          </div>
        </ImageContainer>

        <Container>
          <React.Fragment>
            <SliceZone allSlices={data.body} />
          </React.Fragment>
        </Container>
        <Footer />
      </article>
    </>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
          html
        }
        headerimage {
          url
          alt
          localFile {
            childImageSharp {
              fluid(
                maxHeight: 800
                traceSVG: { background: "#fff", color: "rgb(249, 241, 235)" }
              ) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
        author {
          text
        }
        date
        description
        body {
          ... on PrismicPostBodyText {
            slice_type
            id
            primary {
              text {
                html
              }
            }
          }
          ... on PrismicPostBodyQuote {
            slice_type
            id
            primary {
              quote {
                html
                text
              }
            }
          }
          ... on PrismicPostBodyImage {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(
                      maxWidth: 1200
                      quality: 90
                      traceSVG: {
                        background: "#fff"
                        color: "rgb(249, 241, 235)"
                      }
                    ) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
