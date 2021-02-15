import CMS from 'netlify-cms-app'
import createClass from 'create-react-class';
import { createElement as h } from 'react';
import { v1 as uuidv1 } from 'uuid';


//import uploadcare from 'netlify-cms-media-library-uploadcare'
//import cloudinary from 'netlify-cms-media-library-cloudinary'

//import AboutPagePreview from './preview-templates/AboutPagePreview'

//CMS.registerMediaLibrary(uploadcare)
//CMS.registerMediaLibrary(cloudinary)

// https://github.com/sformisano/netlify-cms-widget-simple-uuid
var IdControl = createClass({
    componentDidMount: function () {
        const value = uuidv1();
        this.props.onChange(value);
    },

    render: function() {
        return null;
    }
  });
  
const IdPreview = createClass({
  render: function() {
    return h('p', {}, this.props.value);
  }
});


var schema = {
  properties: {
    hidden: { type: 'boolean' },
  },
}  

CMS.registerWidget('uuid', IdControl, IdPreview, schema);
CMS.init()

//CMS.registerPreviewTemplate('about', AboutPagePreview)
