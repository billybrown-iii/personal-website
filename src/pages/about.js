import * as React from "react"
import Layout from "../components/layout"
import LinksCard from "../components/LinksCard";
import { MDXRenderer } from "gatsby-plugin-mdx";
import MDXWrapper from "../components/mdxwrapper";
import { graphql, Link } from "gatsby";
import feather from "feather-icons";

// @ts-ignore
// import portrait from "../images/billy.jpg";
{/* <img className="w-4/5 m-auto my-6 rounded-xl" src={portrait} /> */}




const About = ({ data }) => {
    return (
      <Layout pageTitle="meow" selectedPage="about">
        <div className="flex flex-row-reverse flex-wrap">
          <div className="w-1/4"><LinksCard /></div>
          <div className="w-3/4">
            <div id="about-header" className="">
              <MDXWrapper>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </MDXWrapper>
            </div>
          </div>
        </div>
        
      </Layout>

    )
}

export const query = graphql`
query MyQuery2 {
  mdx(slug: {eq: "about-header"}) {
    body
  }
}
`

export default About