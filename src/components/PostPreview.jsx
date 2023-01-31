import "./component-styles/PostPreview.css";
import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { updatePostPublishStatus } from "../context/blog/BlogActions";
import BlogContext from "../context/blog/BlogContext";
function PostPreview({ post }) {
  const navigate = useNavigate();
  const { user } = useContext(BlogContext);

  const handleView = (id) => {
    navigate(`/posts/${id}`);
  };

  const handlePublishStatus = async (post) => {
    const data = {
      ...post,
      published: !post.published,
    };
    try {
      await updatePostPublishStatus(data, user.token);
      post.published
        ? navigate(`/unpublished-posts`)
        : navigate(`/published-posts`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`post-card ${post.published ? "published" : "unpublished"}`}
    >
      <h3 className="card-title">{post.title}</h3>
      <p className="card-body">{post.text}</p>
      <div className="card-buttons">
        <button className="btn-edit">
          <Link className="h-full w-full" to={`/posts/${post._id}/edit`}>
            Edit
          </Link>
        </button>
        <button className="btn-view" onClick={() => handleView(post._id)}>
          View
        </button>
        {post.published ? (
          <button
            className="btn-unpublish"
            onClick={() => handlePublishStatus(post)}
          >
            Unpublish
          </button>
        ) : (
          <button
            className="btn-publish"
            onClick={() => handlePublishStatus(post)}
          >
            Publish
          </button>
        )}
      </div>
    </div>
  );
}

export default PostPreview;
