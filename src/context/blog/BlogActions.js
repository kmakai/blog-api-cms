import axios from "axios";

// POST ACTIONS ///
// get posts from api
export const getPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    `http://localhost:5000/api/posts/author`,
    config
  );

  return response.data;
};

// get single post
export const getPost = async (id, token) => {
  console.log(id);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    `http://localhost:5000/api/posts/${id}`,
    config
  );

  console.log(response);
  return response.data;
};

// get post comments
export const getPostComments = async (id) => {
  console.log(id);
  const response = await axios.get(
    `http://localhost:5000/api/posts/${id}/comments`
  );

  console.log(response.data);
  return response.data;
};

export const postComment = async (id, text, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    `http://localhost:5000/api/posts/${id}/comments`,
    { text },
    config
  );

  return response.data;
};

// get single comment
export const getComment = async (postId, commentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(
    `http://localhost:5000/api/posts/${postId}/comments/${commentId}`,
    config
  );

  console.log(response);
  return response.data;
};

export const updateComment = async (postId, commentId, text, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    `http://localhost:5000/api/posts/${postId}}/comments/${commentId}`,
    { text },
    config
  );

  return response.data;
};

// logIn
export const login = async (formData) => {
  const response = await axios.post(
    "http://localhost:5000/api/users/login",
    formData
  );

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// LogOut
export const logOut = () => {
  localStorage.removeItem("user");
};
