import React from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/home">LexMax - Challenge</Link>
      <div className={style.container}>
        <ul className={style.menu}>
          <li>
            <a href="#!">Companies</a>
          </li>
          <li>
            <a href="#!">Products</a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
