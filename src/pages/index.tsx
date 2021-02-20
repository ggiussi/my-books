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
               cover: string
               fields: {
                 slug: string
               }
             }]
  }
}

// si uso is-flex en la columna que tiene is-half-mobile me acomoda bien el height pero me rompe el width
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// https://bulma.io/documentation/helpers/flexbox-helpers/
const IndexPage = ({data}: PageProps<DataProps>) => (
  <Layout>
    <SEO title="Home" />
    <Box>
      <h1>Your books</h1>
      
      <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <div className="columns is-mobile is-multiline is-align-items-stretch is-justify-content-center">
      {data.allBooksJson.nodes.map((e) => 
        <div className="book-column column is-narrow is-flex-shrink-0 is-flex is-align-items-stretch" key={e.id} >
          <div className="box">
            <figure className="image">
              <img src={e.cover ? e.cover : "images/cover_placeholder.jpg" }></img>
            </figure>
            
            <Link to={e.fields.slug}>{e.title}</Link>
          </div>
          
        </div> 
      )}
      </div>

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
        cover
        fields {
          slug
        }
      }
    }
  }
 ` 
