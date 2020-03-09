/** @jsx jsx */
import { jsx } from "theme-ui";
import SectionHeader from "./../section-header";
import ProjectItem from "./project-item";
import LeftColumn from "../common/left-column";
import RightColumn from "../common/right-column";
import ProjectDescription from "./project-description";
import ProjectLinks from "./project-links";

const Projects = ({ projects }) => {
  return (
    <section
      sx={{
        display: "grid",
        gridAutoRows: "auto",
        gap: "1em"
      }}
    >
      <SectionHeader>Projects</SectionHeader>
      {projects.map((project, index) => (
        <ProjectItem key={project.name + index}>
          <LeftColumn>
            <span
              sx={{
                fontFamily: "heading",
                fontSize: "1em",
                fontWeight: 700,
                color: "text"
              }}
            >
              {project.name}
            </span>
          </LeftColumn>
          <RightColumn>
            <ProjectDescription
              summary={project.summary}
              stack={project.stack}
            />
            <ProjectLinks
              github={project.github}
              npm={project.npm}
              live={project.live}
            />
          </RightColumn>
        </ProjectItem>
      ))}
    </section>
  );
};

export default Projects;
