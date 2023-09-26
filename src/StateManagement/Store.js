import { configureStore } from "@reduxjs/toolkit"
import authenticationSlice from "./authenticationSlice"
import postSlice from "./postSlice"



export const   reduxStore = configureStore({
    reducer:{
        authentication:authenticationSlice,
        post:postSlice
    }
})