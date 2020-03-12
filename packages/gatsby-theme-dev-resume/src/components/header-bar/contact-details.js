/** @jsx jsx */
import { jsx } from "theme-ui";
import { useSiteMetadata } from './../useSiteMetadata';

const ContactDetails = () => {
  const {website, githubUsername, email, twitterUsername} = useSiteMetadata();

  const websiteString = website.replace('https://', '');
  return (
    <ul
      sx={{
        listStyleType: "none",
        textAlign: "right",
        color: "text"
      }}
    >
      <li>
        <a
          sx={{
            textDecoration: "none",
            color: "accent",
            ":hover": {
              color: "headerText"
            }
          }}
          href={website}
        >
          {websiteString}
        </a>
      </li>
      <li>
        <a
          sx={{
            textDecoration: "none",
            color: "accent",
            ":hover": {
              color: "headerText"
            }
          }}
          href={`https://github.com/${githubUsername}`}
        >
          github.com/{githubUsername}
        </a>
      </li>
      <li>
        <a
          sx={{
            textDecoration: "none",
            color: "accent",
            ":hover": {
              color: "headerText"
            }
          }}
          href={`mailto:${email}`}
        >
          {email}
        </a>
      </li>
      <li>
        <a
          sx={{
            textDecoration: "none",
            color: "accent",
            ":hover": {
              color: "headerText"
            }
          }}
          href={`https://twitter.com/${twitterUsername}`}
        >
          @{twitterUsername}
        </a>
      </li>
    </ul>
  );
};

export default ContactDetails;
