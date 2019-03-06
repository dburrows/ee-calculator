import { createSlice } from "redux-starter-kit";

const postsSlice = createSlice({
  slice: "posts",
  initialState: [],
  reducers: {
    createPost(/* state, action */) {},
    updatePost(/* state, action */) {},
    deletePost(/* state, action */) {}
  }
});

// Extract the action creators object and the reducer
const { actions, reducer } = postsSlice;
// Extract and export each action creator by name
export const { createPost, updatePost, deletePost } = actions;
// Export the reducer, either as a default or named export
export const postsReducer = reducer;
