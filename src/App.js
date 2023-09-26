import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Post from "./Pages/Post";
import Saved from "./Pages/Saved";
import Documentation from "./StateManagement/Documentation";
import { reduxStore } from "./StateManagement/Store";

function App() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => !!state.authentication.username);

  useEffect(() => {
    // Subscribe to changes in the Redux store
    const unsubscribe = reduxStore.subscribe(() => {
      const user = reduxStore.getState().authentication.username;
      if (user !== "") {
        setUsername(user);
      } else {
        setUsername("");
        navigate("/");
      }
    });

    // Unsubscribe when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [navigate]);

  return (
    <div>
      <Navbar username={username} />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        {isAuthenticated && (
          <>
            <Route element={<Post />} path="/post" />
            <Route element={<Saved />} path="/saved" />
          </>
        )}
        <Route element={<Documentation />} path="/doc" />
      </Routes>
    </div>
  );
}

export default App;
