import "./page-styles/Posts.css";
import React, { useContext, useEffect } from "react";
import BlogContext from "../context/blog/BlogContext";
import { getPosts } from "../context/blog/BlogActions";
import PostPreview from "../components/PostPreview";

function UnpublishedPosts() {
  const { posts, dispatch, user } = useContext(BlogContext);

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await getPosts(user.token);
      dispatch({
        type: "GET_POSTS",
        payload: posts.filter((p) => p.published === false),
      });
    };

    loadPosts();
  }, [dispatch, user.token]);

  if (posts.length === 0) return <h1>Loading</h1>;

  return (
    <div className="posts-page">
      <div className="posts-container">
        {posts.map((post) => {
          return <PostPreview post={post} key={post._id} />;
        })}
      </div>
    </div>
  );
}

export default UnpublishedPosts;
