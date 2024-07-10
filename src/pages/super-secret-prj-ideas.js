import * as React from "react";
import Layout from "../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import MDXWrapper from "../components/MDXWrapper";
import { graphql } from "gatsby";

const SuperSecretPrjIdeas = ({ data }) => {
  return (
    <Layout selectedPage="super-secret-prj-ideas">
      <MDXWrapper>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXWrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    mdx(slug: { eq: "super-secret-prj-ideas" }) {
      body
    }
  }
`;

export default SuperSecretPrjIdeas;

export function Head() {
  return <title>Super Secret Project Ideas</title>;
}