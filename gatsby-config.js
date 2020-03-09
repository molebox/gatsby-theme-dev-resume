module.exports = {
    siteMetadata: {
      siteName: 'richardhaines.dev',
      siteUrl: 'https://richardhaines.dev',
    },
      plugins: [
          {
              resolve: 'gatsby-plugin-google-fonts',
              options: {
                fonts: [
                  'Muli',
                  'Open Sans',
                  'source sans pro\:300,400,400i,700' 
                ]
              }
          },
          'gatsby-transformer-json',
          {
              resolve: 'gatsby-source-filesystem',
              options: {
                path: 'resume',
                name: 'resume'
              },
          },
        'gatsby-plugin-theme-ui'
  
      ]
  }