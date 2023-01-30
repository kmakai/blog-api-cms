import React, { useContext, useEffect, useState } from "react";
import BlogContext from "../context/blog/BlogContext";
import {
  getPostComments,
  updateComment,
  getComment,
} from "../context/blog/BlogActions";
import { useParams, useNavigate } from "react-router-dom";
import "./page-styles/EditComment.css";

function EditCommentForm() {
  const { user, dispatch, comment } = useContext(BlogContext);
  const [text, setText] = useState(comment !== null ? comment.text : "");
  const { commentId, postId } = useParams();

  useEffect(() => {
    const loadComment = async () => {
      const comment = await getComment(postId, commentId, user.token);
      console.log(comment);

      dispatch({
        type: "GET_COMMENT",
        payload: comment,
      });

      setText(comment.text);
    };

    loadComment();
  }, [postId, commentId, user.token, dispatch]);

  const navigate = useNavigate();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await updateComment(postId, commentId, text, user.token);
      console.log(res);
      const comments = await getPostComments(postId);
      dispatch({
        type: "GET_COMMENTS",
        payload: comments,
      });
      setText("");
      navigate(`/posts/${postId}`);
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="comment-form-container">
      <form onSubmit={onSubmit}>
        <h4>
          comment: {commentId} by:{" "}
          {comment && comment.user && comment.user.name}
        </h4>
        <textarea
          name="text"
          value={text}
          id="text"
          cols="30"
          rows="3"
          placeholder="great article"
          onChange={onChange}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

function EditComment() {
  return (
    <div className="edit-comment-page">
      <div className="">
        <h3>Edit Comment:</h3>
        <EditCommentForm />
      </div>
    </div>
  );
}

export default EditComment;
