import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../context/blog/BlogActions";
import { ImExit } from "react-icons/im";
import "./component-styles/Header.css";
import BlogContext from "../context/blog/BlogContext";

function Header() {
  const { user, dispatch } = useContext(BlogContext);

  const navigate = useNavigate();

  const onlogout = async () => {
    await logOut();
    dispatch({
      type: "LOG_OUT",
      payload: null,
    });
    navigate("/");
  };
  return (
    <header className="header">
      <h1>BlogDev-CMS</h1>
      {user && (
        <a href="##" className="user-email">
          {user.email}
        </a>
      )}
      {user !== null && (
        <nav className="nav">
          <a href="##" className="nav-link" onClick={onlogout}>
            <ImExit />
            Log Out
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;
