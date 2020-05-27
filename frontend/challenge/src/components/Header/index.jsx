import React, { useContext } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import CompanyContext from "../../context/company/CompanyContext";

const Header = () => {
  //obtener el state del usuario
  const authContext = useContext(CompanyContext);
  const { viewUsername, mostrarUsername } = authContext;

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
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          {viewUsername ? (
            <li>
              Hola <span>Jhosep</span>
            </li>
          ) : null}
          <li>
            <button
              onClick={() => mostrarUsername()}
              type="button"
              className="btn btn-info"
            >
              View Username
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
