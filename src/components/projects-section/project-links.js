/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const ProjectLinks = ({ github, npm, live, name }) => {
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
      <div
        sx={{
          display: "flex"
        }}
      >
        {live ? (
          <>
            View
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
              &nbsp;{name}
            </a>
          </>
        ) : null}
      </div>
      <div
        sx={{
          display: "flex"
        }}
      >
        View
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
          &nbsp;{name}&nbsp;
        </a>
        source
      </div>
      <div
        sx={{
          display: "flex"
        }}
      >
        {npm ? (
          <>
            View
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
              &nbsp;{name}&nbsp;
            </a>
            npm package
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectLinks;
