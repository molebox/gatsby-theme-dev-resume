/** @jsx jsx */
import { jsx } from "theme-ui";

const DateRange = ({ children }) => {
  return (
    <div
      sx={{
        fontFamily: "heading",
        fontSize: "0.7em",
        textTransform: "uppercase",
        color: "secondaryDarker",
        marginTop: "0.5em"
      }}
    >
      {children}
    </div>
  );
};

export default DateRange;
