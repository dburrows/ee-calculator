import { configureStore } from "redux-starter-kit";
import { postsReducer } from "./reducers/posts";

export const createStore = () => {
  return configureStore({
    reducer: {
      posts: postsReducer
    }
  });
};
