import * as React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import MDXWrapper from "../components/MDXWrapper";
import InfoCard from "../components/InfoCard";

const linkStyles = `
w-full max-w-[11.25rem] my-5 mx-2 p-3 pr-2
border-2 border-gray-600 rounded-md
bg-gray-600 text-gray-200
hover:text-gray-50 hover:underline hover:decoration-emerald-500 hover:decoration-2
`;

const Index = ({ data }) => {
  console.log(data);
  return (
    <Layout selectedPage="index">
      <div className="flex flex-wrap flex-row-reverse bg-gray-700">
        <div className="w-2/3 md:w-1/3 mx-auto border-b-2 md:border-none border-gray-600 pb-2 mb-4">
          <InfoCard />
        </div>

        <div className="w-5/6 md:w-1/2 md:pl-16 mb-20">
          <MDXWrapper>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXWrapper>
          <ul>
            <Link to="/projects">
              <li className={linkStyles}>Projects</li>
            </Link>
            <Link to="/about">
              <li className={linkStyles}>About me</li>
            </Link>
            <Link to="/now">
              <li className={linkStyles}>What I'm up to now</li>
            </Link>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    mdx(slug: { eq: "home" }) {
      body
    }
  }
`;

export default Index;

export function Head() {
  return <title>Index</title>;
}
