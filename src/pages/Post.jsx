import "./page-styles/Post.css";
import React from "react";
import { useContext, useEffect } from "react";
import BlogContext from "../context/blog/BlogContext";
import { useParams, useNavigate } from "react-router-dom";
import {
  deletePost,
  getPost,
  getPostComments,
} from "../context/blog/BlogActions";
import Comments from "../components/Comments";
import CommentForm from "../components/CommentForm";

function Post() {
  const { post, comments, dispatch, user } = useContext(BlogContext);
  const { postId } = useParams();
  const navigate = useNavigate();

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

  const onDel = async (id, token) => {
    const res = window.confirm("Are you sure you wish to delete this post?");
    console.log(res);

    if (res) {
      try {
        await deletePost(id, token);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/");
    }
  };

  if (post === null) return <p>Loading...</p>;

  return (
    <div className="single-post-page">
      <button className="del-btn" onClick={() => onDel(post._id, user.token)}>
        Delete this post
      </button>
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
