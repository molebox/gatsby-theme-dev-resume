/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const Skill = ({ name, keywords }) => {
  return (
    <div
      sx={{
        position: "relative"
      }}
    >
      <p
        sx={{
          fontFamily: "heading",
          fontWeight: 700,
          fontSize: "1.1em",
          margin: "0.5em auto"
        }}
      >
        {name}
      </p>
      <>
        {keywords.map((skill, index) => (
          <p
            key={index + skill}
            sx={{
              margin: "0.2em auto",
              fontSize: "0.95em"
            }}
          >
            {skill}
          </p>
        ))}
      </>
    </div>
  );
};

export default Skill;
