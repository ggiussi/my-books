/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

//import SearchBar from './index'
import "../pages/mystyles.scss"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <nav className="navbar is-dark is-fixed-top" role="navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">{data.site.siteMetadata?.title || `Title`}</Link>
          <a className="navbar-item"
             href="/admin/"
             target="_blank"
             rel="noopener noreferrer">
               Admin
          </a>
        </div>
      </nav>
      <section className="section">
        <main className="container">
        <div className="container">
          <div className="columns is-centered">
              <div className="column">
                  <div>
                      <div className="columns is-centered">
                          <div className="column is-three-quarters">
                              {children}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </main>
      </section>
    </>
  )
}

// TODO should I do this for all components?
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
