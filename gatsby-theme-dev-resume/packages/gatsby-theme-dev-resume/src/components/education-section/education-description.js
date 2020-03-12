/** @jsx jsx */
import { jsx } from "theme-ui";

const EducationDescription = ({ courses }) => {
  const courseStack = courses.join(", ");
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
        <span
          sx={{
            fontFamily: "heading",
            fontWeight: 600,
            fontStyle: "italic",
            color: "secondaryDarker"
          }}
        >
          {courseStack}
        </span>
      </li>
    </ul>
  );
};

export default EducationDescription;
