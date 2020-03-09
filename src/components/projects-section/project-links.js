/** @jsx jsx */
import { jsx } from "theme-ui";

const ProjectLinks = ({ github, npm, live }) => {
  return (
    <div
      sx={{
        fontFamily: "heading",
        fontSize: "0.95em",
        color: "text",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        marginTop: "1em",
        alignSelf: "flex-start"
      }}
    >
      {live ? (
        <a
          sx={{
            fontSize: ["0.8em", "1em", "1em"],
            color: "text",
            color: "secondaryDarker",
            fontWeight: 600,
            ":hover": {
              color: "accent"
            }
          }}
          href={live}
        >
          Site url: {live}
        </a>
      ) : null}

      <a
        sx={{
          fontSize: ["0.8em", "1em", "1em"],
          color: "text",
          color: "secondaryDarker",
          fontWeight: 600,
          ":hover": {
            color: "accent"
          }
        }}
        href={github}
      >
        Github: {github}
      </a>
      {npm ? (
        <a
          sx={{
            fontSize: ["0.8em", "1em", "1em"],
            color: "text",
            color: "secondaryDarker",
            fontWeight: 600,
            ":hover": {
              color: "accent"
            }
          }}
          href={npm}
        >
          NPM: {npm}
        </a>
      ) : null}
    </div>
  );
};

export default ProjectLinks;
