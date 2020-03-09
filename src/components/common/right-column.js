/** @jsx jsx */
import { jsx } from "theme-ui";

const RightColumn = ({ children }) => {
  return (
    <span
      sx={{
        // gridArea: 'description',
        display: "flex",
        flexDirection: "column"
      }}
    >
      {children}
    </span>
  );
};

export default RightColumn;
