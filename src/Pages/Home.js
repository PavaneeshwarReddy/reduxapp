import React from 'react';
import Logo from "../Images/logo.png"
import FAQ from './Faqs';

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{display:"flex",alignItems:"center"}}>
        <img src={Logo} width={50} style={{marginTop:"20px"}} alt='Logo' />
        <h1>ReduxPlainDemo</h1>
      </div>
      <h4><a href='https://pavaneeshwar.notion.site/Redux-Epic-Story-e1e5ee7abc8446cca49b3e9a389d6bde?pvs=4'>Read creative story to understand Redux better</a></h4>
      <p>👋 Welcome to ReduxPlainDemo, your journey into the world of Redux!</p>
      <p>🚀 Explore Redux the easy way on our no-frills website. We've stripped away the bells and whistles to focus on what matters most: Redux state management.</p>
      <h2>What You'll Discover Here</h2>
      <ul>
        <li>🗃️ <strong>Redux State Management:</strong> Dive deep into Redux, from setting up your store to dispatching actions and handling reducers.</li>
        <li>🎯 <strong>Centered Content:</strong> Our content is laser-focused on Redux. The title "ReduxPlainDemo" serves as a constant reminder of our mission.</li>
        <li>🎨 <strong>Minimal Design:</strong> We've embraced simplicity, letting Redux shine. No flashy styles or complex layouts—just pure Redux knowledge.</li>
      </ul>
      <img width={500} src="https://www.freecodecamp.org/news/content/images/2022/06/2.png" alt="Screenshot" />
      <p>👩‍💻 Explore, learn, and master Redux with us!</p>
      <p>⚠️ Don't forget to install the Redux DevTools extension for your browser. Get it <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd" target="_blank" rel="noopener noreferrer">here</a>.</p>
      <FAQ />
      <h2>Contact Us</h2>
      <ul>
        <li>👤 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pavaneeshwarreddy/" target="_blank" rel="noopener noreferrer">Pavaneeshwar Reddy</a></li>
        <li>📁 <strong>GitHub:</strong> <a href="https://github.com/PavaneeshwarReddy" target="_blank" rel="noopener noreferrer">PavaneeshwarReddy</a></li>
        <li>📞 <strong>Phone:</strong> +91 8008158841</li>
        <li>📧 <strong>Email:</strong> <a href="mailto:pavaneeshwar7077@gmail.com">pavaneeshwar7077@gmail.com</a></li>
        <li>🌐 <strong>Website:</strong> <a href="https://pavaneeshwarportfolio.carrd.co/" target="_blank" rel="noopener noreferrer">Pavaneeshwar's Portfolio</a></li>
      </ul>
   
    </div>
  );
}

export default Home;
