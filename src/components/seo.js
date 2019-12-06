/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          buildTime
          siteMetadata {
            siteUrl
            headline
            title
            description
            author
            siteLanguage
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    url: "https://wohlgensinger.ch",
    description: "Holzbau & Schreinerei",
    name: "Wohlgensinger AG",
    telephone: "+41719831520",
    email: "info@wohlgensinger.ch",
    address: {
      streetAddress: "Aufeld 10",
      addressLocality: "Mosnang",
      postalCode: "9607",
      addressCountry: "Switzerland",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "82",
    },
    priceRange: "$$",
    image: "https://www.wohlgensinger.ch/wohlgensinger.jpg",
  }

  return (
    <Helmet
      lang="de"
      title={title}
      titleTemplate={`${site.siteMetadata.title} %s | Holzbau & Schreinerei | Schweiz`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebPage)}
      </script>
      <link rel="icon" type="image/png" href="https://www.wohlgensinger.ch/favicon.png" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
