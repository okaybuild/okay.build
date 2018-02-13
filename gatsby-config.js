module.exports = {
  siteMetadata: {
    title: 'open.build',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/docs`,
        name: 'docs',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'blog',
      },
    },
    `gatsby-transformer-remark`,
  ],
};
