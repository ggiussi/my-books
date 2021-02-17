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

/*
<div className="columns is-multiline is-mobile">
      {data.allBooksJson.nodes.map((e) => 
        <div className="column is-flex is-narrow" key={e.id} >
          <div className="box" style={{width: "200px"}}>
            <figure className="image" style={{width: "150px", height: "200px"}}>
              <img src={e.cover} style={{maxWidth: "150px", maxHeight: "200px"}}></img>
            </figure>
            
            <Link to={e.fields.slug}>{e.title}</Link>
          </div>
          
        </div> 
      )}
      </div>
*/

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

      <div className="columns is-multiline is-mobile">
      {data.allBooksJson.nodes.map((e) => 
        <div className="column is-flex is-align-items-stretch is-half-mobile is-one-quarter-desktop" key={e.id} >
          <div className="box">
            <figure className="image">
              <img src={e.cover} style={{maxWidth: "150px", maxHeight: "200px"}}></img>
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
