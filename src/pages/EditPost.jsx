import React, { useContext, useState, useEffect } from "react";
import "./page-styles/NewPost.css";
import { getPost, updatePost } from "../context/blog/BlogActions";
import BlogContext from "../context/blog/BlogContext";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const { user, post, dispatch } = useContext(BlogContext);
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    id: "",
  });

  const { postId } = useParams();
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
    console.log(formData);
    try {
      const res = await updatePost(formData, user.token);
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadPost = async () => {
      const post = await getPost(postId, user.token);
      dispatch({
        type: "GET_POST",
        payload: post,
      });

      setFormData({
        title: post.title,
        text: post.text,
        id: post._id,
      });
    };

    loadPost();
  }, [dispatch, postId, user.token]);

  if (post === null) return <h1>LOADING....</h1>;

  return (
    <div className="new-post-page">
      <h3>Edit Article:</h3>
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

export default EditPost;
