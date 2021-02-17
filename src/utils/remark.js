const remark = require('remark')
const remark_html = require('remark-html')

const R = remark().use(remark_html)

exports = R