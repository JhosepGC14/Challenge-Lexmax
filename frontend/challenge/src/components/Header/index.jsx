import React, { useContext, useEffect, Fragment } from "react";
import { useHistory } from "react-router-dom";

import style from "./Header.module.css";
import { Link } from "react-router-dom";
import AuthContext from "../../context/autentication/authContext";

const Header = () => {
  const authContext = useContext(AuthContext);
  const { username, userAuthenticated, logOut, authenticated } = authContext;

  useEffect(() => {
    userAuthenticated();
    // eslint-disable-next-line
  }, []);

  const history = useHistory();
  useEffect(() => {
    if (!authenticated) {
      history.push("/login");
    } else {
      history.push("/home");
    }
    // eslint-disable-next-line
  }, [authenticated]);

  return (
    <header className={style.header}>
      <nav
        className={`${style.navbar} navbar navbar-expand-lg navbar-dark bg-dark`}
      >
        <Link className="navbar-brand" to="/home">
          React - Challenge
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${style.container} collapse navbar-collapse`}
          id="navbarNav"
        >
          <ul className={`${style.menu} navbar-nav justify-content-end`}>
            <li className="nav-item">
              <Link className="nav-link" to="/companies">
                Companies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            {username ? (
              <Fragment>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#!"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Welcome {username.name}
                  </a>
                  <div
                    className="dropdown-menu bg-dark"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <button
                      className={`${style.btn_blank} dropdown-item color-light`}
                      onClick={() => logOut()}
                    >
                      Log Out
                    </button>
                  </div>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
