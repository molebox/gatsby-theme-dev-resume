/** @jsx jsx */
import { jsx } from "theme-ui";

const ExperienceItem = ({ children }) => {
  return (
    <div
      sx={{
        display: "grid",
        gridTemplateColumns: "minmax(auto, 150px) 1fr",
        gridTemplateAreas: "title description",
        gap: "1em"
      }}
    >
      {children}
    </div>
  );
};

export default ExperienceItem;
