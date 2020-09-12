module.exports = {
  siteMetadata: {
    title: `Artcraft Ink`,
    description: `artcraftink.com`,
    author: `@gpeshans`,
    address: '47 Marshal Tito Berovo',
    country: 'North Macedonia',
    phone: '+389 78 933 454',
    email: 'bubotomic@gmail.com',
    instagram: 'https://www.instagram.com/artcraftink',
    facebook: 'https://www.facebook.com/artcraftink',
    artistName: 'Ljubomir Tomikj',
    artistBio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Source+Sans+Pro:200,300,400`, `Montserrat:200,300`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/images/svg`,
        },
      },
    },
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
        name: `artcraftink.com`,
        short_name: `artcraftink`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo/artcraftink-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  // used by github pages for the deployment path prefix
  pathPrefix: '/artcraftink',
};
