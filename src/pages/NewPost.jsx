import React, { useContext, useState } from "react";
import "./page-styles/NewPost.css";
import { submitPost } from "../context/blog/BlogActions";
import BlogContext from "../context/blog/BlogContext";
import { useNavigate } from "react-router-dom";

function NewPost() {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
  });

  const { user } = useContext(BlogContext);
  const { title, text } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitPost(formData, user.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="new-post-page">
      <h3>New Article:</h3>
      <form className="post-form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="title">Article title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            placeholder="Please enter title"
            onChange={onChange}
          />
        </div>

        <div className="field">
          <label htmlFor="text">Article body:</label>
          <textarea
            name="text"
            value={text}
            id="text"
            cols="25"
            rows="25"
            placeholder="great article"
            onChange={onChange}
          ></textarea>
        </div>

        <button className="post-btn">Submit</button>
      </form>
    </div>
  );
}

export default NewPost;
