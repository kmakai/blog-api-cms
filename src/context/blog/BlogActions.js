import axios from "axios";
const apiUrl = "https://express-blog-api-production-ca87.up.railway.app";
// POST ACTIONS ///
// get posts from api
export const getPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${apiUrl}/api/posts/author`, config);

  return response.data;
};

// get single post
export const getPost = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${apiUrl}/api/posts/${id}`, config);

  return response.data;
};

// submit post
export const submitPost = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${apiUrl}/api/posts`, data, config);

  return response.data;
};

// update post
export const updatePost = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    `${apiUrl}/api/posts/${data.id}`,
    data,
    config
  );

  return response.data;
};

export const updatePostPublishStatus = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    `${apiUrl}/api/posts/${data._id}`,
    data,
    config
  );

  return response.data;
};

export const deletePost = async (postId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${apiUrl}/api/posts/${postId}`, config);

  return response.data;
};

// get post comments
export const getPostComments = async (id) => {
  const response = await axios.get(`${apiUrl}/api/posts/${id}/comments`);

  return response.data;
};

// add a comment
export const postComment = async (id, text, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(
    `${apiUrl}/api/posts/${id}/comments`,
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
    `${apiUrl}/api/posts/${postId}/comments/${commentId}`,
    config
  );

  return response.data;
};

// update/edit a comment
export const updateComment = async (postId, commentId, text, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    `${apiUrl}/api/posts/${postId}}/comments/${commentId}`,
    { text },
    config
  );

  return response.data;
};

// delete a comment
export const deleteComment = async (postId, commentId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(
    `${apiUrl}/api/posts/${postId}}/comments/${commentId}`,
    config
  );

  return response.data;
};

// logIn
export const login = async (formData) => {
  const response = await axios.post(`${apiUrl}/api/users/login`, formData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// LogOut
export const logOut = () => {
  localStorage.removeItem("user");
};
