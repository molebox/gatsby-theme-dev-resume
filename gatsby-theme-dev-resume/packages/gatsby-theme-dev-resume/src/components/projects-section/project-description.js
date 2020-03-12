/** @jsx jsx */
import { jsx } from "theme-ui";

const ProjectDescription = ({ summary, stack }) => {
  const jobStack = stack.join(", ");
  return (
    <ul
      sx={{
        fontFamily: "heading",
        fontSize: "0.95em",
        color: "text",
        listStyleType: "none"
      }}
    >
      <li>
        {summary}
        <span
          sx={{
            fontFamily: "heading",
            fontWeight: 600,
            fontStyle: "italic",
            color: "secondaryDarker"
          }}
        >
          ({jobStack})
        </span>
      </li>
    </ul>
  );
};

export default ProjectDescription;
