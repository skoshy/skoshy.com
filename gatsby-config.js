module.exports = {
  siteMetadata: {
    title: 'Stefan Koshy',
    description: 'Developer in NYC',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};
