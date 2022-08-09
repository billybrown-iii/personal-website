import * as React from "react";
import Layout from "../components/Layout";
import LinksCard from "../components/LinksCard";
import { MDXRenderer } from "gatsby-plugin-mdx";
import MDXWrapper from "../components/MDXWrapper";
import { graphql } from "gatsby";

const About = ({ data }) => {
  return (
    <Layout selectedPage="about">
      <div className="flex flex-row-reverse flex-wrap">
        <div className="w-1/2 md:w-1/4 mx-auto mb-10">
          <LinksCard />
        </div>
        <div className="w-full md:w-3/4 mx-auto">
          <div id="about-header" className="mr-3 mb-10">
            <MDXWrapper>
              <MDXRenderer>
                {
                  data.allMdx.nodes.find((node) => node.slug === "about-header")
                    .body
                }
              </MDXRenderer>
            </MDXWrapper>
          </div>
          <div id="about-body">
            <MDXWrapper>
              <MDXRenderer>
                {
                  data.allMdx.nodes.find((node) => node.slug === "about-body")
                    .body
                }
              </MDXRenderer>
            </MDXWrapper>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery2 {
    allMdx(filter: { slug: { glob: "about*" } }) {
      nodes {
        slug
        body
      }
    }
  }
`;

export default About;
export function Head() {
  return <title>About</title>;
}
