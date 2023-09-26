import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { codeSnippets } from '../Data/codeSnippets';

function ReduxStoreExplanation() {
  return (
    <div>
      <p>🏛️ A Redux store is the mighty fortress of your Redux application. It's where all your app's state comes together, forming a grand union!</p>
      <h2>Configuring the Redux Store 🚀</h2>
      <p>To configure a Redux store, we enlist the help of the <code>configureStore</code> function provided by the Redux Toolkit. This function makes setting up the store a breeze.</p>
      <p>Below is a code snippet that showcases how to configure a Redux store:</p>
      <pre>
        <SyntaxHighlighter language='javascript' style={docco}>
          {codeSnippets[0]}
        </SyntaxHighlighter>
      </pre>
      <p>In this code snippet, we embark on an epic journey:</p>
      <ul>
        <li>🌟 Import the necessary companions, including <code>configureStore</code>, <code>authenticationSlice</code>, and <code>postSlice</code>.</li>
        <li>🏰 Configure the Redux store using <code>configureStore</code>. We summon the reducers that govern different aspects of our state within the <code>reducer</code> realm.</li>
        <li>🪄 Export the mighty Redux store (<code>reduxStore</code>) to make it available for heroic deeds throughout the land.</li>
      </ul>
      <p>This Redux store will be your trusty guardian, holding and managing the state of your Redux application, ensuring a single source of truth for your data. 🛡️</p>
    </div>
  );
}

export default ReduxStoreExplanation;
