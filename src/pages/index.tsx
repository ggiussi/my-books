import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Box from "../components/box"
import SearchBar from "../components/index"

// TODO type vs interface?
type DataProps = {
  allBooksJson: {
    nodes: [{
               title: string
               id: string
               fields: {
                 slug: string
               }
             }]
  }
}

const IndexPage = ({data}: PageProps<DataProps>) => (
  <Layout>
    <SEO title="Home" />
    <Box>
      <h1>Your books</h1>
      
      <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    {data.allBooksJson.nodes.map((e) => 
      <p key={e.id}><Link to={e.fields.slug}>{e.title}</Link></p> 
    )}
    </Box>
    <Box>
    <SearchBar />
    </Box>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allBooksJson(filter: {show: {ne: false}}) {
      nodes {
        title
        id
        fields {
          slug
        }
      }
    }
  }
 ` 
