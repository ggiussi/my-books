import CMS from 'netlify-cms-app'
import { useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';


//import uploadcare from 'netlify-cms-media-library-uploadcare'
//import cloudinary from 'netlify-cms-media-library-cloudinary'

import BookPreview from './preview-templates/book_preview'

//CMS.registerMediaLibrary(uploadcare)
//CMS.registerMediaLibrary(cloudinary)

// https://github.com/sformisano/netlify-cms-widget-simple-uuid
const IdControl = ({value, classNameWrapper, onChange, field, forID}) => {
  useEffect(() => {
    if (field.get('hidden', true)){
      // I would like to have a better way to do this
      document.getElementById("input-for-" + forID)?.parentElement?.setAttribute("style","display:none;")
    }
    if (value == null) {
      onChange(uuidv1())
    }
  })
  /*
  const v = value ? value : getuuid()
  if (v != value){
    onChange(v) // This is ok or should I do it inside useEffect?
  }
  */

  return <input id={"input-for-" + forID} className={classNameWrapper} type="text" disabled={true} value={value}></input>
}


//const IdPreview = ({value}) => <div>{value}</div>;

// I was using this with the js api but the ts just receives (name,control,[preview])
var schema = {
  properties: {
    hidden: { type: 'boolean' },
  },
}  


CMS.init()
CMS.registerWidget('uuid', IdControl)
CMS.registerPreviewTemplate('books', BookPreview)
