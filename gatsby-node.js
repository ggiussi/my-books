/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
//const { fmImagesToRelative } = require('gatsby-remark-relative-images')
//const slug = require(`slug`)


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
        allBooksJson {
          edges {
            node {
              id
            }
          }
        }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const books = result.data.allBooksJson.edges

    books.forEach((edge) => {
      createPage({
              //path: `/${slug(edge.node.id)}/`,
              path: `book-list/${String(edge.node.id)}`,
              component: path.resolve(
                "src/templates/prueba.js"
              ),
              context: { id: edge.node.id }
            })
    })

  })
}

// TODO Can I add slugs to json nodes with this?
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  //fmImagesToRelative(node) // convert image paths for gatsby images
  //console.log(node);
  //if (node.internal.type)
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}


