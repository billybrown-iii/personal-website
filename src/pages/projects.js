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

{
  /* <StaticImage
            src={"../images/bonsai.png"}
            alt="Image of project"
            layout="constrained"
            className="w-4/5 md:w-1/3 md:ml-0 mb-3 md:-mt-12 border-gray-900 rounded"
          /> */
}

const Projects = ({ data }) => {
  return (
    <Layout pageTitle="meow" selectedPage="projects">
      <ExpandCollapse title="Bonsai Notes" defaultState={true}>
        <ProjectCodeList
          techArr={["TypeScript", "React", "Node", "Tailwind"]}
        />
        <ExternalLink
          name="View Code"
          iconName="github"
          url="https://github.com/billybrown-iii/bonsai-notes"
        />
        <hr className="w-9/12 my-6 mx-4" />
        <MDXWrapper>
          <MDXRenderer>
            {data.allMdx.nodes.find((item) => item.slug === "prj-bonsai").body}
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
