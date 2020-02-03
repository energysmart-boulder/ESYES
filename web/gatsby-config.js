require("dotenv").config()

const path = require("path")

/* TODO 
  Determine if we need to use 
  gatsby plugin sharp or gatsby transformer sharp

  gatsby source filesystem?

  gatsby plugin manifest?

*/

module.exports = {
  siteMetadata: {
    title: `Energy Smart`,
    author: `@stelly.dev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
