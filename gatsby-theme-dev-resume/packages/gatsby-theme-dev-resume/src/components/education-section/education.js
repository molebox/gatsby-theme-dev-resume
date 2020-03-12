/** @jsx jsx */
import { jsx } from "theme-ui";
import SectionHeader from "./../section-header";
import EducationItem from "./education-item";
import LeftColumn from "../common/left-column";
import DateRange from "./../common/date-range";
import RightColumn from "../common/right-column";
import EducationDescription from "./education-description";

const Education = ({ education }) => {
  return (
    <section
      sx={{
        display: "grid",
        gridAutoRows: "auto",
        gap: "1em"
      }}
    >
      <SectionHeader>Education</SectionHeader>
      {education.map((item, index) => (
        <EducationItem key={item.institution + index}>
          <LeftColumn>
            <span
              sx={{
                fontFamily: "heading",
                fontSize: "1em",
                fontWeight: 700,
                color: "text"
              }}
            >
              {item.institution}
            </span>
            <DateRange>{`${item.startDate} - ${item.endDate}`}</DateRange>
          </LeftColumn>
          <RightColumn>
            <span
              sx={{
                fontFamily: "heading",
                fontSize: "1em",
                fontWeight: 700,
                color: "text",
                marginBottom: "1em"
              }}
            >
              {item.area} - {item.qualification}
            </span>
            <EducationDescription courses={item.courses} />
          </RightColumn>
        </EducationItem>
      ))}
    </section>
  );
};

export default Education;
