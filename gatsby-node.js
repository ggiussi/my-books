/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const remark = require('remark')
const remark_html = require('remark-html')
//const { fmImagesToRelative } = require('gatsby-remark-relative-images')
//const slug = require(`slug`)

const R = remark().use(remark_html)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
        allBooksJson {
          edges {
            node {
              id,
              templateKey
              fields {
                slug
              }
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
              path: `books${String(edge.node.fields.slug)}`,
              component: path.resolve(
                `src/templates/${String(edge.node.templateKey)}.tsx`
              ),
              context: { id: edge.node.id }
            })
    })

  })
}

exports.onCreateNode = ({ node, actions, getNode, createContentDigest }) => {
  const { createNodeField, createNode } = actions
  //fmImagesToRelative(node) // convert image paths for gatsby images
  
  if (node.internal.type === `BooksJson`){
    console.log("Adding slug field");
    const slug = createFilePath({ node, getNode })
    const data = {
      field1: `a string`,
      field2: 10,
      field3: true,
    }
    createNode({
      ...data,
      // Required fields.
      id: `a-node-id`,
      parent: null,
      children: [],
      internal: {
        type: `CoolServiceMarkdownField`,
        contentDigest: createContentDigest(data)
        //mediaType: `text/markdown`, // optional
        //content: JSON.stringify(fieldData), // optional
        //description: `Cool Service: "Title of entry"`, // optional
      }
    })
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
    
    // get contents with remark in an async way so I can process files in parallel.
    if (!_.isNull(node.quotes) && !_.isUndefined(node.quotes)){
      createNodeField({
        name: `quotes`,
        node,
        value: node.quotes.map((e) => ({text: R.processSync(e.text).contents.toString()}))
      })
      
    }
    
    
  }
  /*
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
  */
}


