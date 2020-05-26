import React, { useState } from "react";
import style from "./Login.module.css";
import image from "../../../assets/images/image1.png";
import { Link } from "react-router-dom";

const Login = () => {
  //state para iniciar sesion
  const [user, saveUser] = useState({
    email: "",
    password: "",
  });

  //extraer el usuario
  const { email, password } = user;

  const iniciarSesion = (e) => {
    saveUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //cuando el usuario quiere iniciar sesion

  const onSubmit = (e) => {
    e.preventDefault();

    //Validar que no haya campos vacios

    //Pasar al action (reduce)
  };

  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className="col">
          <figure>
            <img className={style.img} src={image} alt="image_login" />
          </figure>
        </div>
        <form onSubmit={onSubmit} className={`col ${style.formContainer}`}>
          <label>Access to Plataform</label>
          <h1>LOGIN</h1>
          <div className="form-group">
            <label htmlFor="email">Email Adress</label>
            <input
              className="form-control"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={iniciarSesion}
            />
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              value={password}
              onChange={iniciarSesion}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-3"
            value="Iniciar Sesion"
          >
            Ingresar
          </button>
          <Link to="/register">Obtener Cuenta</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
