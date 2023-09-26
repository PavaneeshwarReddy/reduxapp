import { createSlice } from "@reduxjs/toolkit";


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
export default postSlice.reducer;