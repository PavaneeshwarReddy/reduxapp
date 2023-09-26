import React from 'react';
import Logo from "../Images/logo.png"

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{display:"flex",alignItems:"center"}}>
        <img src={Logo} width={50} style={{marginTop:"20px"}} alt='unable to load'/>
        <h1>ReduxPlainDemo</h1>
      </div>
      <p>Welcome to ReduxPlainDemo</p>
      <p>On our ReduxPlainDemo website, we prioritize the fundamental aspect of Redux state management. Our home page is a testament to this commitment, as we keep design simplicity to a minimum to focus on how Redux state is handled in our application.</p>
      <h2>What You'll Find Here</h2>
      <ol>
        <li><strong>Redux State Management:</strong> Our primary goal is to demonstrate the power and efficiency of Redux in managing the state of your application. You'll find code snippets and examples that showcase various aspects of Redux, from setting up your store to dispatching actions and handling reducers.</li>
        <li><strong>Centered Content:</strong> We've centered all our content to ensure your attention remains on Redux. The title "ReduxPlainDemo" is prominently displayed, reminding you of our core focus.</li>
        <li><strong>Minimal Design:</strong> By design, our website doesn't care about aesthetics. Instead, we prioritize functionality and understanding Redux. You won't find complex styles or elaborate layouts here—just pure Redux knowledge.</li>
      </ol>
      <img width={500} src="https://www.freecodecamp.org/news/content/images/2022/06/2.png" alt="unabelt to load"/>
      <p>Explore and Learn</p>
      <p>Feel free to navigate through our site to explore the world of Redux state management. Whether you're new to Redux or looking to deepen your understanding, our content is here to guide you.</p>
      <p>Happy Redux coding!</p>
      <p style={{color:"red"}}>Install the Redux DevTools extension for your browser <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd" target="_blank" rel="noopener noreferrer">here</a>.</p>
      {/* Contact Us Section */}
      <h2>Contact Us</h2>
      <ul>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pavaneeshwarreddy/" target="_blank" rel="noopener noreferrer">Pavaneeshwar Reddy</a></li>
        <li><strong>GitHub:</strong> <a href="https://github.com/PavaneeshwarReddy" target="_blank" rel="noopener noreferrer">PavaneeshwarReddy</a></li>
        <li><strong>Phone:</strong> +91 8008158841</li>
        <li><strong>Email:</strong> <a href="mailto:pavaneeshwar7077@gmail.com">pavaneeshwar7077@gmail.com</a></li>
        <li><strong>Website:</strong> <a href="https://pavaneeshwarportfolio.carrd.co/" target="_blank" rel="noopener noreferrer">Pavaneeshwar's Portfolio</a></li>
      </ul>

      {/* Include a link to Redux DevTools extension */}
     
    </div>
  );
}

export default Home;
