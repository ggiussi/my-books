- deploy to netlify
- try tina (https://tina.io/docs/integrations/gatsby/)
- find if I can't use subdomains from my domain, so I only pay for one domain and everyone can have their site in ggiussi-my-books.slank.com.
- pagination of quotes https://www.smashingmagazine.com/2020/09/advanced-graphql-usage-gatsby-websites/
- https://webpagetest.org/
- FIX images! 
  - https://www.gatsbyjs.com/plugins/gatsby-image/
  - https://www.gatsbyjs.com/docs/working-with-images/
- https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-search/
- react & media queries https://www.npmjs.com/package/react-responsive. it is better to use this or with css? I mean I could 
  add a query in the css like I did to resize a 128x128 bulma image 
  ```
  @media screen and (max-width: 768px) {
  .media {
    display: block;
  }

  .media-content {
    margin-top: 1rem !important;
  }

  .media > .media-left > .image.is-128x128 {
    height: 64px;
    width: 64px;
  }

}
  ```

- How can I deliver the backbone site as a npm package? So people that are using it can receive the updates?
  I'm thinking in exporting the list of plugins and the API createPage and createNode, and having the gatsby-config and gatsby-node in each site, just 
  pointing to the plugins and API from the module.
  I also should be able to point to src/pages/index.js so I can reuse the same, in the worst scenario I need to export this and use it in a src/pages/index in each site.
- Are dependencies transitive? Apparently I need to import gatsby for each site, otherwise is not recognized as a gatsby site and I cannot run gatsby build. But what about react for example? I need to put it also in each site?