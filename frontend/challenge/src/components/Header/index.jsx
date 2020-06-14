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
      <Link to="/home">LexMax - Challenge</Link>
      <div className={style.container}>
        <ul className={style.menu}>
          <li>
            <Link to="/companies">Companies</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          {username ? (
            <Fragment>
              <li>
                Welcome <span>{username.name}</span>
              </li>
              <li>
                <button className={style.btn_blank} onClick={() => logOut()}>
                  Log Out
                </button>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
