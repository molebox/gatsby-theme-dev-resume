/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import Layout from "./../components/layout";
import Header from "../components/header-bar/header";
import Skills from "../components/skills-section/skills";
import Projects from "../components/projects-section/projects";
import Experience from "../components/experience-section/experience";
import Education from "../components/education-section/education";
import { graphql, useStaticQuery } from "gatsby";
import Summary from "../components/summary-section/summary";
import { useSiteMetadata } from './../components/useSiteMetadata';
import References from "../components/references/references";

export default () => {
  const data = useStaticQuery(query);
  const {showSummary, showReference} = useSiteMetadata();
  const resume = data.allResumeJson.edges;

  return (
    <Layout>
      <Header />
      <div
        sx={{
          display: "grid",
          gridAutoRows: "auto",
          gap: "1em",
          padding: "2em",
          backgroundColor: "white"
        }}
      >
        {resume.map(({ node, index }) => (
          <React.Fragment key={node.basics.name + index}>
            {showSummary ? (
              <Summary summary={node.basics.summary}/>
            ) : null}
            <Projects projects={node.projects} />
            <Skills skills={node.skills} />
            <Experience work={node.work} />
            <Education education={node.education} />
            {showReference ? (
              <References references={node.references}/>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    allResumeJson {
      edges {
        node {
          basics {
            name
            label
            email
            github
            website
            summary
          }
          work {
            company
            position
            startDate(formatString: "MMM YYYY")
            endDate(formatString: "MMM YYYY")
            present
            summary
            stack
          }
          projects {
            name
            summary
            stack
            npm
            github
            live
          }
          skills {
            name
            keywords
          }
          education {
            institution
            area
            qualification
            startDate(formatString: "MMM YYYY")
            endDate(formatString: "MMM YYYY")
            courses
          }
          references{
            name
            reference
          }
        }
      }
    }
  }
`;
