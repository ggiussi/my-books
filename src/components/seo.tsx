/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// type vs interface?
/*
type SEOProps = {
  site: {
    siteMetadata: {
      title: String
      description: String
      author: String
    }
  }
}
*/

interface SEOProps {
  description?: string
  lang?: string
  className?: string
  meta?: [
    {
      name: string
      content: string
    }
  ]
  title: string
}

// TODO React.FC discouraged https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
const SEO = ({ description, lang, meta, title, className }: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `)

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  
  return (
    <Helmet
      htmlAttributes={{
        lang,
        class: className
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  className: "has-navbar-fixed-top",
  meta: [],
  description: "",
}

/*
SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
*/

export default SEO
