import * as React from "react";
import Layout from "../components/Layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import MDXWrapper from "../components/MDXWrapper";
import { graphql } from "gatsby";

const Now = ({ data }) => {
  return (
    <Layout selectedPage="now">
      <MDXWrapper>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXWrapper>
    </Layout>
  );
};

export const query = graphql`
  query {
    mdx(slug: { eq: "now" }) {
      body
    }
  }
`;

export default Now;

export function Head() {
  return <title>Now</title>;
}
