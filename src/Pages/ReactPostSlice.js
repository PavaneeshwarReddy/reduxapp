import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { codeSnippets } from '../Data/codeSnippets';

function ReactPostSlice() {
  return (
    <div>
      <h1>Redux Post Slice 📝</h1>
      <p>
        The Redux Post Slice is a crucial part of a Redux application that
        manages state related to saved posts. It's like the treasure chest for your saved posts! 📦 It defines the structure and behavior of the saved posts state and provides actions to modify this state.
      </p>
      <h2>Post Slice Code 🚀</h2>
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
        In this code snippet, we summon the Post Slice using{' '}
        <code>createSlice</code>. It includes:
        <ul>
          <li>
            The initial state, which is an empty array representing saved post
            IDs. It's like starting with an empty treasure chest. 🪙
          </li>
          <li>
            Two powerful reducers (<code>savePost</code> and <code>unSavePost</code>) that handle actions related to saving and unsaving posts. Saving a post is like adding precious jewels to your chest! 💎
          </li>
          <li>
            Exported actions and the reducer to be used within the Redux store. 📤
          </li>
        </ul>
      </p>
      <p>
        The React Post Slice is the guardian of your saved posts, ensuring their safety within the Redux store. It allows you to add and remove post IDs from the saved posts array as if you were filling and emptying your treasure chest. 🗝️
      </p>
    </div>
  );
}

export default ReactPostSlice;
