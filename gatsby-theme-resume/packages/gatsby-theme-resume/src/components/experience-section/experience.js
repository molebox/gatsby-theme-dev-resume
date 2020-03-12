/** @jsx jsx */
import { jsx } from "theme-ui";
import SectionHeader from "../section-header";
import ExperienceItem from "./experience-item";
import LeftColumn from "./../common/left-column";
import DateRange from "../common/date-range";
import RightColumn from "../common/right-column";
import JobDescription from "./job-description";

const Experience = ({ work }) => {
  return (
    <section
      sx={{
        display: "grid",
        gridAutoRows: "auto",
        gap: "1em"
      }}
    >
      <SectionHeader>Experience</SectionHeader>
      {work.map((item, index) => (
        <ExperienceItem key={item.company + index}>
          <LeftColumn>
            <span
              sx={{
                fontFamily: "heading",
                fontSize: "1em",
                fontWeight: 700,
                color: "text"
              }}
            >
              {item.company}
            </span>
            <DateRange>{`${item.startDate} - ${
              item.present ? item.present : item.endDate
            }`}</DateRange>
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
              {item.position}
            </span>
            <JobDescription summary={item.summary} stack={item.stack} />
          </RightColumn>
        </ExperienceItem>
      ))}
    </section>
  );
};

export default Experience;
