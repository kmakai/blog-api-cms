import "./component-styles/PostPreview.css";
import React from "react";
import { useNavigate } from "react-router-dom";

function PostPreview({ post }) {
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/posts/${id}`);
  };
  return (
    <div
      className={`post-card ${post.published ? "published" : "unpublished"}`}
    >
      <h3 className="card-title">{post.title}</h3>
      <p className="card-body">{post.text}</p>
      <div className="card-buttons">
        <button className="btn-edit">Edit</button>
        <button className="btn-view" onClick={() => handleView(post._id)}>
          View
        </button>
        {post.published ? (
          <button className="btn-unpublish">Unpublish</button>
        ) : (
          <button className="btn-publish">Publish</button>
        )}
      </div>
    </div>
  );
}

export default PostPreview;
