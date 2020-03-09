/** @jsx jsx */
import { jsx } from "theme-ui";
import Name from "./name";
import ContactDetails from "./contact-details";

const Header = () => {
  return (
    <header
      sx={{
        padding: "1em",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "header",
        fontFamily: "heading",
        borderBottom: "2px solid",
        borderColor: "accent"
      }}
    >
      <Name />
      <ContactDetails />
    </header>
  );
};

export default Header;
