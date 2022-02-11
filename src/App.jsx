import { useState } from 'react'
import './App.css'

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-sql";
import "prismjs/themes/prism.css"; //Example style, you can use another


const starterCode = "SELECT 1 + 1;"

function App() {
  const [code, setCode] = useState(starterCode)

  return (
    <div className="App">
      <h1>Hello, World!</h1>
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
