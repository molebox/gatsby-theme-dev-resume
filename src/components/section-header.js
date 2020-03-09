/** @jsx jsx */
import { jsx } from "theme-ui";

const SectionHeader = ({ children }) => {
  return (
    <span
      sx={{
        borderBottom: "2px solid",
        fontSize: "1em",
        textTransform: "uppercase",
        color: "accent",
        marginBottom: "-5px",
        fontFamily: "heading",
        fontWeight: 700
      }}
    >
      {children}
    </span>
  );
};

export default SectionHeader;
