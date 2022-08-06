// @ts-nocheck
import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import ProjectCodeList from "../components/ProjectCodeList";
import ExternalLink from "../components/ExternalLink";
import ExpandCollapse from "../components/ExpandCollapse";
import MDXWrapper from "../components/MDXWrapper";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";

const Projects = ({ data }) => {
  return (
    <Layout pageTitle="meow" selectedPage="projects">
      <ExpandCollapse title="Bonsai Notes" defaultState={true}>
        <StaticImage
          src={"../images/bonsai.png"}
          alt="Image of project"
          layout="constrained"
          className="w-4/5 my-1 max-w-md rounded"
        />
        <ProjectCodeList
          techArr={["TypeScript", "React", "Node", "Tailwind"]}
        />
        <ExternalLink
          name="View Code"
          iconName="github"
          url="https://github.com/billybrown-iii/bonsai-notes"
        />
        <hr className="w-9/12 my-4 mx-4" />
        <MDXWrapper>
          <MDXRenderer>
            {data.allMdx.nodes.find((item) => item.slug === "prj-bonsai").body}
          </MDXRenderer>
        </MDXWrapper>
      </ExpandCollapse>

      <ExpandCollapse title="Project Euler">
        <ProjectCodeList techArr={["JavaScript", "Mathematics"]} />
        <ExternalLink
          name="View Code"
          iconName="github"
          url="https://github.com/billybrown-iii/project-euler"
        />
        <hr className="w-9/12 my-4 mx-4" />
        <MDXWrapper>
          <MDXRenderer>
            {data.allMdx.nodes.find((item) => item.slug === "prj-euler").body}
          </MDXRenderer>
        </MDXWrapper>
      </ExpandCollapse>

      <ExpandCollapse title="Budget Snapshot Tool">
        <StaticImage
          src={"../images/budget.png"}
          alt="Image of project"
          layout="constrained"
          className="w-4/5 my-1 max-w-md rounded"
        />
        <ProjectCodeList techArr={["JavaScript", "React", "MaterialUI"]} />
        <ExternalLink
          name="View Code"
          iconName="github"
          url="https://github.com/billybrown-iii/bonsai-notes"
        />
        <ExternalLink
          name="View Demo"
          iconName="github"
          url="https://monthlybudget.netlify.app"
        />
        <hr className="w-9/12 my-4 mx-4" />
        <MDXWrapper>
          <MDXRenderer>
            {data.allMdx.nodes.find((item) => item.slug === "prj-budget").body}
          </MDXRenderer>
        </MDXWrapper>
      </ExpandCollapse>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { slug: { glob: "prj*" } }) {
      nodes {
        slug
        body
      }
    }
  }
`;

export default Projects;

export function Head() {
  return <title>Projects</title>;
}
