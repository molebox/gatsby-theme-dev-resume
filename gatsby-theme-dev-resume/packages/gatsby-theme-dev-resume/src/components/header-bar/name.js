/** @jsx jsx */
import { jsx } from "theme-ui";
import { useSiteMetadata } from './../useSiteMetadata';

const Name = () => {
  const {yourName} = useSiteMetadata();
  return (
    <span
      sx={{
        fontSize: "3em",
        color: "headerText"
      }}
    >
      {yourName}
    </span>
  );
};

export default Name;
