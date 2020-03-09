/** @jsx jsx */
import { jsx } from "theme-ui";

const ContactDetails = () => {
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
          href="https://richardhaines.dev/"
        >
          richardhaines.dev
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
          href="https://github.com/molebox"
        >
          github.com/molebox
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
          href="mailto:hello@richardhaines.dev"
        >
          hello@richardhaines.dev
        </a>
      </li>
    </ul>
  );
};

export default ContactDetails;
