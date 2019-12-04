require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Wohlgensinger AG | `,
    description: ` | Schweiz`,
    siteUrl: `https://wohlgensinger.ch`,
    author: `Wohlgensinger AG`,
    headline: `Holzbau & Schreinerei Schweiz`,
    siteLanguage: `de_CH`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `wh-website`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `wohlgensinger-ag`,
        short_name: `Holzbau`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon.png`// This path is relative to the root of the site.
        include_favicon: false,
        legacy: false,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto:400,700"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
