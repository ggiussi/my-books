import React, { FunctionComponent } from 'react'
import Book from '../../components/book'
import { PreviewTemplateComponentProps } from 'netlify-cms-core'
import "../../pages/mystyles.scss"
//import R from "../../utils/remark" TODO why isn't working?
const remark = require('remark')
const remark_html = require('remark-html')
const R = remark().use(remark_html)

//https://www.netlifycms.org/docs/customization/#registerpreviewtemplate
// pass destructured (title= and quotes=) or the entire object book={{title: }}
// the processSync is kinda slow
// Ideally, the html corresponding to the markdown should be provided in props.fieldsMetaData but is not. I should open an issue to netlify-cms for this
// https://github.com/netlify/netlify-cms/blob/4d296ed77e48ff49fde9041ead0c63d1f93e1b56/packages/netlify-cms-widget-markdown/src/MarkdownPreview.js#L20
const BookPreview: FunctionComponent<PreviewTemplateComponentProps> = ({entry}) => {
  return (
  <Book title={entry.getIn(['data','title'])}
        quotes={entry.getIn(['data','quotes'])?.map(q => q.update('text',t => R.processSync(t).contents.toString())).toJS()}
        book={{title: entry.getIn(['data','title'])}}>
  </Book>
)}

export default BookPreview