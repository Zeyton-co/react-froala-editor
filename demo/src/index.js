import React from 'react'
import {render} from 'react-dom'

import FroalaEditor from '../../src'

let Demo = React.createClass({
  getData() {
    console.log(this.froalaEditor.getHtml());
  },
  render() {
    const str = '<p>React Froala Editor</p>';
    return <div>
      <h1>React-Froala-Editor Demo</h1>
      <FroalaEditor
        base='https://cdnjs.cloudflare.com/ajax/libs/froala-editor/2.3.4'
        ref={(r) => {this.froalaEditor = r;}}
        value={str}
        alignP
        charCounterP
        codeViewP
        codeBeautifierP
        colorsP
        draggableP
        emoticonsP
        entitiesP
        fileP
        fontFamilyP
        fontSizeP
        fullscreenP
        imageP
        imageManagerP
        inlineStyleP
        lineBreakerP
        linkP
        listsP
        paragraphFormatP
        paragraphStyleP
        quickInsertP
        quoteP
        saveP
        tableP
        urlP
        videoP/>
      <h5 onClick={this.getData}>Click</h5>
    </div>
  }
})

render(<Demo/>, document.querySelector('#demo'))
