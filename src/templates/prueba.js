import React from 'react'
import { graphql } from "gatsby"

function PruebaTemplate(props) {
  console.log("prueba!!!!!") // why this isn't being solved at build time
  console.log(props.data)
  const book = props.data.booksJson

  return (
    <div>
      <h1>{book.title}</h1>
    </div>
  )
}

export default PruebaTemplate

// https://www.gatsbyjs.com/blog/gatsbygram-case-study/
// https://github.com/gatsbyjs/gatsby/blob/master/examples/gatsbygram/gatsby-node.js
export const pageQuery = graphql`
  query($id: String!) {
    booksJson(id: {eq: $id}){
      title
    }
  }
`