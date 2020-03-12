/** @jsx jsx */
import { jsx } from "theme-ui";
import SectionHeader from "../section-header";
import RightColumn from "../common/right-column";
import ReferenceText from './reference-text';
import ReferenceItem from './reference-item';
import LeftColumn from './../common/left-column';

const References = ({ references }) => {
  return (
    <section
      sx={{
        display: "grid",
        gridAutoRows: "auto",
        gap: "1em"
      }}
    >
      <SectionHeader>References</SectionHeader>
      {references.map((item, index) => (
        <ReferenceItem key={item.name + index}>
        <LeftColumn>
        <span
              sx={{
                fontFamily: "heading",
                fontSize: "1em",
                fontWeight: 700,
                color: "text",
                marginBottom: "1em"
              }}
            >
              {item.name}
            </span>
          </LeftColumn>
          <RightColumn>
            <ReferenceText reference={item.reference} />
          </RightColumn>
        </ReferenceItem>
      ))}
    </section>
  );
};

export default References;

