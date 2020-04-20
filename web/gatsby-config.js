require("dotenv").config()

const path = require("path")
const blocksToText = require("./utils/blocksToText.js")

module.exports = {
  siteMetadata: {
    title: `Energy Smart`,
    author: `@stelly.dev`,
    siteUrl: `https://energysmartyes.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-recaptcha`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
      },
    },
    "gatsby-source-sanity-transform-images",
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
    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-KBWWQ75`,
        defaultDataLayer: { platform: `gatsby` },
      },
    },

    // {
    //   resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
    //   options: {
    //     // Fields to index
    //     fields: [`title`, `content`],
    //     // How to resolve each fields value for a supported node type
    //     resolvers: {

    //     }
    //   }
    // }
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `pages`,
        engine: `flexsearch`,
        engineOptions: `speed`,
        query: `
        {
          allSanityPage {
              nodes {
                id 
                pageName
                _rawLocalePage(resolveReferences: {maxDepth: 20})
              }
            }
        }
        `,
        ref: `id`,
        index: [`title`, `es`, `en`],
        store: [`id`, `title`],
        normalizer: ({ data }) => {
          const defaults = { es: [], en: [] }
          return data.allSanityPage.nodes.map(sanityPage => {
            const translations = {}
            if (sanityPage._rawLocalePage && sanityPage._rawLocalePage.en) {
              translations.en = blocksToText(
                sanityPage._rawLocalePage.en.content
              )
            }
            if (sanityPage._rawLocalePage && sanityPage._rawLocalePage.es) {
              translations.es = blocksToText(
                sanityPage._rawLocalePage.es.content
              )
            }
            return {
              id: sanityPage.id,
              title: sanityPage.pageName,
              es: translations.es || defaults.es,
              en: translations.en || defaults.en,
            }
          })
        },
      },
    },
    {
      resolve: `gatsby-plugin-netlify`, 
      options: {
        headers: {
          "/*": [
            "X-Frame-Options: 'DENY'", 
            "X-XSS-Protection: '1; mode=block'", 
            "Access-Control-Allow-Origin: '*'", 
            "cache-control: ```max-age: 0 no-cache no-store must-revalidate```"
          ]
        }, 
        allPageHeaders: [], 
        mergeSecurityHeaders: true, 
        mergeLinkHeaders: true, 
        mergeCachingHeaders: true, 
        transformHeaders: (headers, path) => headers, 
        generateMatchPathRewrites: true
      }

    }
  ],
}
