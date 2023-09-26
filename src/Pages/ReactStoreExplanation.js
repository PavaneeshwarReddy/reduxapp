import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import {  docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { codeSnippets } from '../Data/codeSnippets';

function ReduxStoreExplanation() {
  return (
    <div>
      <p>
        A Redux store is a fundamental part of a Redux application. It serves as
        the centralized hub for managing the entire application's state.
        Understanding the concept of a Redux store is crucial when working with
        Redux for state management.
      </p>
      <h2>Configuring the Redux Store</h2>
      <p>
        To configure a Redux store, we use the <code>configureStore</code>{' '}
        function provided by the Redux Toolkit. This function allows us to set up
        and create the Redux store with ease.
      </p>
      <p>
        Below is a code snippet that demonstrates how to configure a Redux
        store:
      </p>
      <pre>
      <SyntaxHighlighter language='javascript' style={docco}>
            {codeSnippets[0]}
        </SyntaxHighlighter>
      </pre>
      <p>
        In this code snippet, we perform the following actions:
        <ul>
          <li>
            Import the necessary dependencies, including{' '}
            <code>configureStore</code>, <code>authenticationSlice</code>, and{' '}
            <code>postSlice</code>.
          </li>
          <li>
            Configure the Redux store using <code>configureStore</code>. We
            specify the reducers that manage different parts of the
            application's state within the <code>reducer</code> field.
          </li>
          <li>
            Export the configured Redux store (<code>reduxStore</code>) to make
            it available for use throughout the application.
          </li>
        </ul>
      </p>
      <p>
        This Redux store will be responsible for holding and managing the state
        of our Redux application, providing a single source of truth for our
        data.
      </p>
    </div>
  );
}

export default ReduxStoreExplanation;
