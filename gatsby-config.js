const dotenv = require('dotenv');

const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';
console.log(`Using environment config: '${activeEnv}'`);
dotenv.config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: `ArtCraft Ink`,
    siteUrl: 'https://www.artcraftink.com',
    description: `artcraftink.com`,
    keywords: ['tattoo', 'art', 'ink', 'tattoo studio', 'tattoo artist', 'black and white'],
    lang: 'en',
    author: `@gpeshans`,
    addressLine1: '47 Marshal Tito',
    addressLine2: 'Berovo, Macedonia',
    map: {
      apiKey: process.env.GOOGLE_MAPS_API_KEY,
      center: {
        lat: 41.709826,
        lng: 22.854816,
      },
      zoom: 16,
    },
    phone: '+389 78 933 454',
    email: 'studioartcraftink@gmail.com',
    instagram: 'https://www.instagram.com/artcraftink',
    facebook: 'https://www.facebook.com/artcraftink',
    artistName: 'Ljubomir Tomikj',
    artistBio: `I have been drawing for as long as I can remember and I have always loved creating art, learning new things about it and experimenting. I got into tattooing about 4 years ago. I consider it a really special form of art due to the connection between the artist and the client and the amazing level of trust that comes with it. My favorite style is blackwork and all other styles closely related to it. It's mainly a mix of linework, whipshading and dotwork. With each piece, I aspire to create something unique and I always try to do my best. Every tattoo is a unique experience for me. I love my work!`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Trispace:100,200,300`],
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        placeholder: `blurred`,
        backgroundColor: `transparent`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.artcraftink.com/',
        sitemap: 'https://www.artcraftink.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/', disallow: ['/thanks', '/404'] }],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/thanks`, `/404`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: ({ site }) => {
          //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
          return site.siteMetadata.siteUrl;
        },
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map((node) => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `weekly`,
              priority: 0.7,
            };
          }),
      },
    },
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
