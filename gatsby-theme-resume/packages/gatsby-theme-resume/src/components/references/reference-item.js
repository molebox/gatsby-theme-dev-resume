/** @jsx jsx */
import { jsx } from "theme-ui";

const ReferenceItem = ({ children }) => {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "minmax(auto, 250px) 1fr",
        gridTemplateAreas: "title description",
        gap: "1em"
      }}
    >
      {children}
    </div>
  );
};

export default ReferenceItem;