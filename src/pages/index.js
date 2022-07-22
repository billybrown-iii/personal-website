import * as React from "react";
import Layout from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import MainContentWrapper from "../components/main-content-wrapper";
import MDXWrapper from "../components/mdxwrapper";
// @ts-ignore
import portrait from "../images/billy.jpg";
import feather from "feather-icons";

const userIcon = feather.icons["user"].toSvg({ height: 24 });
const mapIcon = feather.icons["map-pin"].toSvg({ height: 24 });
const codeIcon = feather.icons["code"].toSvg({ height: 24 });

const Index = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="meow">
      <MainContentWrapper>
        <div className="flex flex-wrap">
          <div className="w-4/5 md:w-3/5 md:pl-20 mb-20">
            <MDXWrapper>
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </MDXWrapper>
          </div>
          <div className="w-4/5 md:w-2/5">
            <div className="m-auto bg-gray-600 px-8 py-4 rounded-xl">
              <div className="text-2xl text-center mb-3">Billy Brown III</div>
              <img className="w-4/5 m-auto rounded-xl" src={portrait} />
              <div className="flex mr-1 my-5">
                <span
                  className="mr-1"
                  dangerouslySetInnerHTML={{ __html: userIcon }}
                />
                Software Engineer
              </div>
              <div className="flex mr-1 my-5">
                <span
                  className="mr-1"
                  dangerouslySetInnerHTML={{ __html: mapIcon }}
                />
                Vancouver, WA
              </div>
              <div className="flex mr-1 my-5">
                <span
                  className="mr-1"
                  dangerouslySetInnerHTML={{ __html: codeIcon}}
                />
                JavaScript / React / Node.js
              </div>
            </div>
            {/* <img className="rounded-3xl w-2/3 m-auto mt-4" src={portrait}></img> */}
          </div>
        </div>
      </MainContentWrapper>
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
