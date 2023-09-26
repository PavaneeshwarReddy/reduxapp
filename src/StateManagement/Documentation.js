import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { dark, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { codeSnippets } from '../Data/codeSnippets';
import ReduxStoreExplanation from '../Pages/ReactStoreExplanation';
import ReactAuthenticationSlice from '../Pages/ReactAuthenticationSlice';
import ReactPostSlice from '../Pages/ReactPostSlice';
function Documentation() {
  return (
    <div style={{display:"flex",justifyContent:"center",flexDirection:'column',alignItems:"center"}}>
        <h1 style={{textDecoration:"underline",color:"green"}}>Documentation</h1>
        <h1>Redux Store</h1>
        <ReduxStoreExplanation/>
        
        <h1>Redux Authentication Slice</h1>
        <ReactAuthenticationSlice/>
       <ReactPostSlice/>
       <h1>Subscribe To Store Changes</h1>
       <SyntaxHighlighter style={docco}>{codeSnippets[3]}</SyntaxHighlighter>

       <h1>Dispatch code (Events)</h1>
       <SyntaxHighlighter style={docco}>{codeSnippets[4]}</SyntaxHighlighter>

       <h1>Get State code</h1>
       <SyntaxHighlighter style={docco}>{codeSnippets[5]}</SyntaxHighlighter>

       <h1>Redux For protected routes</h1>
       <SyntaxHighlighter  style={docco}>{codeSnippets[6]}</SyntaxHighlighter>
    </div>
  )
}

export default Documentation