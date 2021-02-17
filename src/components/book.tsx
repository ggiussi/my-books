import React from 'react'
import { graphql } from "gatsby"
import PropTypes from "prop-types"
//import Layout from "../components/layout"
//import SEO from "../components/seo"
import Box from "./box"

interface BookProps {
  title: string
  quotes: [{text: string, id: string}]

  
}

// there is any way to avoid data here and just destructure book?
const Profile = ({title, cover}) => {
    // TODO {(data.childImageSharp?.fluid) ? <Img fluid={data.childImageSharp.fluid} /> : <img src={data.cover}></img>}
    return (
    <article className="media">
      <div className="media-left">
        <figure className="image" style={{ width: `200px`, marginBottom: `1.45rem` }}>
          <img src={cover}></img>
        </figure>
      </div>
      <div className="media-content">
          <div className="content">
              <h1 className="title is-3">{title}</h1>
          </div>
      </div>
    </article>
)
}

// TODO there is a better way to do this?
const Quote = ({text}) => {
    return <Box><div className="content" dangerouslySetInnerHTML={{__html: text}}></div></Box>
}

const Book = ({title, quotes}: BookProps) => {
    return (
        <>
          <Box>
            <Profile title={title}></Profile>
          </Box>
        {quotes?.map(q => 
          <Quote key={q.id} text={q.text}></Quote>
        )}
        </>
    )
}

export default Book;