# gatsby-theme-dev-resume

A Gatsby theme to easily create a resume which can be hosted on the internet and also saved or printed to PDF

Example live site - [gatsby-theme-dev-resume.netlify.com](https://gatsby-theme-resume.netlify.com)


Example: 

```js
module.exports = {
    plugins: [
        {
           resolve: 'gatsby-theme-dev-resume',
           options: {
               showSummary: true,
               showReference: true,
               website: 'https://richardhaines.dev',
               githubUsername: 'molebox',
               email: 'hello@richardhaines.dev',
               twitterUsername: 'studio_hungry',
               yourName: 'Richard Haines'
           }
        }
    ]
}
```

## Setup

To install run `yarn add gatsby-theme-dev-resume`. A resume folder containing the resume.json file will be created for you will some dummy data. Its important to not change any of the keys in the json file otherwise the site will break.

## Props

The theme supports the following props: 

| Name                         | Optional   | Type    | Default       |
|------------------------------|------------|---------|---------------|
| showSummary                  |   No       | boolean | None          |
| showReference                |   No       | boolean | None          |
| website                      |   No       | string  | None          |
| githubUsername               |   No       | string  | None          |
| twitterUsername              |   No       | string  | None          |
| email                        |   No       | string  | None          |
| yourName                     |   No       | string  | None          |


### Props Descriptions

- **showSummary**: Choose if you want to show your summary text at the top of the resume. If false then it wont be shown.
- **showReference**: Choose if you want to show your references text at the bottom of the resume. If false then it wont be shown
- **website**: Your personal website
- **githubUsername**: Your github username
- **twitterUsername**: Your Twitter username without the @
- **email**: Your contact email address
- **yourName**: Its your name silly!

## Built With

- [Gatsby](https://www.gatsbyjs.org/)
- [Theme-UI](https://theme-ui.com/)

## Authors

- **Rich Haines**

## License

This project is licensed under the MIT License