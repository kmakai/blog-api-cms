import React, { useContext } from "react";
import "./component-styles/Aside.css";
import BlogContext from "../context/blog/BlogContext";

function Aside() {
  const { user, dispatch } = useContext(BlogContext);

  return (
    <aside className="aside">
      {user && (
        <div className="aside-nav">
          <a href="/" className="aside-link group">
            All posts
            <div className="aside-link-bar"></div>
          </a>
          <a href="##" className="aside-link group">
            Published posts
            <div className="aside-link-bar"></div>
          </a>
          <a href="##" className="aside-link group">
            Unpublished posts
            <div className="aside-link-bar"></div>
          </a>
          <a href="##" className="aside-link group">
            Create new post
            <div className="aside-link-bar"></div>
          </a>
        </div>
      )}
    </aside>
  );
}

export default Aside;
