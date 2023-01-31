import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./context/blog/BlogContext";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import PublishedPosts from "./pages/PublishedPosts";
import UnpublishedPosts from "./pages/UnpublishedPosts";
import EditComment from "./pages/EditComment";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <BlogProvider>
      <Router>
        <div className="App">
          <Header />
          <div className="main-aside">
            <Aside />
            <main>
              <Routes>
                <Route element={<PrivateRoute />}>
                  <Route path="/" element={<Posts />} />
                  <Route path="/newpost" element={<NewPost />} />
                  <Route path="/posts/:postId" element={<Post />} />
                  <Route path="/posts/:postId/edit" element={<EditPost />} />

                  <Route
                    path="/posts/:postId/comments/:commentId"
                    element={<EditComment />}
                  />
                  <Route path="/published-posts" element={<PublishedPosts />} />
                  <Route
                    path="/unpublished-posts"
                    element={<UnpublishedPosts />}
                  />
                </Route>
                <Route path="/login" element={<Login />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;
