/** @jsx jsx */
import { jsx } from "theme-ui";

const LeftColumn = ({ children }) => {
  return (
    <div
      sx={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      {children}
    </div>
  );
};

export default LeftColumn;
