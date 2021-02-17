import React from 'react'
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Book from "../components/book"
import Img from "gatsby-image"

// How can I avoid the fields here?
interface BookType {
    title: string
    cover: string
    fields: {
        quotes: [{text: string, id: string}]
    }
    
}

interface BookProps {
  booksJson: BookType
    
}

const BookTemplate = ({data}: PageProps<BookProps>) => {
    const book = data.booksJson
    return (
    <Layout>
        <SEO title={book.title} />
        <Book title={book.title} quotes={book.fields.quotes} cover={book.cover}></Book>
    </Layout>
    )
}

export default BookTemplate;

// https://www.gatsbyjs.com/blog/gatsbygram-case-study/
// https://github.com/gatsbyjs/gatsby/blob/master/examples/gatsbygram/gatsby-node.js
export const pageQuery = graphql`
  query($id: String!) {
    booksJson(id: {eq: $id}){
      title
      cover
      fields {
          quotes {
              text
              id
          }
      }
    }

    placeholderImage: file(relativePath: { eq: "screen-shot-2021-02-13-at-22.05.12.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`