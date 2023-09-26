import { createSlice } from "@reduxjs/toolkit";


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
export default authenticationSlice.reducer;