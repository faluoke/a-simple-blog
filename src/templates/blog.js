import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(fromNow: true)
      body {
        json
      }
    }
  }
`

export default props => {
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>Posted: {props.data.contentfulBlogPost.publishedDate}</p>
      <p>
        {props.data.contentfulBlogPost.body.json.content.map(contents =>
          contents.content.map(content => content.value)
        )}
      </p>
    </Layout>
  )
}
