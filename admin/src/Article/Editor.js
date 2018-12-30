import React from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/lib/codemirror.css'


class Editor extends React.Component {
 

  render() {
    return (
      <form className="editor pure-form">
        <CodeMirror 
          mode="markdown"
          theme="monokai"
          value={this.props.value}
          onChange={this.props.changeValue}
          options={{ mode: 'markdown' }}
        />
      </form>
    )
  }
}

export default Editor