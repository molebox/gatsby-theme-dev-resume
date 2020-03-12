/** @jsx jsx */
import { jsx } from "theme-ui";

const ReferenceText = ({ reference }) => {
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
        {reference}
      </li>
    </ul>
  );
};

export default ReferenceText;