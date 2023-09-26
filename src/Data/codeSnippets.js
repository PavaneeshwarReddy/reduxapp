export const codeSnippets = [
    `import { configureStore } from "@reduxjs/toolkit"
    import authenticationSlice from "./authenticationSlice"
    import postSlice from "./postSlice"

    export const   reduxStore = configureStore({
        reducer:{
            authentication:authenticationSlice,
            post:postSlice
        }
    })`,
    `import { createSlice } from "@reduxjs/toolkit";


    var initialAuthenticationState = {
        username:"",
        password:""
    }
    
    export const authenticationSlice = createSlice({
        name:"authenticationslice",
        initialState:initialAuthenticationState,
        reducers:{
            setLoginInfo:(state,action)=>{
                state.username = action.payload.username;
                state.password = action.payload.password; 
            },
            setLogoutInfo:(state)=>{
                state.username = "";
                state.password = ""; 
            }
    
        }
    })
    
    export const  {setLoginInfo,setLogoutInfo} = authenticationSlice.actions;
    export default authenticationSlice.reducer;`,
    `import { createSlice } from "@reduxjs/toolkit";


    var savedPosts = [];
    
    export const postSlice = createSlice({
        name: "authenticationslice",
        initialState: savedPosts,
        reducers: {
          savePost: (state, action) => {
            if (!state.includes(action.payload.id)) {
              state.unshift(action.payload.id);
            }
          },
          unSavePost: (state, action) => {
            const indexToRemove = state.indexOf(action.payload.id);
            if (indexToRemove !== -1) {
              state.splice(indexToRemove, 1);
            }
          },
        },
      });
      
    
    export const  {savePost,unSavePost} = postSlice.actions;
    export default postSlice.reducer;`,
    `reduxStore.subscribe(() => {
      const user = reduxStore.getState().authentication.username;
      console.log("state changed")
      if (user != "") {
        setUsername(user);
      }
      else{
        setUsername("");
        navigate("/")
      }
    });`,
    `const dispatch = useDispatch();
    const handleSavePost = (index)=>{
      dispatch(savePost({id:index}));
      console.log(index);
      alert("Post Saved Successfully");
    }`,
    `const user = reduxStore.getState().authentication.username;`,
    `import React, { useEffect, useState } from "react";
    import { Route, Routes, useNavigate } from "react-router-dom";
    import { useDispatch, useSelector } from "react-redux";
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
    `
]