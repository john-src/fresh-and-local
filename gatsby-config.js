module.exports = {
  pathPrefix: `/freshest`,
  siteMetadata: {
    title: `Fresh & Local Produce.`,
    description: `Find out what's fresh and local`,
    author: `@john-src`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fresh-and-local`,
        short_name: `f-y-l`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        // Icon from Freepik and FlatIron
        // https://www.flaticon.com/authors/freepik
        icon: `src/images/fruit-icon.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
