import React, { useEffect, useState } from "react";
import "../Styles/Login.css";
import BotImg from "../Images/bot.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoginInfo } from "../StateManagement/authenticationSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [botMessages, setBotMessages] = useState(["Welcome to ReduxDemoPlain"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const botDatabase = [
    "This website is a small demo of how Redux works.",
    "Enter username: Pavaneeshwar7077",
    "Enter password: Test@123",
    "You have successfully completed the login process.",
    "Successfully Saved to Authentication Redux Slice",
  ];

  const handleLogin = () => {
    if (username === "Pavaneeshwar7077" && password === "Test@123") {
      // Successful login
      const successMessages = [
        botDatabase[3],
        botDatabase[4],
        "Now you can see changes in the navbar, the state updates to logged in....",
      ];
      setBotMessages([...botMessages, ...successMessages]);

      setTimeout(() => {
        dispatch(setLoginInfo({ username: "Pavaneeshwar7077", password: "Test@123" }));
        navigate("/post");
      }, 4000);
    } else {
      // Failed login
      alert("Login failed");
    }
  };


 
    const handleIntialLogin = () => {
      setTimeout(() => {
        const initialBotMessages = [botDatabase[0], botDatabase[1], botDatabase[2]];
        setBotMessages((prevMessages) => [...prevMessages, ...initialBotMessages]);
      }, 1000);
    };
  
    // Simulate bot messages over time
    handleIntialLogin();

  
  

  return (
    <div className="login">
      <div>
        <h5>Redux Bot</h5>
        <div className="chatBox">
          <div>
            {botMessages.map((message, index) => (
              <div key={index} className={`bot-message ${index === 4 ? "success-message" : ""}`}>
                <img src={BotImg} alt="Bot" />
                <div>{message}</div>
              </div>
            ))}
          </div>
          <div className="user-message">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button onClick={handleLogin}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
