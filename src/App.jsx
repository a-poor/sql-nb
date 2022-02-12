import { useState } from 'react'
import './App.css'

import "normalize.css/normalize.css"
import "@blueprintjs/core/lib/css/blueprint.css"
import "@blueprintjs/icons/lib/css/blueprint-icons.css"

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism.css";

import Split from 'react-split'

import Mousetrap from 'mousetrap'


import {
  Button,
} from '@blueprintjs/core'


const starterCode = "SELECT 1 + 1;"

function CodeBlock({ code, setCode, setFocus }) {
  return (
    <Editor 
      value={code}
      onValueChange={(code) => setCode(code)}
      highlight={(code) => highlight(code, languages.sql)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
        border: '1px solid #ccc',
      }}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
    />
  )
}

function App() {
  const [focused, setFocused] = useState(null)
  const [codeBlocks, setCodeBlocks] = useState([])

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <Button>Hello</Button>
      <Editor 
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={(code) => highlight(code, languages.sql)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          border: '1px solid #ccc',
        }}
  
      />
    </div>
  )
}

export default App
