import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Navbar.css";

import { reduxStore } from "../StateManagement/Store";
import { useDispatch } from "react-redux";
import { setLogoutInfo } from "../StateManagement/authenticationSlice";

function Navbar() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  reduxStore.subscribe(() => {
    const user = reduxStore.getState().authentication.username;
    console.log("state changed")
    if (user !=="") {
      setUsername(user);
    }
    else{
      setUsername("");
      navigate("/")
    }
  });

  return (
    <div className="navbar">
      <div className="brand">ReduxDemoPlain</div>
      <div></div>
      {username == "" ? (
        <div className="navbar-list">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/doc">Documentation</Link>
        </div>
      ) : (
        <div className="navbar-list">
          <Link to="/">Home</Link>
          <Link to="/doc">Documentation</Link>
          <Link to="/post">Post</Link>
          
          <Link to="/saved">Saved</Link>
          <div style={{ color: "black", backgroundColor: "yellow" }}>
            {username}
          </div>
          <div
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => dispatch(setLogoutInfo())}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
