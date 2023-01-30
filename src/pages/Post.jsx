import "./page-styles/Post.css";
import React from "react";
import { useContext, useEffect } from "react";
import BlogContext from "../context/blog/BlogContext";
import { useParams } from "react-router-dom";
import { getPost, getPostComments } from "../context/blog/BlogActions";
import Comments from "../components/Comments";
import CommentForm from "../components/CommentForm";

function Post() {
  const { post, comments, dispatch, user } = useContext(BlogContext);
  const { postId } = useParams();

  useEffect(() => {
    const loadPost = async () => {
      const post = await getPost(postId, user.token);
      const comments = await getPostComments(postId);
      dispatch({
        type: "GET_POST",
        payload: post,
      });

      dispatch({
        type: "GET_COMMENTS",
        payload: comments,
      });
    };

    loadPost();
  }, [dispatch, postId, user.token]);

  if (post === null) return <p>Loading...</p>;

  return (
    <div className="single-post-page">
      <div className="post">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-detail">
          Posted: {post.createdAt.split("T")[0]} by: {post.author.name}{" "}
        </p>
        <p className="post-body">{post.text}</p>
        {user && <CommentForm />}
      </div>
      <h3 className="post-comments-title">Comments:</h3>
      <Comments comments={comments} />
    </div>
  );
}

export default Post;
