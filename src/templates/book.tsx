import React from 'react'
import { graphql, PageProps } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Box from "../components/box"

// How can I avoid the fields here?
interface Book {
    title: string
    cover: string
    fields: {
        quotes: [{text: string}]
    }
    
}

interface BookProps {
    booksJson: Book
    
}

// there is any way to avoid data here and just destructure book?
const Profile = ({data}: {data: Book}) => {
    return (
    <article className="media">
      <div className="media-left">
        <figure className="image"> 
            <img src={data.cover}></img>
        </figure>
      </div>
      <div className="media-content">
          <div className="content">
              <h1 className="title is-3">{data.title}</h1>
          </div>
      </div>
    </article>
)
}

// TODO there is a better way to do this?
const Quote = ({text}) => {
    return <Box><div dangerouslySetInnerHTML={{__html: text}}></div></Box>
}

const Book = ({data}: PageProps<BookProps>) => {
    const book = data.booksJson
    
    return (
    <Layout>
        <SEO title={book.title} />
        <Box>
            <Profile data={book}></Profile>
        </Box>
        {book.fields.quotes?.map(e => <Quote text={e.text}></Quote>)}
    </Layout>
    )
}

export default Book;

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
          }
      }
    }
  }
`