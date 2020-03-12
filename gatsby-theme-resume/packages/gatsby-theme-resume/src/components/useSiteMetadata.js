import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query ResumeSiteMetaData {
        site {
          siteMetadata {
            showSummary
            showReference
            website
            githubUsername
            email
            twitterUsername
            yourName
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
