import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

const Index = ({ data }) => {
  console.log(data)
    return (
      <Layout pageTitle="meow">
        <div id="container" className="">
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </div>
      </Layout>

    )
}

export const query = graphql`
  query MyQuery {
    mdx(slug: {eq: "home"}) {
      body
    }
  }
`

export default Index
