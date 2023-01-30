import React from "react";
import { useNavigate } from "react-router-dom";

function Comment({ comment }) {
  const navigate = useNavigate();

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
        <button className="comment-delete">Delete</button>
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
