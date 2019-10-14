import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout/layout-s"
import SEO from "../components/seo"
import BlogGrid from "../components/Blog/bloggrid"

const Container = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding-bottom: 4em;
`
const ContainerSmall = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  @media (max-width: 64em) {
    padding: 0 3em;
  }
`
const Heading = styled.h2`
  font-family: futura;
  font-weight: 300;
  line-height: 1.5em;
  padding-top: 4em;
`

const Blog = ({ data }) => (
  <Layout data={data.landingSmall} text="Blog/News">
    <SEO title="Holzbau & Schreinerei |News" description="Wenn Sie Informationen rund um den Holzbau oder Neuigkeiten aus unserer Schreinerei suchen, sind Sie hier genau richtig." />

    <Container>
      <ContainerSmall>
        <Heading>
          Wenn Sie Informationen rund um den Holzbau oder Neuigkeiten aus
          unserer Schreinerei suchen, sind Sie hier richtig.
        </Heading>
      </ContainerSmall>
      <svg
        width="1198px"
        height="4px"
        viewBox="0 0 1198 4"
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
            id="Blog/News"
            transform="translate(-109.000000, -843.000000)"
            fill="#57BC6E"
          >
            <rect id="Rectangle" x="109" y="843" width="1198" height="4"></rect>
          </g>
        </g>
      </svg>
      <ContainerSmall>
        <BlogGrid posts={data.posts.edges} />
      </ContainerSmall>

      <svg
        width="1198px"
        height="4px"
        viewBox="0 0 1198 4"
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
            id="Blog/News"
            transform="translate(-109.000000, -843.000000)"
            fill="#57BC6E"
          >
            <rect id="Rectangle" x="109" y="843" width="1198" height="4"></rect>
          </g>
        </g>
      </svg>
    </Container>
  </Layout>
)

export default Blog

export const query = graphql`
  query {
    landingSmall: file(relativePath: { eq: "blog.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#ffff", color: "#4f52" }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    posts: allPrismicPost(sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
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
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            author {
              text
            }
            date
            description
          }
        }
      }
    }
  }
`
