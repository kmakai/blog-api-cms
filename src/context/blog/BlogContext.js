import { createContext, useReducer } from "react";
import BlogReducer from "./BlogReducer";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const signedIn = JSON.parse(localStorage.getItem("user"));
  const initialState = {
    user: signedIn ? signedIn : null,
    posts: [],
    post: null,
    comments: [],
  };

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  return (
    <BlogContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
