- deploy to netlify
- create pages from json
- use markdown in json (see if I can use this plugin although seems to be tested with tina gatsby-plugin-json-remark)
- use a CMS (netlifyCMS or tina)
- try tina (https://tina.io/docs/integrations/gatsby/)
- find if I can't use subdomains from my domain, so I only pay for one domain and everyone can have their site in ggiussi-my-books.slank.com.
- can I have reference between collections? maybe in a different CMS
- check strapi (api based cms) https://strapi.io/blog/build-a-static-blog-with-gatsby-and-strapi
- how to add slug to json nodes? something like this (but this is for markdown) https://www.gatsbyjs.com/plugins/gatsby-plugin-slug/
- pagination of quotes https://www.smashingmagazine.com/2020/09/advanced-graphql-usage-gatsby-websites/
- https://webpagetest.org/
- FIX images! 
  - https://www.gatsbyjs.com/plugins/gatsby-image/
  - https://www.gatsbyjs.com/docs/working-with-images/
- https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-search/
- TODO hide uuuid widget. I can hide the input element but the tab showing field's name still appears. I need to reach the parent dom element in widget's react component and add display:none.
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