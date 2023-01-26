import React from "react";

function Comment({ comment }) {
  return (
    <div className="post-comment">
      <div className="comment-info">
        <p>Posted by:</p> <strong>{comment.user.name}</strong>
        <p>On: {comment.createdAt.split("T")[0]}</p>
      </div>
      <hr />
      <p>{comment.text}</p>
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
