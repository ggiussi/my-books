module.exports = {
  siteMetadata: {
    title: `YourBooks`,
    description: `List your favorite books`,
    author: `@gatsbyjs`,
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `books`,
        path: `${__dirname}/src/data/books`,
      },
    },    
    'gatsby-transformer-json'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    //{
    //  resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
    //  options: {
    //    develop: true, // Activates purging in npm run develop
    //    purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
    //  },
    //},
    //'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
