import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { codeSnippets } from '../Data/codeSnippets';

function ReactAuthenticationSlice() {
  return (
    <div>
      <p>🔐 The Redux Authentication Slice is a crucial part of a Redux application that handles user authentication-related state. It defines the structure and behavior of the authentication state and provides actions to update this state.</p>
      <h2>Authentication Slice Code 📝</h2>
      <p>Below is the code snippet that represents the Authentication Slice in a Redux application:</p>
      <pre>
        <SyntaxHighlighter language='javascript' style={docco}>
          {codeSnippets[1]}
        </SyntaxHighlighter>
      </pre>
      <p>In this code snippet, we define the Authentication Slice using <code>createSlice</code>. It includes:</p>
      <ul>
        <li>
          🏁 The initial state, which consists of <code>username</code> and <code>password</code> fields.
        </li>
        <li>
          🚀 Two reducers (<code>setLoginInfo</code> and <code>setLogoutInfo</code>) that handle actions related to user login and logout.
        </li>
        <li>
          📦 Exported actions and the reducer to be used within the Redux store.
        </li>
      </ul>
      <p>The Authentication Slice is responsible for managing the user's authentication state within the Redux store. It allows you to set and clear login information as needed. 🚀🔑</p>
    </div>
  );
}

export default ReactAuthenticationSlice;
