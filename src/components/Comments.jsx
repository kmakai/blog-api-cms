import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteComment, getPostComments } from "../context/blog/BlogActions";
import BlogContext from "../context/blog/BlogContext";

function Comment({ comment }) {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { user, dispatch } = useContext(BlogContext);

  const onDelete = async (postid, commentid, token) => {
    try {
      const res = await deleteComment(postid, commentid, token);
      console.log(res);
      const comments = await getPostComments(postId);
      dispatch({
        type: "GET_COMMENTS",
        payload: comments,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="post-comment">
      <div className="comment-info">
        <p className="comment-detail">Posted by:</p>{" "}
        <strong className="commenter-name">{comment.user.name}</strong>
        <p className="comment-date">On: {comment.createdAt.split("T")[0]}</p>
      </div>
      <hr />
      <p className="comment-text">{comment.text}</p>
      <hr />
      <div className="comment-btns">
        <button
          className="comment-edit"
          onClick={() => navigate(`comments/${comment._id}`)}
        >
          Edit
        </button>
        <button
          className="comment-delete"
          onClick={() => onDelete(postId, comment._id, user.token)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function Comments({ comments }) {
  return (
    <div className="comments-container">
      {comments.length > 0 &&
        comments.map((comment) => (
          <Comment comment={comment} key={comment._id} />
        ))}
    </div>
  );
}

export default Comments;
