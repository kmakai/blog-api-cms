import React, { useContext, useState } from "react";
import BlogContext from "../context/blog/BlogContext";
import { postComment, getPostComments } from "../context/blog/BlogActions";
import { useParams } from "react-router-dom";

function CommentForm() {
  const [text, setText] = useState("");
  const { user, dispatch } = useContext(BlogContext);
  const { postId } = useParams();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await postComment(postId, text, user.token);
      const comments = await getPostComments(postId);
      dispatch({
        type: "GET_COMMENTS",
        payload: comments,
      });
      setText("");
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div className="comment-form-container">
      <form onSubmit={onSubmit}>
        <h4>Leave a comment:</h4>
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

export default CommentForm;
