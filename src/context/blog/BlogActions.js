import axios from "axios";

// get posts from api
export const getPosts = async () => {
  const response = await axios.get(`http://localhost:5000/api/posts`);

  console.log(response.data);
  return response.data;
};

// get single post
export const getPost = async (id) => {
  console.log(id);
  const response = await axios.get(`http://localhost:5000/api/posts/${id}`);

  console.log(response.data);
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

// login
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

export const logOut = () => {
  localStorage.removeItem("user");
};
