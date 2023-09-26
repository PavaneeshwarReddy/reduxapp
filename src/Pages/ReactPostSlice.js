import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { codeSnippets } from '../Data/codeSnippets';

function ReactPostSlice() {
  return (
    <div>
      <h1>Redux Post Slice</h1>
      <p>
        The React Post Slice is a crucial part of a Redux application that
        manages state related to saved posts. It defines the structure and
        behavior of the saved posts state and provides actions to modify this
        state.
      </p>
      <h2>Post Slice Code</h2>
      <p>
        Below is the code snippet that represents the Post Slice in a Redux
        application:
      </p>
      <pre>
      <SyntaxHighlighter language='javascript' style={docco}>
            {codeSnippets[2]}
        </SyntaxHighlighter>
      </pre>
      <p>
        In this code snippet, we define the Post Slice using{' '}
        <code>createSlice</code>. It includes:
        <ul>
          <li>
            The initial state, which is an empty array representing saved post
            IDs.
          </li>
          <li>
            Two reducers (<code>savePost</code> and <code>unSavePost</code>) that
            handle actions related to saving and unsaving posts.
          </li>
          <li>
            Exported actions and the reducer to be used within the Redux store.
          </li>
        </ul>
      </p>
      <p>
        The React Post Slice is responsible for managing the state of saved
        posts within the Redux store. It allows you to add and remove post IDs
        from the saved posts array as needed.
      </p>
    </div>
  );
}

export default ReactPostSlice;
