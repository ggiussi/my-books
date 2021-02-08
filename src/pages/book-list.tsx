import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// TODO what is this for? I can't break it and nothing happens. I need to install some plugin for typescript?
// https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript/#caveats says "It does not do type checking", so????
type DataProps = {
  allBooksJson: {
    nodes: [{
               title: string
               id: string
             }]
  }

  site: {
    buildTime: string
  }
}

const BookList: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Book List" />
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>
      This means that you can create and write <em>.ts/.tsx</em> files for your
      pages, components etc. Please note that the <em>gatsby-*.js</em> files
      (like gatsby-node.js) currently don't support TypeScript yet.
    </p>
    <p>
      For type checking you'll want to install <em>typescript</em> via npm and
      run <em>tsc --init</em> to create a <em>.tsconfig</em> file.
    </p>
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
    </p>
    {data.allBooksJson.nodes.map((e) => <p>{e.title}</p>)}
    <p>
      To learn more, head over to our{" "}
      <a href="https://www.gatsbyjs.com/docs/typescript/">
        documentation about TypeScript
      </a>
      .
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


export default BookList

export const query = graphql`
  {
    allBooksJson {
      nodes {
        title
        id
      }
    }

    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`