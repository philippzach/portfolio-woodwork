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
        icon: `static/favicon.png`, // This path is relative to the root of the site.
        icons: [
          {
            src: "favicons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "favicons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "favicons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "favicons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "favicons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "favicons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "favicons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "favicons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TG8C33H",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        //defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        //dataLayerName: "YOUR_DATA_LAYER_NAME",
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
